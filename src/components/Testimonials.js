// @ts-nocheck
import React from "react";
import Lady from "../images/Image.png";
import QuoteIcon from "../images/Icon Color.png";
import Active from "../images/Active.png";

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
                    className="flex rounded-xl shadow-md bg-white xl:p-5 px-4 pt-4 pb-10 xl:mt-16 justify-center xl:w-full xl:h-[380px] w-[325px] h-[174px] xl:mx-0 mx-5">
                    <div className="xl:flex grid xl:gap-10">
                        <div className="flex xl:flex-col xl:gap-0 gap-5">
                            <img src={Lady} className="xl:w-40 xl:h-full w-[48px] h-[48px] object-contain" alt=""/>
                            <div>
                                <p className="text-center xl:w-[84px] xl:h-[64px] xl:ml-3 xl:text-xl font-bold xl:-mt-5">John
                                    Samson</p>
                                <p className="whitespace-nowrap xl:ml-2 xl:text-sm text-xs ml-3 text-gray-700">Enugu,
                                    Nigeria</p>
                            </div>
                        </div>

                        <div
                            className="xl:mt-20 xl:w-[341px] xl:h-[174px] w-[269px] h-[59px] xl:text-base text-xs text-gray-500">
                            White dwarf a still more glorious dawn awaits tingling of the spine emerged into
                            consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the
                            energy hidden
                            in matter concept of the number one permanence.
                        </div>
                    </div>

                    <div>
                        <img src={QuoteIcon} className="xl:w-[24px] xl:h-[24px] w-[100px] h-[12.67px]" alt=""/>
                    </div>
                </div>

                <div className="flex justify-center items-center my-20">
                    <img src={Active} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
