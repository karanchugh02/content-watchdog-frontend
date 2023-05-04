import React, { useState } from 'react';

type Props = { submitHandler: Function; closeModal: Function };

function BillingModal({ submitHandler, closeModal }: Props) {
  const [credits, setCredits] = useState(0);
  return (
    <div className="absolute left-0 z-40  h-[50%] w-[100%]  flex justify-center items-center">
      <div
        id="normalpayalert"
        className="z-50  text-black w-full h-full  bg-gray-900 bg-opacity-80 top-0 fixed sticky-0"
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="grid place-items-center">
            <div className="w-11/12 p-12 bg-white">
              <h1 className="text-xl font-semibold">
                Hello there 👋,{' '}
                <span className="font-normal">
                  Please enter the amount of credits.
                </span>{' '}
                <span id="normalmemberID"></span>.
              </h1>

              <form className="mt-6">
                <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                  Credits
                </label>
                <input
                  type="number"
                  value={credits}
                  onChange={(e) => {
                    setCredits(parseInt(e.target.value));
                  }}
                  placeholder="No of Credits"
                  id="payableAmount"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />

                <button
                  type="submit"
                  id="submitButton"
                  onClick={() => {
                    submitHandler(credits);
                  }}
                  className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => closeModal()}
                  className="w-full py-3 mt-6 font-medium tracking-widest text-black uppercase bg-amber-200 shadow-lg focus:outline-none hover:bg-amber-100 hover:shadow-none"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
        <div id="normalpayalertdata" className="hidden"></div>
        <button
          className="text-gray-800 absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          aria-label="close"
          onClick={() => closeModal()}
        >
          <img
            className="dark:hidden"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cookies-1-svg2.svg"
            alt="close"
          ></img>
          <img
            className="dark:block hidden"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cookies-1-svg2dark.svg"
            alt="close"
          ></img>
        </button>
      </div>
    </div>
  );
}

export default BillingModal;
