'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './logo';
import { BiLogIn } from 'react-icons/bi';
import { BiHome } from 'react-icons/bi';
import { BiRupee } from 'react-icons/bi';
import { BsPersonWorkspace } from 'react-icons/bs';
import { MdOutlineContactSupport } from 'react-icons/md';
const CustomLink = ({
  href,
  title,
  className = '',
}: {
  href: string;
  title: string;
  className: string;
}) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      {/* <span className="h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full">&nbsp;</span> */}
    </Link>
  );
};

const NavBar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const handleClick = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <header className="bg-black w-full px-8 py-4 text-lg text-gray-400 	 font-medium flex items-center justify-between">
      <Logo />

      <nav className="md:block hidden">
        <CustomLink
          href="/"
          title="Home"
          className="mr-6 hover:text-white hover:text-xl"
        />

        <CustomLink
          href="/pricing"
          title="Pricing"
          className="mx-6 hover:text-white hover:text-xl"
        />
        {/* <CustomLink
          href="/demo"
          title="Demo"
          className="mx-6 hover:text-white hover:text-xl"
        /> */}
        <CustomLink
          href="/contactus"
          title="Contact"
          className="mx-6 hover:text-white hover:text-xl"
        />
      </nav>
      <nav className="md:hidden flex flex-row space-x-14 ">
        <BiHome className="hover:text-white hover:scale-x-125" size={30} />
        <BiRupee className="hover:text-white hover:scale-x-125" size={30} />
        {/* <BsPersonWorkspace
          className="hover:text-white hover:scale-x-125"
          size={30}
        /> */}
        <MdOutlineContactSupport
          className="hover:text-white hover:scale-x-125"
          size={30}
        />
      </nav>
      <nav>
        {/* <CustomLink
          href="/login"
          title="Get Started"
          className="font-bold px-2 py-4 rounded-full  border-2 border-white hover:border-black hover:bg-white hover:text-black md:block hidden"
        ></CustomLink> */}
        <CustomLink
          href="/login"
          title="Get Started"
          className=" hover:bg-white text-white hover:text-black font-bold py-2 px-4 border-2 border-white-700 rounded md:block hidden"
        ></CustomLink>
        <BiLogIn size={35} className="block md:hidden " />
      </nav>
    </header>
  );
};

export default NavBar;
