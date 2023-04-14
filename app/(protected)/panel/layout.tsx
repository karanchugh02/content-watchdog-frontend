'use client';
import checkAuth from '@/components/hooks/checkAuth';
import Header from '@/components/panel/ common/header';
import Sidebar from '@/components/panel/ common/sidebar';
import '../../../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  checkAuth();
  return (
    <div className="panel-main flex justify-around">
      <Sidebar />
      <div className="right  w-full">
        <Header />
        {children}
      </div>
    </div>
  );
}
