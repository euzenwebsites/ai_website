"use client"

import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { KeyboardArrowDown } from "@mui/icons-material";

const Header = ({ custom1, custom2 }) => {
    let [open, setOpen] = useState(false);

    return (
        <div className={`shadow w-full fixed top-0 left-0 z-[100] ${custom1}`}>
            <div className="md:flex items-center justify-between bg-white py-4 px-5">
                <div className=" flex items-center gap-1">
                    <div to="/" className="flex justify-center place-items-center">
                        <img src="/logo.png" alt="logo" className="w-[180px]  cursor-pointer" />
                        <div className="md:flex justify-between items-center text-gray-500 ml-5 hidden md:visible md:block">
                            <p className=""> Products<KeyboardArrowDown /></p>
                            <p className="ml-2">Platforms<KeyboardArrowDown /></p>
                            <p className="ml-2">Pricing<KeyboardArrowDown /></p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div
                        onClick={() => setOpen(!open)}
                        className="absolute right-8 top-9 text-gray-500 cursor-pointer md:hidden w-7 h-7"
                    >
                        {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                    </div>
                </div>
                <ul
                    className={`animate__animated animate__backInLeft md:flex md:items-center absolute md:static text-gray-500 bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20" : "top-[-490px]"
                        }`}
                >
                    <div className="md:my-0 md:mt-0 mt-4 md:flex justify-between items-center text-gray-500 md:ml-5 visible md:hidden">
                        <p className="md:mt-0"> Products<KeyboardArrowDown /></p>
                        <p className="md:ml-2 mt-5 md:mt-0">Platforms<KeyboardArrowDown /></p>
                        <p className="md:ml-2 mt-5 md:mt-0">Resources<KeyboardArrowDown /></p>
                    </div>
                    <li className="md:my-0 mt-5 md:mt-0">
                        <p to="/" className={` hover:text-[#1A567D] duration-500 ${custom1}`}>
                            Pricing
                        </p>
                    </li>
                    <li className="md:my-0 mt-5 md:mt-0 md:ml-20">
                        <p
                            to="/about"
                            className={` hover:text-[#1A567D] duration-500 ${custom2}`}
                        >
                            Log In
                        </p>
                    </li>
                    <button className="text-white md:my-0 my-5 md:mt-0 md:ml-8 px-6 py-3 rounded-3xl bg-[#03E2E1] hover:bg-[#61b4b4]">Get Started {'->'}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;