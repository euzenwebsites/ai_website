import { ArrowRight, CheckBox } from "@mui/icons-material";
import React from "react";

const Section2 = () => {
    return (
        <>
            <div className="md:px-[100px] px-[40px] flex items-center mt-16">
                <div className="flex-[0.5] h-full w-full ">
                    <h1 className="font-bold text-4xl">
                        A.I. Chat Bots Get Leads & Sales Fast
                    </h1>
                    <div className="mt-4 text-xl font-medium">
                        <p className="">
                            Our A.I. Chatbots {"are'nt"} like the ones {"you're"} used to
                            seeing.
                        </p>
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                            dicta blanditiis velit! Deserunt ad perferendis qui, praesentium
                            velit repellat quia magni.
                        </p>
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                            dicta blanditiis velit! Deserunt ad perferendis qui.
                        </p>
                    </div>
                    <div className="mt-6 text-lg font-medium">
                        <div className="flex items-center gap-2">

                            <CheckBox fontSize="medium" />
                            <p>Works over SMS. </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">

                            <CheckBox fontSize="medium" />
                            <p>Works over Messenger. </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">

                            <CheckBox fontSize="medium" />
                            <p>Works over WebChat. </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">

                            <CheckBox fontSize="medium" />
                            <p>Works over DMs. </p>
                        </div>
                    </div>
                    <TryFreeBtn />
                </div>
                <div className="flex-[0.5] h-full w-full">
                    <img src='/chatBot.png' alt="chatBot" />
                </div>
            </div>
            <div className="px-20 flex items-center mt-12 gap-20">
                <div className="flex-[0.5] h-full w-full">
                    <img src="/turnLeads.png" alt="turnLeads" />
                </div>
                <div className="flex-[0.5] h-full">
                    <h1 className="font-bold text-4xl">
                        Turn Leads into Sales NOW.
                    </h1>
                    <div className="mt-4 text-xl font-medium">
                        <p className="">
                            Our A.I. Chatbots {"are'nt"} like the ones {"you're"} used to
                            seeing.
                        </p>
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet,
                        </p>
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                            dicta blanditiis velit! Deserunt ad perferendis qui.
                        </p>
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit ...
                        </p>
                    </div>
                    <div className="mt-6 text-lg font-medium">
                        <div className="flex items-center gap-2">

                            <CheckBox fontSize="large" />
                            <p>Works over SMS. Lorem, ipsum dolor.</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">

                            <CheckBox fontSize="large" />
                            <p>Works over Messenger. Lorem, ipsum </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">

                            <CheckBox fontSize="large" />
                            <p>Works over WebChat. Lorem ipsum dolor sit amet. </p>
                        </div>
                    </div>
                    <TryFreeBtn />
                </div>
            </div>
        </>
    );
};

export default Section2;

const TryFreeBtn = () => (
    <button className="mt-6 ml-[-20px] text-black text-3xl rounded-2xl font-bold flex items-center p-3 bg-[#03E2E1]">Try It Free<ArrowRight fontSize="large" /></button>
)