'use client';
import NavBar from '@/components/home/common/navbar';
import { Toaster } from 'react-hot-toast';
import '../../styles/public.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body className="">
        <Toaster />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
