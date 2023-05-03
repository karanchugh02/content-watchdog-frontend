import React from 'react';

function ApiInformationBox() {
  return (
    <div className="text-black">
      <div className="header">
        <div className="info">
          <button className="bg-black py-1 px-4 text-white rounded-sm">
            GET
          </button>
          <span>Get status</span>
        </div>
        <div className="test"></div>
      </div>
      <div className="lower">
        <div className="input">
          <input
            type="search"
            name="q"
            className="py-[6px] border-2 placeholder:text-gray-600 border-gray-600 text-sm text-black bg-[white] rounded-md px-2 focus:outline-none"
            placeholder="Search..."
            autoComplete="off"
          />
        </div>
        <div className="example"></div>
      </div>
    </div>
  );
}

export default ApiInformationBox;
