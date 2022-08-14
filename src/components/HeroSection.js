import React from "react";
import Jellof from "../images/jellof.jpg";
import {TbMessageDots} from "react-icons/tb";
import {BsSearch} from "react-icons/bs";

const HeroSection = () => {
    return (
        <div className="xl:px-[200px] xl:flex justify-between items-center py-5">
            <div className="space-y-10">
                <h1 className="font-bold text-6xl text-gray-700 w-[551px] h-[144px]">
                    Delicious meals at your convenience
                </h1>
                <h2 className="text-gray-500 text-xl xl:w-[390px] h-[55px]">
                    Order your meals from us and we will have it delivered at your doorstep.
                </h2>
                <button
                    className="hidden xl:block capitalize w-[325px] h-[54px] text-white bg-[#da3743] xl:px-16 xl:py-3 btn">
                    get started
                </button>

                <div className="relative xl:hidden block">
                    <BsSearch className="cursor-pointer absolute top-4 text-2xl text-gray-500 left-5"/>
                    <input type="text"
                           className="border border-gray-500 rounded-lg m-auto w-[342px] h-[54px] px-12 outline-none"
                           placeholder="Search for meals"/>
                </div>
            </div>
            <div className="relative">
                <span className="">
                    <img src={Jellof} alt="" className="rounded-full border-4 p-10 border-[#da3743]"/>
                </span>
                <span className="absolute xl:left-full left-80 right-0">
                    <TbMessageDots
                        className="bg-[#da3743] text-white rounded-full xl:w-[80px] xl:h-[80px] w-[48px] h-[48px] p-2 cursor-pointer"/>
                </span>
            </div>
        </div>
    );
};

export default HeroSection;
