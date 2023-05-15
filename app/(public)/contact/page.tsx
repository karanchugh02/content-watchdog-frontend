'use client';

import Toast from '@/utils/notification';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import ContactForm from '@/components/home/contact';

function Page() {
  
  return (
    <>
	<ContactForm/>
	</>
  );
}

export default Page;
