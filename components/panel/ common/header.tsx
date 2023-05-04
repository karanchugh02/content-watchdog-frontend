import React, { useEffect, useState } from 'react';
import { userAuthStore } from 'store/user';

function Header() {
  const user = userAuthStore((state) => state.user);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (user) {
      setLoaded(true);
    }
  }, [user]);
  return (
    <div className="bg-lightblack z-50 sticky top-0 w-full border-b-2 border-black flex flex-row justify-between px-8 py-3 items-center shadow-md">
      <div className="left">
        <div className="relative text-gray-600">
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
            className="py-[6px] border-2 placeholder:text-gray-600 border-gray-600 text-sm text-black bg-[white] rounded-md pl-10 focus:outline-none"
            placeholder="Search..."
            autoComplete="off"
          />
        </div>
      </div>

      <div className="right flex flex-row justify-center items-center">
        <div className="logo">
          <img
            src="https://daniel-stefan.dev/static/b0b02cfbc8fbe8d19c51d413cc1ff598/70b5d/avatar.png"
            className="h-12 w-12 rounded-full"
          />
        </div>
        <button className="flex flex-col text-black ">
          <div>{loaded ? user?.name : 'name'}</div>
          <div>{loaded ? user?.email : 'email'}</div>
        </button>
      </div>
    </div>
  );
}

export default Header;
