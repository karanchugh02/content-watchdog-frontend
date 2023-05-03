import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { CSVLink } from 'react-csv';
import React, { useEffect, useState } from 'react';
import BillingModal from './billing-modal';
import Query from '@/utils/query';

import { userAuthStore } from '../../../store/user';
import Toast from '@/utils/notification';
import BillingTable from './billing-table';

function BillingMain() {
  const [modal, showModal] = useState(false);
  const [transactionsData, setTransactionsData] = useState<any>([]);
  const [tableLoading, setTableLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const { user } = userAuthStore();

  function loadScript(src: string) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay(credits: number) {
    let toast = new Toast('Processing Request!!!');
    showModal(false);
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const result = await Query.POST(
      '/organization/add-balance',
      {
        amount: credits,
      },
      user?.token || ''
    );

    if (result.status == false) {
      alert('Server error. Are you online?');

      return;
    }

    toast.success('Request Processed!!!');
    console.log('result data is ', result.data);
    const { amount, order } = result.data;

    let order_id = order.id;
    const options = {
      key: 'rzp_test_EFAYcdLnZmIrmZ', // Enter the Key ID generated from the Dashboard
      amount: (amount * 100).toString(),
      name: 'Contentwatchdog',
      description: 'Credits Payment',
      //   image: { logo },
      order_id: order_id,
      handler: async function (response: any) {
        const data = {
          orderCreationId: order_id,
          amount: amount,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };
        let newToast = new Toast('Verifying Transaction');

        const result = await Query.POST(
          '/organization/verify-payment',
          data,
          user?.token || ''
        );
        console.log('result from server is ', result);

        if (result.status == true) {
          newToast.success('Successfully Processed the payment!!!');
          setRefresh(refresh + 1);
        } else {
          newToast.error(result.message);
        }
      },
      prefill: {
        name: 'Karan Chugh',
        email: 'karanchugh02@gmail.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Home',
      },
      theme: {
        color: '#000000',
      },
    };

    //@ts-ignore
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const transactionsDataFetcher = async () => {
    setTableLoading(true);
    let response = await Query.GET(
      '/organization/transactions',
      user?.token || ''
    );

    setTransactionsData(response.data || []);
    setTableLoading(false);
    return;
  };

  useEffect(() => {
    transactionsDataFetcher();
  }, [refresh]);

  return (
    <div className="rounded-lg text-white bg-white h-[87%] shadow-md mt-5 ml-5 mr-5 overflow-y-scroll">
      <div className="header border-b-black border-b-2 flex flex-row justify-between items-center py-5 px-10 sticky top-0 z-40 ">
        <div className="exportButton">
          <CSVLink data={transactionsData} href="" filename="transactions-data">
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
          </CSVLink>
        </div>
        <div className="heading font-semibold md:text-3xl text-black text-xl">
          Billing
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
              // let toast = createToast('Downloading File');
              // updateSuccessToast(toast, 'File Downloaded');
              showModal(true);
            }}
          >
            Add
          </Button>
        </div>
      </div>

      {modal && (
        <BillingModal
          submitHandler={displayRazorpay}
          closeModal={() => {
            showModal(false);
          }}
        />
      )}

      {/* <div className="border-black border-b-2 "></div> */}

      <div className="containerTable overflow-x-scroll">
        {/* <PowersTable
          powerUpdateHandler={powerUpdateHandler}
          loading={loading}
          data={powerData}
        /> */}
        <BillingTable
          data={transactionsData}
          loading={tableLoading}
          key={'transactions'}
        />
      </div>
    </div>
  );
}

export default BillingMain;
