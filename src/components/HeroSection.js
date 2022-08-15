import React from "react";
import Jellof from "../images/jellof.jpg";
import {TbMessageDots} from "react-icons/tb";
import {BsSearch} from "react-icons/bs";

const HeroSection = () => {
    return (
        <div
            className="md:px-40 md:bg-inherit bg-[#da3743] md:flex justify-between items-center py-5">
            <div className="space-y-10">
                <h1 className="font-bold md:text-6xl md:text-gray-700 text-white xl:w-96 md:h-40 text-2xl md:ml-0 ml-5">
                    Delicious meals at your convenience
                </h1>
                <h2 className="md:text-gray-500 md:text-xl md:w-96 md:ml-0 ml-5 text-white text-sm">
                    Order your meals from us and we will have it delivered at your doorstep.
                </h2>
                <button
                    className="hidden md:block capitalize w-80 h-16 text-white bg-[#da3743] md:px-16 md:py-3 btn">
                    get started
                </button>
                <div className="relative md:hidden block ml-5">
                    <h1 className="md:hidden block capitalize text-white mb-2">instant order</h1>
                    <BsSearch className="cursor-pointer absolute top-12 text-xl text-gray-500 left-5"/>
                    <input type="text"
                           className="border border-gray-500 rounded-lg  w-80 h-12 px-12 outline-none"
                           placeholder="Search for meals"/>
                </div>
            </div>
            <div className="relative">
                <span className="">
                    <img src={Jellof} alt="" className="rounded-full border-4 p-10 border-[#da3743]"/>
                </span>
                <span className="absolute md:left-full left-72 md:top-full top-10/12 right-0">
                    <TbMessageDots
                        className="bg-[#da3743] text-white rounded-full md:w-20 md:h-20 w-16 h-16 p-2 cursor-pointer"/>
                </span>
            </div>
        </div>
    );
};

export default HeroSection;
