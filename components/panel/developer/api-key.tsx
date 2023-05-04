import Toast from '@/utils/notification';
import Query from '@/utils/query';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { userAuthStore } from 'store/user';
import KeysTable from './api-key-table';

function Apikey() {
  const { user } = userAuthStore();
  const [keysData, setKeysData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const addApiKeyHandler = async () => {
    let newToast = new Toast('Generating New Api Key!!!');
    let response = await Query.GET(
      '/organization/create-api-key',
      user?.token || ''
    );

    if (response.status == true) {
      newToast.success('Key Generated Successfully');
      setRefresh(refresh + 1);
    } else {
      newToast.error(response.message);
    }
    return;
  };

  const apiDataFetcher = async () => {
    setLoading(true);
    let response = await Query.GET(
      '/organization/get-api-key',
      user?.token || ''
    );

    if (response.status == true) {
      setKeysData(response.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    apiDataFetcher();
  }, [refresh]);

  return (
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
          Api Keys
        </div>
        <div className="addButton">
          <Button
            type="primary"
            icon={<PlusOutlined style={{ verticalAlign: 'middle' }} />}
            size={'middle'}
            style={{
              color: 'white',
              backgroundColor: 'black',
              height: '40px',
              width: '115px',
              border: '1px solid',
              // borderColor: 'red',
            }}
            onClick={() => {
              addApiKeyHandler();
            }}
          >
            Add
          </Button>
        </div>
      </div>

      <div className="containerTable overflow-x-scroll">
        <KeysTable data={keysData} loading={loading} />
      </div>
    </div>
  );
}

export default Apikey;
