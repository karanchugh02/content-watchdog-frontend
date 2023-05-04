import React from 'react';
import ApiInformationBox from './api-information-box';

function ApiInformation() {
  return (
    <div className="rounded-lg text-white bg-white max-h-[40%] overflow-y-scroll shadow-md mt-5 ml-5 mr-5 ">
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
          Api Details
        </div>
        <div className="addButton min-w-[100px]"></div>
      </div>

      <div className="px-5 py-5">
        <ApiInformationBox
          method="POST"
          code={`console.log(5)`}
          title={'Send Request'}
          url={'https://api.contentwatchdog.tech/service/image'}
        />
      </div>
    </div>
  );
}

export default ApiInformation;
