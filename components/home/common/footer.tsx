import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import {FaAws} from "react-icons/fa";
function Footer() {
	return (
		<>
			<div className="bg-black   h-auto w-full flex md:flex-row flex-col justify-around items-start p-11">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-50 font-bold text-3xl pb-6">
							Content<span className="text-gray-600">WatchDog</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer text-pink-600" />
							<FaTwitter className="text-2xl cursor-pointer text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer text-red-600" />
						</div>
					</ul>
				</div>
				
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Company</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About
						</li>
						
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Pricing
						</li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Services
                           
						</li>
						
						
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Support</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact Us
						</li>
						
						
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Help
						</li>
						
					</ul>
				</div>
			</div>
            <div className="flex flex-col w-full h-full justify-center items-center text-center  p-5 bg-black">
				<h1 className=" text-gray-400 font-semibold text-center">Powered By :</h1>
                <ul className="text-xl flex space-x-3 ">
                    <li >
                        <SiVercel className="text-gray-500 " />
                    </li>
                    <li >
                        <SiTailwindcss className="text-blue-600"/>
                    </li>
                    <li>
                    <FaAws className="text-blue-700"/>
                    </li>
                </ul>
			</div>
			
		</>
	);
}

export default Footer;