'use client';
import { useSession } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession({ required: true });

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body className="">
        <Toaster />
      </body>
    </html>
  );
}
