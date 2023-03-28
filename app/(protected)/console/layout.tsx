'use client';
import { useSession } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession({ required: true });
  return <div>{children}</div>;
}
