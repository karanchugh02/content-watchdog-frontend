import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import Highlighter from 'react-highlight-words';
import moment from 'moment';

interface DataType {
  key: string;
  transactionId: string;
  orderId: string;
  initialBalance: number;
  finalBalance: boolean;
  amount: boolean;
  createdAt: Date;
}

type DataIndex = keyof DataType;

const BillingTable = ({ data, loading }: { data: any; loading: boolean }) => {
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
      title: 'Transaction Id',
      dataIndex: 'transactionId',
      key: 'transactionId',
      width: '20%',
      ...getColumnSearchProps('transactionId'),

      align: 'center',
    },
    {
      title: 'Order Id',
      dataIndex: 'orderId',
      key: 'orderId',
      width: '15%',
      ...getColumnSearchProps('orderId'),
      align: 'center',
    },
    {
      title: 'Initial Balance',
      dataIndex: 'initialBalance',
      key: 'initialBalance',
      width: '15%',
      ...getColumnSearchProps('initialBalance'),
      align: 'center',
    },
    {
      title: 'Final Balance',
      dataIndex: 'finalBalance',
      key: 'finalBalance',
      width: '15%',
      ...getColumnSearchProps('finalBalance'),
      align: 'center',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      width: '15%',
      ...getColumnSearchProps('amount'),
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
  ];

  return <Table loading={loading} columns={columns} dataSource={data} />;
};

export default BillingTable;
