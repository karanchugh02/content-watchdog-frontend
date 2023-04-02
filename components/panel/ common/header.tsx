import React from 'react';

function Header() {
  return (
    <div className="bg-lightblack sticky top-0 w-full border-b-2 border-grayborder flex flex-row justify-between px-8 py-3 items-center">
      <div className="left">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="py-[6px] text-sm text-white bg-[#2b2b2b] rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder="Search..."
            autoComplete="off"
          />
        </div>
      </div>

      <div className="right">
        <button>
          <img className="h-10 w-10 rounded-full" />
        </button>
      </div>
    </div>
  );
}

export default Header;
