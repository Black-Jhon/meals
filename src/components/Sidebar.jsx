import React, {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import Vec1 from "../images/Vector0.png";
import Vec2 from "../images/Vector1.png";
import Vec3 from "../images/Vector2.png";
import Vec4 from "../images/Vector3.png";
import Vec5 from "../images/Vector5.png";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {showSidebar ? (
                <button
                    className="flex text-4xl text-gray-500 items-center cursor-pointer fixed right-10 top-6 z-50 font-mono"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <img src={Vec5} alt=""/>
                </button>
            ) : (
                <GiHamburgerMenu onClick={() => setShowSidebar(!showSidebar)} className="mr-10 mt-2"/>
            )}

            <div
                className={`top-0 right-0 bg-white  p-10 pl-20 text-white fixed h-full w-full z-40 ease-in-out duration-300 ${
                    showSidebar ? "translate-x-0 " : "translate-x-full"
                }`}>
                <div className="mt-20 text-black -ml-16">
                    <div className="flex gap-5">
                        <button
                            className="bg-[#DA3743] px-4 py-4 rounded-full capitalize cursor-pointer text-white font-mono outline-none">
                            create account
                        </button>
                        <button
                            className="border border-[#DA3743] px-4 py-3 rounded-full capitalize cursor-pointer font-mono outline-none">
                            sign in
                        </button>
                    </div>

                    <div className="mt-10 flex-col items-start items-center space-y-10 -ml-52">
                        <span
                            className="flex justify-center items-center gap-5">
                            <img src={Vec1} alt=""/>
                            <p>Home</p>
                        </span>
                        <span
                            className="flex justify-center items-center gap-5">
                            <img src={Vec4} alt=""/>
                            <p>Menu</p>
                        </span>
                        <span
                            className="flex justify-center items-center gap-5">
                            <img src={Vec3} className="ml-5" alt=""/>
                            <p>My Tray</p>
                        </span>
                        <span
                            className="flex justify-center items-center gap-5">
                            <img src={Vec2} alt="" className="ml-10"/>
                            <p className="">Meal Plans</p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
