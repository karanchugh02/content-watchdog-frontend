'use client';
import Header from '@/components/panel/ common/header';
import Sidebar from '@/components/panel/ common/sidebar';
import '../../../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
