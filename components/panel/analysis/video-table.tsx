import React, { useEffect, useRef, useState } from 'react';
import { EyeOutlined, SearchOutlined } from '@ant-design/icons';
import { Image, InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import ReactPlayer from 'react-player';
import Highlighter from 'react-highlight-words';
import moment from 'moment';
import Query from '@/utils/query';
import { userAuthStore } from 'store/user';
import ResultModal from './result-modal';

interface DataType {
  key: string;
  s3Url: string;
  results: Array<object>;
  createdAt: Date;
  updatedAt: Date;
}

type DataIndex = keyof DataType;

const VideoTable = () => {
  const [loading, setLoading] = useState(false);
  const [videosData, setVideosData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const { user } = userAuthStore();
  const [searchedColumn, setSearchedColumn] = useState('');
  const [modal, setModal] = useState({ show: false, result: [] });
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
  let sno2 = 1;
  const columns: ColumnsType<DataType> = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: '5%',
      align: 'center',
    },
    {
      title: 'Video',
      dataIndex: 's3Url',
      key: 's3Url',
      width: '10%',
      align: 'center',
      render: (data) => {
        console.log('image data is ', data);
        return (
          <>
            <div className="flex flex-row justify-center items-center">
              <ReactPlayer
                url={data}
                height={100}
                width={140}
                controls={true}
                style={{ justifyItems: 'center' }}
              />
            </div>
          </>
        );
      },
    },
    {
      title: 'Results',
      dataIndex: 'results',
      key: 'results',
      width: '15%',
      align: 'center',
      render: (data) => {
        return (
          <>
            <Button
              type="primary"
              size="small"
              icon={<EyeOutlined style={{ verticalAlign: 'middle' }} />}
              style={{ verticalAlign: 'middle', backgroundColor: 'black' }}
              onClick={() => {
                setModal({ result: data, show: true });
              }}
            >
              View
            </Button>
          </>
        );
      },
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
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: '15%',
      ...getColumnSearchProps('updatedAt'),
      render: (data) => {
        return <>{moment(data).utcOffset('+05:30').format('YYYY-MM-DD')}</>;
      },
      align: 'center',
    },
  ];

  const videosDataFetcher = async () => {
    setLoading(true);
    let response = await Query.GET(
      '/analysis/get-video-data',
      user?.token || ''
    );
    if (response.status == true) {
      setVideosData(response.data);
    }
    setLoading(false);
    return;
  };

  useEffect(() => {
    videosDataFetcher();
  }, []);

  return (
    <>
      {modal.show == true && (
        <ResultModal
          result={modal.result}
          closeModal={() => {
            setModal({ result: [], show: false });
          }}
        />
      )}

      <div className="rounded-lg text-white bg-white max-h-[55%] overflow-y-scroll shadow-md mt-5 ml-5 mr-5 ">
        <div className="header border-b-black bg-white border-b-2 flex flex-row justify-between items-center py-2 px-10 sticky top-0 z-40 ">
          <div className="exportButton">
            {/* <CSVLink data={transactionsData} href="" filename="transactions-data">
            <Button
              type="primary"
              icon={<DownloadOutlined style={{ verticalAlign: 'middle' }} />}
              size={'middle'}
              style={{
                color: 'white',
                backgroundColor: 'black',
                height: '40px',
                border: '1px solid',
                // borderColor: 'red',
              }}
              onClick={() => {
                // let toast = createToast('Downloading File');
                // updateSuccessToast(toast, 'File Downloaded');
              }}
            >
              Download
            </Button>
          </CSVLink> */}
          </div>
          <div className="heading font-semibold md:text-3xl text-black text-xl">
            Video Analysis Results
          </div>
          <div className="addButton"></div>
        </div>

        <div className="containerTable overflow-x-scroll">
          <Table
            loading={loading}
            pagination={{ defaultPageSize: 5 }}
            columns={columns}
            dataSource={videosData}
          />
        </div>
      </div>
    </>
  );
};

export default VideoTable;
