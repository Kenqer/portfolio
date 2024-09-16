import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Navbar = () => {
    let [open, setOpen] = useState(false);

    const handleScroll = () => {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth'
            }
        )
    }
    
    return (
        <header className="w-full">
            <nav className="bg-transparent ">
                <div className="flex  flex-row items-center justify-between">
                    <div className="ml-4 cursor-pointer">
                        <button onClick={handleScroll}>
                            <Link to="/">
                                <img className="w-20 h-full" src="./img/logo.webp" alt="" />
                            </Link>
                        </button>
                    </div>
                    <div className="py-10">
                        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white
                                    md:z-auto z-[99] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all 
                                    duration-500 ease-in font-[jawa] md:flex-row md:gap-20 rounded-br-xl border-b-8 border-teal-700 md:border-none shadow-md md:shadow-none ${open ? 'top-[100px]' : 'left-[-1000px] top-[100px]'}`}>
                            <Link to="/">
                                <li className="flex flex-col group">
                                    <span className="text-xl font-semibold hover:text-teal-600 cursor-pointer group-hover:scale-105 duration-200 z-[2]">Home</span>
                                    <span className="md:w-full w-40 border-b-[5px] rounded-b-md border-teal-600 scale-0 group-hover:scale-110 duration-200">
                                    </span>
                                </li>
                            </Link>
                            <Link to="/about">
                                <li className="flex flex-col group">
                                    <span className="text-xl font-semibold hover:text-teal-600 cursor-pointer group-hover:scale-105 duration-200 z-[2]">About</span>
                                    <span className="md:w-full w-40 border-b-[5px] rounded-b-md border-teal-600 scale-0 group-hover:scale-110 duration-200">
                                    </span>
                                </li>
                            </Link>
                            <Link to="/contact">
                                <li className="flex flex-col group">
                                    <span className="text-xl font-semibold hover:text-teal-600 cursor-pointer group-hover:scale-105 duration-200 z-[2]">Contact</span>
                                    <span className="md:w-full w-40 border-b-[5px] rounded-b-md border-teal-600 scale-0 group-hover:scale-110 duration-200">
                                    </span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-row items-center">
                        <ul className="mr-10 flex flex-row gap-5">
                            <li className="cursor-pointer hover:text-yellow-600 hover:scale-105 duration-200"><a href="#certificate">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trophy-filled" width="1.25em" height="1.25em" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" strokeWidth="0" fill="currentColor" /></svg>
                            </a></li>
                            <li className="cursor-pointer hover:text-purple-600 hover:scale-105 duration-200"><a href="#skills"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings " width="1.25em" height="1.25em" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>
                            </a></li>
                            <li className="cursor-pointer hover:text-teal-600 hover:scale-105 duration-200"><a href="#project"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-briefcase-filled" width="1.25em" height="1.25em" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" strokeWidth="0" fill="currentColor" /></svg>
                            </a></li>
                        </ul>
                        <div onClick={() => setOpen(!open)} className="mr-10 text-3xl md:hidden cursor-pointer">
                            <i name={open ? 'close' : 'menu'} className={`${open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars-staggered'}`}></i>
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




