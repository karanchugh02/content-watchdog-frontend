import Image from 'next/image';
import React, { useState } from 'react';
import Sidebarbutton from './sidebarbutton';

export default function Sidebar() {
  const [selected, setSelected] = useState<{
    title: string;
    link: string;
    isSelected: boolean;
  }>({
    title: 'Dashboard',
    isSelected: true,
    link: '/panel',
  });

  return (
    <div className="bg-lightblack h-screen w-[15%] border-r-2 border-grayborder flex flex-col items-center py-10">
      <div className="logo">
        <Image
          src={'/assets/panel/logo.png'}
          height={100}
          width={100}
          alt={'logo'}
        />
      </div>
      <div className="menu">
        <div>
          <Sidebarbutton title="karan" />
        </div>
      </div>
    </div>
  );
}
