'use client';

import Toast from '@/utils/notification';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Calculator from '@/components/home/calculator';
// import NavBar from '@/components/home/common/navbar';
function Page() {
  return (
    <>
      <Calculator />
    </>
  );
}

export default Page;
