import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-14 h-14 items-center justify-center rounded-full"
        whileHover={{
          backgroundColor: ['rgba(0,0,0)', '#79828d'],
          transition: { duration: 1, repeat: 2 },
        }}
      >
        <Image
          src={'/assets/panel/logo.png'}
          alt="Logo"
          width={900}
          height={900}
        />
      </MotionLink>
    </div>
  );
};

export default Logo;
