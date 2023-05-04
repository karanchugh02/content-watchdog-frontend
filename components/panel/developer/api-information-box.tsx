import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function ApiInformationBox({
  method,
  code,
  title,
  url,
}: {
  method: string;
  title: string;
  url: string;
  code: string;
}) {
  return (
    <div className="text-black border-2 border-black w-[60%] h-fit rounded-md shadow-md">
      <div className="header px-4 py-2 border-b-2 border-black">
        <div className="info flex flex-row space-x-2 items-center">
          <button className="bg-black py-1 px-4 text-white rounded-sm">
            {method}
          </button>
          <div>{title}</div>
        </div>
        <div className="test"></div>
      </div>
      <div className="lower py-4 px-4">
        <div className="input">
          <input
            type="search"
            name="q"
            className="py-[6px]  border-2 w-full  border-black text-sm text-black bg-[white] rounded-md px-2 focus:outline-none"
            placeholder="Search..."
            autoComplete="off"
            disabled
            value={url}
          />
        </div>
        <div className="example mt-4">
          <div className="heading font-semibold">Javascript Example</div>
          <SyntaxHighlighter
            showLineNumbers={true}
            language="javascript"
            style={monokai}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default ApiInformationBox;
