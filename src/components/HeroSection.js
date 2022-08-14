import React from "react";
import Jellof from "../images/jellof.jpg";
import {TbMessageDots} from "react-icons/tb";
import {BsSearch} from "react-icons/bs";

const HeroSection = () => {
    return (
        <div
            className="xl:px-[200px] xl:bg-inherit bg-[#da3743] xl:flex justify-between items-center py-5">
            <div className="space-y-10">
                <h1 className="font-bold xl:text-6xl xl:text-gray-700 text-white xl:w-[551px] xl:h-[144px] w-[342px] h-[72px] text-2xl xl:ml-0 ml-5">
                    Delicious meals at your convenience
                </h1>
                <h2 className="xl:text-gray-500 xl:text-xl xl:w-[390px] xl:h-[55px] w-[309px] h-[55px] xl:ml-0 ml-5 text-white text-sm">
                    Order your meals from us and we will have it delivered at your doorstep.
                </h2>
                <button
                    className="hidden xl:block capitalize w-[325px] h-[54px] text-white bg-[#da3743] xl:px-16 xl:py-3 btn">
                    get started
                </button>
                <div className="relative xl:hidden block ml-5">
                    <h1 className="xl:hidden block capitalize text-white mb-2">instant order</h1>
                    <BsSearch className="cursor-pointer absolute top-12 text-2xl text-gray-500 left-5"/>
                    <input type="text"
                           className="border border-gray-500 rounded-lg  w-[325px] h-[54px] px-12 outline-none"
                           placeholder="Search for meals"/>
                </div>
            </div>
            <div className="relative">
                <span className="">
                    <img src={Jellof} alt="" className="rounded-full border-4 p-10 border-[#da3743]"/>
                </span>
                <span className="absolute xl:left-full left-72 xl:top-[620px] top-[470px] right-0">
                    <TbMessageDots
                        className="bg-[#da3743] text-white rounded-full xl:w-[80px] xl:h-[80px] w-[48px] h-[48px] p-2 cursor-pointer"/>
                </span>
            </div>
        </div>
    );
};

export default HeroSection;
