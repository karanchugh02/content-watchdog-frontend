import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import Highlighter from 'react-highlight-words';
import moment from 'moment';
import { BiCopy } from 'react-icons/bi';
import Toast from '@/utils/notification';

interface DataType {
  key: string;
  accessKey: string;
  accessSecret: string;
  usageCount: number;
  createdAt: Date;
  lastUsed: Date;
}

type DataIndex = keyof DataType;

const KeysTable = ({ data, loading }: { data: any; loading: boolean }) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: () => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined style={{ verticalAlign: 'middle' }} />}
            size="small"
            style={{
              width: 90,
              color: 'white',
              backgroundColor: 'black',
              // padding: '10px',
              // height: '40px',
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  let sno = 1;
  const columns: ColumnsType<DataType> = [
    {
      title: 'Sno',
      dataIndex: 'sno',
      key: 'sno',
      width: '5%',
      align: 'center',
      render: () => {
        return <>{sno++}</>;
      },
    },
    {
      title: 'Access Key',
      dataIndex: 'accessKey',
      key: 'accessKey',
      width: '20%',

      align: 'center',
    },
    {
      title: 'Access Secret',
      dataIndex: 'accessSecret',
      key: 'accessKey',
      width: '15%',
      align: 'center',
      render: (data) => {
        return (
          <div className="flex flex-row items-center justify-center space-x-2">
            <div>***********</div>
            <div>
              <BiCopy
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  navigator.clipboard.writeText(data);
                  let newToast = new Toast('Copying Api Secret');
                  newToast.success('Copied Api Secret to Clipboard');
                  return;
                }}
                height={10}
                width={10}
              />
            </div>
          </div>
        );
      },
    },
    {
      title: 'Usage Count',
      dataIndex: 'usageCount',
      key: 'usageCount',
      width: '15%',
      align: 'center',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '15%',
      ...getColumnSearchProps('createdAt'),
      render: (data) => {
        return <>{moment(data).utcOffset('+05:30').format('YYYY-MM-DD')}</>;
      },
      align: 'center',
    },
    {
      title: 'Last Used',
      dataIndex: 'updatedAt',
      key: 'lastUsed',
      width: '15%',
      ...getColumnSearchProps('lastUsed'),
      render: (data) => {
        return (
          <>{moment(data).utcOffset('+05:30').format('YYYY-MM-DD HH:MM')}</>
        );
      },
      align: 'center',
    },
  ];

  return <Table loading={loading} columns={columns} dataSource={data} />;
};

export default KeysTable;
