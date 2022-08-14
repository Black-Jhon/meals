import React from "react";
// import CardOne from "../images/image 5.png";
import Beef from "../images/beef.jpg";
import Chicken from "../images/chicken.jpg";
import Wrap from "../images/wraps.jpg";
import Spag from "../images/spag.jpg";
import Special from "../images/special.jpg";
import White from "../images/white.jpg";


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
            name: "spiced white rice and beef",
            text: "Fried potato/yam chips with egg sauce or any topping of your choice",
            price: "₦ 3000"
        },
        {
            img: White,
            name: "white rice and sausage",
            text: "Fried potato/yam chips with egg sauce or any topping of your choice",
            price: "₦ 2500"
        },
    ];

    return (
        <div className="xl:px-[200px] bg-[#fafafa] mt-20">
            <h1 className="capitalize py-6 text-[#da3743] font-bold">menu</h1>

            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold">Current menu</h1>
                <ul className="flex justify-center items-center gap-3 capitalize border border-gray-200 px-2 py-2 rounded-lg text-sm">
                    <li className="onHover">all</li>
                    <li className="onHover">rice</li>
                    <li className="onHover">beans</li>
                    <li className="onHover">fries</li>
                    <li className="onHover mr-4">swallow</li>
                    <li className="onHover mr-3">others</li>
                </ul>
            </div>

            <div className="grid xl:grid-cols-3 gap-5 grid-cols-2 mt-5 mb-10">
                {meals.map((e) => {
                    return (
                        <div className="shadow-md bg-white rounded-lg">
                            <img src={e.img} alt="" className="xl:w-full h-[290px] xl:ml-0 object-cover"/>
                            <div className="xl:mt-5 xl:mb-2">
                                <h1 className="w-[300px] h-[32px] xl:ml-5 text-gray-700 font-bold text-xl capitalize">
                                    {e.name}
                                </h1>
                                <h3 className="w-[300px] h-[44px] xl:ml-5 mt-2 text-sm text-gray-400">
                                    {e.text}
                                </h3>
                                <p className="w-[93px] h-[32px] xl:ml-5 mt-2 text-xl text-gray-700">{e.price}</p>
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
