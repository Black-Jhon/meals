import React from "react";
import Logo from "../images/Vector.png";
import {CgFacebook} from "react-icons/cg";
import {RiInstagramLine} from "react-icons/ri";
import {VscTwitter} from "react-icons/vsc";

const Footer = () => {
    return (
        <div className="xl:px-[200px] bg-[#fafafa]">
            <div className="xl:grid xl:grid-cols-3 my-10">
                <div className="flex gap-3 items-center xl:mx-0 mx-5 xl:pt-0 pt-32">
                    <img src={Logo} className="" alt=""/>
                    <h1 className="capitalize font-bold mt-3 text-gray-900">meals</h1>
                </div>

                <div className="flex xl:justify-between xl:mx-0 mx-5 xl:gap-0 gap-20">
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
            </div>

            <hr/>

            <div className="mt-10 flex justify-between items-center xl:mx-0 mx-5">
                <div>
                    <h1 className="text-xs text-gray-500 whitespace-nowrap">© 2022 Meals. All rights reserved.</h1>
                </div>
                <div className="flex space-x-5 text-gray-500">
                    <CgFacebook className="bg-[#f3eee4] w-[50px] h-[50px] rounded-full xl:p-3 p-4 cursor-pointer"/>
                    <RiInstagramLine className="bg-[#f3eee4] w-[50px] h-[50px] rounded-full xl:p-3 p-4 cursor-pointer"/>
                    <VscTwitter className="bg-[#f3eee4] w-[50px] h-[50px] rounded-full xl:p-3 p-4 cursor-pointer"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
