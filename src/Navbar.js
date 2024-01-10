import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Navbar = () => {
    let [open,setOpen]=useState(false);
  return (
    <header className="shadow-md w-full fixed top-0 left-0 z-10">
        <nav className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
                <span className="">Legoin</span>
            </div>
            <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
            <div className="">
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white 
                md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all 
                duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
                    <li className="components">
                        <Link to="/" className="hover:text-gray-400">Home</Link>
                    </li>
                    <li className="components">
                        <Link to="/about" className="hover:text-gray-400">About</Link>
                    </li>
                    <li className="components">
                        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
                    </li>
               </ul>
            </div>
            <div>

            </div>
        </nav>
    </header>
  );
};

export default Navbar;




