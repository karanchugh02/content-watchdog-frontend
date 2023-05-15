import { HomeOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Sidebarbutton from './sidebarbutton';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { BsCurrencyRupee } from 'react-icons/bs';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { MdDeveloperMode } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { userAuthStore } from 'store/user';
import { usePathname, useRouter } from 'next/navigation';
import TopBarProgress from 'react-topbar-progress-indicator';

TopBarProgress.config({
  barColors: {
    '0': '#000',
    '1.0': '#000011',
  },
  shadowBlur: 5,
});

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

  const { removeUser } = userAuthStore();
  const router = useRouter();
  const [showTopBar, setShowTopBar] = useState<boolean>(true);
  const pathname = usePathname();
  useEffect(() => {
    setShowTopBar(true);
    setTimeout(() => {
      setShowTopBar(false);
    }, 100);
  }, [pathname]);

  return (
    <div className="bg-black sticky top-0 shadow-black  h-screen w-[15%] flex flex-col items-center ">
      <div className="logo bg-black flex flex-row justify-center items-center w-full h-[30%]">
        <Image
          src={'/assets/panel/logo.png'}
          height={100}
          width={100}
          alt={'logo'}
        />
      </div>
      <div className="menu flex flex-col justify-around space-y-4">
        <Sidebarbutton
          selected={
            selected.title == 'Dashboard' && selected.isSelected == true
          }
          setSelected={() => {
            setSelected({
              isSelected: true,
              link: '/panel',
              title: 'Dashboard',
            });
          }}
          title="Dashboard"
          href="/panel"
          icon={
            selected.title == 'Dashboard' && selected.isSelected == true ? (
              <AiFillHome />
            ) : (
              <AiOutlineHome />
            )
          }
        />
        <Sidebarbutton
          selected={selected.title == 'Analysis' && selected.isSelected == true}
          setSelected={() => {
            setSelected({
              isSelected: true,
              link: '/panel/analysis',
              title: 'Analysis',
            });
          }}
          title="Analysis"
          href="/panel/analysis"
          icon={<TbDeviceAnalytics />}
        />
        <Sidebarbutton
          selected={selected.title == 'Billing' && selected.isSelected == true}
          setSelected={() => {
            setSelected({
              isSelected: true,
              link: '/panel/billing',
              title: 'Billing',
            });
          }}
          title="Billing"
          href="/panel/billing"
          icon={<BsCurrencyRupee />}
        />
        <Sidebarbutton
          selected={
            selected.title == 'Developer' && selected.isSelected == true
          }
          setSelected={() => {
            setSelected({
              isSelected: true,
              link: '/panel/developer',
              title: 'Developer',
            });
          }}
          title="Developer"
          href="/panel/developer"
          icon={<MdDeveloperMode />}
        />
      </div>
      {showTopBar && <TopBarProgress />}

      <div className="logout mt-[90%]">
        <button className="relative inline-block px-4 py-2 w-[130px] font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 rounded-sm ease-out border-[1.5px] border-white transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 rounded-sm w-full h-full bg-black border-[1.5px] border-white group-hover:bg-black"></span>
          <span className="relative text-white group-hover:text-white ">
            <div className="flex space-x-1 flex-row items-center justify-start">
              <div className="icon">
                <BiLogOut />
              </div>
              <div
                className="text"
                onClick={() => {
                  removeUser();
                  router.replace('/login');
                }}
              >
                Logout
              </div>
            </div>
          </span>
        </button>
      </div>
    </div>
  );
}
