'use client';
import checkAuth from '@/components/hooks/checkAuth';
import Header from '@/components/panel/ common/header';
import Sidebar from '@/components/panel/ common/sidebar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { userAuthStore } from 'store/user';
import '../../../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // checkAuth();
  const router = useRouter();
  const { user } = userAuthStore();

  useEffect(() => {
    if (user == null) {
      router.replace('/login');
    }
  }, [user]);

  return (
    <div className="panel-main flex justify-around">
      <Sidebar />
      <div className="right bg-[#f3f4f6] w-full">
        <Header />
        {children}
      </div>
    </div>
  );
}
