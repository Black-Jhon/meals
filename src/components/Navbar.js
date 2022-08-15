import React from "react";
import {BsCart3, BsSearch} from "react-icons/bs";
import Logo from "../images/Vector.png";
import Sidebar from "./Sidebar";

const Navbar = () => {
    return (
        <div
            className="xl:px-40 py-5 bg-[#ffffff] shadow-md flex justify-between items-center text-gray-600 font-bold sticky top-0 z-50">
            <div
                className="logo cursor-pointer flex items-center justify-center font-bold text-xl xl:ml-0 ml-5 space-x-2">
                <img src={Logo} alt="" className="w-10 h-5"/>
                <span className="capitalize text-gray-900 mt-2">meals</span>
            </div>

            <div className="hidden xl:block">
                <ul className="flex gap-10 capitalize">
                    <li className="cursor-pointer hover:text-[#da3743] hover:border-b-2 hover:border-[#da3743] transition duration-300 ease-out">
                        home
                    </li>
                    <li className="cursor-pointer hover:text-[#da3743] hover:border-b-2 hover:border-[#da3743] transition duration-300 ease-out">
                        menu
                    </li>
                    <li className="cursor-pointer hover:text-[#da3743] hover:border-b-2 hover:border-[#da3743] transition duration-300 ease-out">
                        meal plans
                    </li>
                </ul>
            </div>

            <div className="flex justify-center items-center space-x-20">
                <div className="relative search xl:flex xl:justify-center xl:items-center xl:space-x-5">
                    <BsSearch className="hidden xl:block cursor-pointer mr-5 text-xl"/>
                    <BsCart3
                        className="cursor-pointer text-xl xl:-right-12 xl:mt-1 absolute -right-28 -top-2 xl:-top-1"/>
                </div>

                <div className="hidden xl:block capitalize cursor-pointer ml-5">sign in</div>

                <div>
                    <span
                        className="hidden xl:block capitalize cursor-pointer bg-[#da3743] whitespace-nowrap text-white px-5 py-3 rounded-full">
                        create account
                    </span>
                </div>
            </div>

            <div className="xl:hidden block flex flex-col items-center justify-center">
                <Sidebar/>
            </div>
        </div>
    );
};

export default Navbar;
