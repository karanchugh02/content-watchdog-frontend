import Head from 'next/head';
import React from 'react';

import Footer from '../common/footer';
import Image from 'next/image';
function HomeMain() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-800">
      <Head>
        <title>Content-WatchDog</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-white w-full min-h-screen">
        <div className={`w-full h-full inline-block z-0  -mt-64`}>
          <div className="text-center">
            <span className="title-word title-word-1 text-8xl font-bold">
              Content-
            </span>
            <span className="title-word title-word-2 text-8xl font-bold">
              WatchDog
            </span>

            <p className="mt-7 text-xl underline">
              Safeguard Your Content with Content Watchdog API - Keeping NSFW in
              Check!
            </p>
          </div>

          {/* body */}
          <div className="text-center absolute  md:top-96  left-0 right-0 m-auto">
            <h1 className="m-7 py-10  text-2xl">Types of Services</h1>
            <div className="flex flex-col md:flex-row md:max-w-5xl max-w-xl mx-auto gap-8">
              <div className="bg-white/10 p-8 rounded-xl mix-blend-luminosity md:hover:scale-110 transition-all duration-100 ease-out">
                <Image
                  src={'/assets/panel/logo.png'}
                  alt="Picture of the author"
                  width={70}
                  height={80}
                  className={`mx-auto`}
                />
                <h4 className="uppercase text-4xl font-bold">Text</h4>
                <p className="text-sm leading-7 my-3 font-light opacity-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                </p>
                <button className="bg-blue-500 py-2 px-8 rounded-full hover:bg-blue-600">
                  Get Started
                </button>
              </div>
              <div className="bg-white/10 p-8 rounded-xl mix-blend-luminosity md:hover:scale-110 transition-all duration-100 ease-out">
                <Image
                  src={'/assets/panel/logo.png'}
                  alt="Picture of the author"
                  width={70}
                  height={80}
                  className={`mx-auto`}
                />
                <h4 className="uppercase text-4xl font-bold">Image</h4>
                <p className="text-sm leading-7 my-3 font-light opacity-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                </p>
                <button className="bg-blue-500   rounded-full py-2 px-8 hover:bg-blue-600 ">
                  Get Started
                </button>
              </div>
              <div className="bg-white/10 p-8 rounded-xl mix-blend-luminosity md:hover:scale-110 transition-all duration-100 ease-out">
                <Image
                  src={'/assets/panel/logo.png'}
                  alt="Picture of the author"
                  width={70}
                  height={80}
                  className={`mx-auto`}
                />
                <h4 className="uppercase text-4xl font-bold">Video</h4>
                <p className="text-sm leading-7 my-3 font-light opacity-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                </p>
                <button className="bg-blue-500 py-2 px-8 rounded-full hover:bg-blue-600">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="mt-[52rem] md:mt-[8rem]">
        <Footer />
      </div>
    </div>
  );
}

export default HomeMain;
