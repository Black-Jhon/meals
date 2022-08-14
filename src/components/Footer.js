import React from "react";
import Logo from "../images/Vector.png";
import {CgFacebook} from "react-icons/cg";
import {RiInstagramLine} from "react-icons/ri";
import {VscTwitter} from "react-icons/vsc";

const Footer = () => {
    return (
        <div className="xl:px-[200px] bg-[#fafafa]">
            <div className="grid xl:grid-cols-3 grid-cols-2 my-10">
                <div className="flex gap-3 items-center">
                    <img src={Logo} className="" alt=""/>
                    <h1 className="capitalize font-bold mt-3 text-gray-900">meals</h1>
                </div>

                <div className="mt-28">
                    <ul className="space-y-3 capitalize text-sm">
                        <li className="font-bold text-gray-900 capitalize">company</li>
                        <li className="text-gray-500">blog</li>
                        <li className="text-gray-500">about us</li>
                        <li className="text-gray-500">contact us</li>
                    </ul>
                </div>

                <div className="mt-28">
                    <ul className="space-y-3 capitalize text-sm">
                        <li className="font-bold text-gray-900 capitalize">services</li>
                        <li className="text-gray-500">FAQs</li>
                        <li className="text-gray-500">our menu</li>
                    </ul>
                </div>
            </div>

            <hr/>

            <div className="mt-10 flex justify-between items-center">
                <div>
                    <h1 className="text-xs text-gray-500">© 2022 Meals. All rights reserved.</h1>
                </div>
                <div className="flex space-x-5 text-gray-500">
                    <CgFacebook className="bg-[#f3eee4] w-[50px] h-[50px] rounded-full p-3 cursor-pointer"/>
                    <RiInstagramLine className="bg-[#f3eee4] w-[50px] h-[50px] rounded-full p-3 cursor-pointer"/>
                    <VscTwitter className="bg-[#f3eee4] w-[50px] h-[50px] rounded-full p-3 cursor-pointer"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
