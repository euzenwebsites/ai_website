"use client"

import React, { useState } from "react";
import { Close, KeyboardArrowDown, Menu } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

const Header = ({ custom1, custom2 }) => {
    let [open, setOpen] = useState(false);

    return (
        <div className={`shadow w-full fixed top-0 left-0 z-[100] ${custom1}`}>
            <div className="md:flex items-center justify-between bg-white px-5">
                <div className=" flex items-center gap-1">
                    <div to="/" className="flex justify-center place-items-center">
                        <Image height={20} width={200} src="/logo.png" alt="logo" className="h-20 cursor-pointer" />
                        <div className="lg:flex justify-between items-center text-gray-500 ml-5 hidden lg:visible ">
                            {Array("Products", "Platforms", "Resources").map((val, i) => <IconPara list={val} key={i} customClass='ml-2' />)}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div
                        onClick={() => setOpen(!open)}
                        className="absolute right-8 top-7 text-gray-500 cursor-pointer lg:hidden w-7 h-7"
                    >
                        {open ? <Close /> : <Menu />}
                    </div>
                </div>
                <ul
                    className={`lg:flex lg:items-center absolute lg:static text-gray-500 bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20" : "top-[-490px]"
                        }`}
                >
                    <div className="lg:my-0 lg:mt-0 mt-4 justify-between items-center text-gray-500 lg:ml-5 visible lg:hidden">
                        {Array("Products", "Platforms", "Resources").map((val, i) => <IconPara list={val} key={i} customClass="lg:ml-2 mt-5 lg:mt-0 cursor-pointer" />)}
                    </div>
                    <li className="lg:my-0 mt-5 lg:mt-0 cursor-pointer">
                        <p className={` hover:text-[#1A567D] duration-500 ${custom1}`}>
                            Pricing
                        </p>
                    </li>
                    <li className="lg:my-0 mt-5 lg:mt-0 lg:ml-20 cursor-pointer">
                        <Link href='/login' className={` hover:text-[#1A567D] duration-500 ${custom2}`}>
                            Log In
                        </Link>
                    </li>
                    <Link href="/signup">
                        <button className="text-white lg:my-0 my-5 lg:mt-0 lg:ml-8 px-6 py-3 rounded-3xl bg-[#03E2E1] hover:bg-[#61b4b4]">Get Started {'->'}</button>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;

const IconPara = ({ list, customClass }) => (
    <p className={`cursor-pointer ${customClass} `}> {list}<KeyboardArrowDown /></p>
)