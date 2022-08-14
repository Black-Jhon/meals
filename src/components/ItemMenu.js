import React from "react";
import {BsCart4} from "react-icons/bs";
import Beef from "../images/Rectangle 82(2).png";
import Chicken from "../images/Rectangle 82.png";
import Wrap from "../images/Rectangle 82(1).png";
import Spag from "../images/Rectangle 82(3).png";
import Special from "../images/Rectangle 82(4).png";
import White from "../images/Rectangle 82(5).png";


const ItemMenu = () => {
    const meals = [
        {
            img: Beef,
            name: "rice and beef",
            text: "Fried potato/yam chips with egg sauce or any topping of your choice",
            price: "₦ 1,500"
        },
        {
            img: Chicken,
            name: "chicken",
            text: "Fried potato/yam chips with egg sauce or any topping of your choice",
            price: "₦ 1000"
        },
        {
            img: Wrap,
            name: "wrapped bugger",
            text: "Fried potato/yam chips with egg sauce or any topping of your choice",
            price: "₦ 2000"
        },
        {
            img: Spag,
            name: "delicious spaghetti",
            text: "Fried potato/yam chips with egg sauce or any topping of your choice",
            price: "₦ 1,800"
        },
        {
            img: Special,
            name: "white rice and beef",
            text: "Fried potato/yam chips with egg sauce or any topping of your choice",
            price: "₦ 3000"
        },
        {
            img: White,
            name: "rice and sausage",
            text: "Fried potato/yam chips with egg sauce or any topping of your choice",
            price: "₦ 2500"
        },
    ];

    return (
        <div className="xl:px-[200px] bg-[#fafafa] mt-20">
            <h1 className="capitalize py-6 text-[#da3743] font-bold xl:mx-0 mx-5">menu</h1>

            <div className="xl:flex grid xl:justify-between items-center xl:mx-0 mx-5">
                <h1 className="xl:text-4xl text-xl whitespace-nowrap font-bold">Current menu</h1>
                <ul className="flex justify-center items-center xl:gap-3 gap-5 capitalize border border-gray-200 px-2 py-2 rounded-lg text-sm">
                    <li className="onHover">all</li>
                    <li className="onHover">rice</li>
                    <li className="onHover">beans</li>
                    <li className="onHover">fries</li>
                    <li className="onHover mr-4">swallow</li>
                    <li className="onHover mr-3">others</li>
                </ul>
            </div>

            <div className="grid xl:grid-cols-3 xl:gap-5 gap-2 grid-cols-2 mt-5 mb-10">
                {meals.map((e) => {
                    return (
                        <div
                            className="shadow-md bg-white rounded-lg xl:mx-0 xl:w-full xl:h-full w-[185px] h-[235px]">
                            <img src={e.img} alt=""
                                 className="xl:w-[388px] xl:h-[280px] w-[200px] h-[123px] m-auto object-cover"/>
                            <div className="xl:mt-5 xl:mb-2 p-2">
                                <h1 className="xl:w-[300px] xl:h-[32px] w-[65px] h-[22px] xl:ml-5 text-gray-700 font-bold xl:text-xl text-sm whitespace-nowrap capitalize">
                                    {e.name}
                                </h1>
                                <h3 className="xl:w-[300px] xl:h-[44px] xl:ml-5 mt-2 text-[8px] text-gray-400">
                                    {e.text}
                                </h3>
                                <div className="flex justify-between items-center">
                                    <p className="w-[93px] h-[32px] xl:ml-5 mt-2 text-xl text-gray-700">{e.price}</p>
                                    <BsCart4
                                        className="bg-[#da3743] text-white rounded-xl text-4xl cursor-pointer font-bold p-2 xl:hidden block"/>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="pb-20">
                <button
                    className="capitalize btn flex justify-center items-center m-auto bg-[#da3743] text-white font-bold w-[119px] h-[54px]">
                    full menu
                </button>
            </div>
        </div>
    );
};

export default ItemMenu;
