import React from "react";
import Lady from "../images/Image.png";
import QuoteIcon from "../images/Icon Color.png";
import Active from "../images/Active.png";
// import Dot from "../images/Dot.png";

const Testimonials = () => {
    return (
        <div className="xl:px-[200px] bg-[#f9e1e3] grid xl:grid-cols-2">

            <div className="xl:mt-20">
                <h1 className="xl:w-[360px] xl:h-[156px] w-[270px] h-[64px] xl:mx-0 mx-5 text-xl xl:mt-0 mt-10 xl:text-5xl text-gray-700 mb-5 font-bold">
                    What our customers say about us
                </h1>
                <h3 className="xl:w-[286px] xl:h-[78px] w-[280px] h-[38px] xl:mb-0 mb-28 xl:mx-0 mx-5 font-bold text-gray-500">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
                </h3>
            </div>

            <div>
                <div
                    className="xl:mt-20 flex gap-5 shadow-md bg-white rounded-xl xl:p-10 p-2 xl:w-full xl:h-72 w-[343px] h-[174px] xl:mx-0 mx-5">
                    <div className="xl:flex xl:flex-col">
                        <img src={Lady} alt="" className="xl:w-full xl:h-full w-[48px] h-[48px]"/>
                        <div>
                            <p className="xl:w-[84px] xl:h-[64px] w-[112px] h-[26px] text-xs xl:text-center xl:ml-5 mt-3 font-bold text-gray-700 xl:text-xl">
                                John Samson
                            </p>
                            <p className="w-[98px] h-[19px] text-center xl:ml-3 text-sm text-gray-600 font-bold whitespace-nowrap">
                                Enugu, Nigeria
                            </p>
                        </div>
                    </div>

                    <div
                        className="xl:w-[341px] xl:h-[174px] w-[269px] h-[59px] xl:text-sm text-xs xl:ml-10 xl:mt-10 text-gray-600">
                        White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness
                        Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in
                        matter concept of the number one permanence.
                    </div>

                    <div className="">
                        <img src={QuoteIcon} alt=""/>
                    </div>
                </div>

                <div className="flex justify-center items-center my-20">
                    <img src={Active} alt=""/>
                    {/*<img src={Dot} alt=""/>*/}
                    {/*<img src={Dot} alt=""/>*/}
                    {/*<img src={Dot} alt=""/>*/}
                    {/*<img src={Dot} alt=""/>*/}
                </div>
            </div>

        </div>
    );
};

export default Testimonials;
