import React from "react";
import Lady from "../images/Image.png";
import QuoteIcon from "../images/Icon Color.png";
import Active from "../images/Active.png";

const Testimonials = () => {
    return (
        <div className="xl:px-[200px] bg-[#f9e1e3] grid xl:grid-cols-2">

            <div className="xl:mt-20">
                <h1 className="w-[360px] h-[156px] text-5xl text-gray-700 mb-5 font-bold">
                    What our customers say about us
                </h1>
                <h3 className="w-[286px] h-[78px] font-bold text-gray-500">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
                </h3>
            </div>

            <div>
                <div className="xl:mt-20 flex gap-5 shadow-md bg-white rounded-xl p-10">
                    <div className="">
                        <img src={Lady} alt="" className=""/>
                        <p className="w-[84px] h-[64px] text-center xl:ml-5 mt-3 font-bold text-gray-700 text-xl">John
                            Samson</p>
                        <p className="w-[98px] h-[19px] text-center xl:ml-3 text-sm text-gray-600 font-bold whitespace-nowrap">Enugu,
                            Nigeria</p>
                    </div>

                    <div className="w-[341px] h-[174px] xl:ml-10 mt-6 text-gray-600">
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
                </div>
            </div>

        </div>
    );
};

export default Testimonials;
