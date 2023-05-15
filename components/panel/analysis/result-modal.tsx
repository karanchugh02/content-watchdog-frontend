import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { docco, monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function ResultModal({
  closeModal,
  result,
}: {
  closeModal: Function;
  result: Array<object>;
}) {
  return (
    <div className="absolute left-0 z-50  h-[50%] w-[100%]  flex justify-center items-center">
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
                  Below are the results after process.
                </span>{' '}
                <span id="normalmemberID"></span>.
              </h1>
              <div className="w-[100%] max-h-[50%] mt-4">
                <SyntaxHighlighter
                  showLineNumbers={true}
                  language="javascript"
                  style={monokai}
                  wrapLines={true}
                >
                  {JSON.stringify(result, null, '\t')}
                </SyntaxHighlighter>
              </div>
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

export default ResultModal;
