"use client"

import React, { useEffect, useState } from "react";
import { Close, KeyboardArrowDown, } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { signOut, useSession } from "next-auth/react";
import Loader from "./Loader";

const Header = ({ custom1, custom2 }) => {
    const [userAuthenticated, setUserAuthenticated] = useState('')
    useEffect(() => {
        setUserAuthenticated(localStorage.getItem('user'))
    }, []);
    const [loading, setLoading] = useState(false)
    const logOut = () => {
        setLoading(true)
        localStorage.clear();
        signOut()
        setLoading(false)
    }
    let [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open2 = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const sesion = useSession()
    console.log(sesion?.data?.user?.image);

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
                        {open ? <Close /> : <MenuIcon />}
                    </div>
                </div>
                <ul
                    className={`lg:flex lg:items-center absolute lg:static text-gray-500 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20" : "top-[-490px]"
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
                        {!userAuthenticated ? <Link href='/login' className={` hover:text-[#1A567D] duration-500 ${custom2}`}>
                            Log In
                        </Link> : <p className="cursor-default"> {sesion?.data?.user?.name || JSON.parse(localStorage.getItem("user"))?.company_name} </p>
                        }
                    </li>

                    {!userAuthenticated ? <Link href="/signup"> <button className="text-white lg:my-0 my-5 lg:mt-0 lg:ml-8 px-6 py-3 rounded-3xl bg-[#03E2E1] hover:bg-[#61b4b4]">
                        Get Started {'->'}
                    </button></Link> : <div>
                        <Button id="basic-button" className="w-fit"
                            aria-controls={open2 ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open2 ? 'true' : undefined}
                            onClick={handleClick}>
                            <Avatar aria-controls={open2 ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open2 ? 'true' : undefined}
                                onClick={handleClick} className="md:mt-0 mt-3 ml-0 md:ml-3" alt="user" src={sesion?.data?.user?.image || "https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg"} />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open2}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {loading ? <Loader /> : <MenuItem onClick={logOut}>Logout</MenuItem>}
                        </Menu>
                    </div>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Header;

const IconPara = ({ list, customClass }) => (
    <p className={`cursor-pointer ${customClass} `}> {list}<KeyboardArrowDown /></p>
)