import Link from 'next/link';
import React from 'react';
import Logo from './logo';

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
  return (
    <header className="bg-black w-full px-8 py-4 text-lg text-gray-400 	 font-medium flex items-center justify-between">
      <Logo />

      <nav>
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
        <CustomLink
          href="/demo"
          title="Demo"
          className="mx-6 hover:text-white hover:text-xl"
        />
        <CustomLink
          href="/contactus"
          title="Contact"
          className="mx-6 hover:text-white hover:text-xl"
        />
      </nav>

      <nav>
        {' '}
        <CustomLink
          href="/login"
          title="Get Started"
          className="font-bold px-2 py-4 rounded-full  border-2 border-white hover:border-black hover:bg-white hover:text-black"
        ></CustomLink>
      </nav>
    </header>
  );
};

export default NavBar;
