import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Navbar = () => {
    let [open, setOpen] = useState(false);
    return (
        <header className="w-full">
            <nav className="bg-transparent">
                <div className="flex flex-row items-center justify-between">
                    <div className="w-20 ml-4 cursor-pointer">
                        <img src="./img/logo.png" alt="" />
                    </div>
                    <div className="py-10">
                        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white
                                    md:z-auto z-[99] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all 
                                    duration-500 ease-in font-[jawa] md:flex-row md:gap-20 rounded-br-xl border-b-8 border-teal-700 md:border-none shadow-md md:shadow-none ${open ? 'top-[100px]' : 'left-[-1000px] top-[100px]'}`}>
                            <Link to="/">
                                <li className="flex flex-col group">
                                    <span className="text-xl font-semibold hover:text-teal-600 cursor-pointer group-hover:scale-105 duration-200 z-[2]">Home</span>
                                    <span className="w-[300px] md:w-full border-b-[5px] rounded-b-md border-teal-600 scale-0 group-hover:scale-110 duration-200">
                                    </span>
                                </li>
                            </Link>
                            <Link to="/about">
                                <li className="flex flex-col group">
                                    <span className="text-xl font-semibold hover:text-teal-600 cursor-pointer group-hover:scale-105 duration-200 z-[2]">About</span>
                                    <span className="w-[300px] md:w-full border-b-[5px] rounded-b-md border-teal-600 scale-0 group-hover:scale-110 duration-200">
                                    </span>
                                </li>
                            </Link>
                            <Link to="/contact">
                                <li className="flex flex-col group">
                                    <span className="text-xl font-semibold hover:text-teal-600 cursor-pointer group-hover:scale-105 duration-200 z-[2]">Contact</span>
                                    <span className="w-[300px] md:w-full border-b-[5px] rounded-b-md border-teal-600 scale-0 group-hover:scale-110 duration-200">
                                    </span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-row items-center">
                        <ul className="mr-10 flex flex-row gap-5">
                            <li className="cursor-pointer hover:text-yellow-600 hover:scale-105 duration-200"><a href="#certificate"><i className="fa-solid fa-trophy"></i></a></li>
                            <li className="cursor-pointer hover:text-purple-600 hover:scale-105 duration-200"><a href="#skills"><i className="fa-solid fa-microchip"></i></a></li>
                            <li className="cursor-pointer hover:text-teal-600 hover:scale-105 duration-200"><a href="#project"><i className="fa-solid fa-briefcase"></i></a></li>
                        </ul>
                        <div onClick={()=>setOpen(!open)} className="mr-10 text-3xl md:hidden cursor-pointer">
                            <i name={open ? 'close':'menu'} className={`${open ? 'fa-solid fa-xmark':'fa-solid fa-bars-staggered'}`}></i>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 px-10">
                    <div className="w-full bg-black h-[1px]">

                    </div>
                    <div className="w-full bg-black h-[1px]">

                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;




