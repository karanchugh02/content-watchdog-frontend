import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  href: string;
  icon: React.ReactNode;
  selected: boolean;
  setSelected: Function;
};

function Sidebarbutton({ title, href, icon, setSelected }: Props) {
  return (
    <Link
      href={href}
      onClick={() => {
        setSelected();
      }}
    >
      <button className="relative inline-block px-4 py-2 w-[130px] font-medium group">
        <span className="absolute inset-0 w-full h-full transition duration-200 rounded-sm ease-out border-[1.5px] border-white transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 rounded-sm w-full h-full bg-black border-[1.5px] border-white group-hover:bg-black"></span>
        <span className="relative text-white group-hover:text-white ">
          <div className="flex space-x-1 flex-row items-center justify-start">
            <div className="icon">{icon}</div>
            <div className="text">{title}</div>
          </div>
        </span>
      </button>
    </Link>
  );
}

export default Sidebarbutton;
