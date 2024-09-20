import { Link, withRouter } from "react-router-dom";
import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import { FaSun } from "react-icons/fa6";

const Navbar = ({ history, location }) => {
    const [open, setOpen] = useState(false);

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const handleSidebar = () => {
        setOpen(!open)
    }

    const handlePage = (sectionId) => {
        if (location.pathname !== '/') {
            // If not on the homepage, navigate to the homepage and then scroll to the section
            history.push('/');
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300); // Slight delay to ensure the page transition is complete
        } else {
            // Already on the homepage, just scroll to the section
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <nav className="bg-transparent fixed w-full h-fit z-50 bg-white">
            <div className="flex flex-row items-center justify-between md:justify-center translate-x-0 md:translate-x-10 lg:translate-x-0 gap-10">
                {/* <FaSun className="absolute left-0 translate-x-10" /> */}
                <ul className={`md:grid grid-cols-3 lg:flex md:items-center md:pb-0 pb-12 absolute md:static
                               w-auto md:pl-0 pl-9 transition-all 
                                duration-500 ease-in font-[jawa] md:flex-row md:gap-4 hidden`}>
                    <Link to="/" onClick={handleScroll}>
                        <li className="flex flex-col group">
                            <span className="md:text-[10px] lg:text-[13px] xl:text-lg text-center font-semibold hover:text-teal-600 hover:border-teal-600 cursor-pointer group-hover:scale-105 duration-200 border border-black rounded-full px-2">HOME</span>
                        </li>
                    </Link>
                    <Link to="/certificate" className="hidden">
                        <li className="flex flex-col group">
                            <span className="md:text-[10px] lg:text-[13px] xl:text-lg text-center font-semibold hover:text-teal-600 hover:border-teal-600 cursor-pointer group-hover:scale-105 duration-200 border border-black rounded-full px-2">CERTIFICATE</span>
                        </li>
                    </Link>
                    {/* Handle the skills section navigation */}
                    <a href="#skills" className="hidden" onClick={() => handlePage('skills')}>
                        <li className="flex flex-col group">
                            <span className="md:text-[10px] lg:text-[13px] xl:text-lg text-center font-semibold hover:text-teal-600 hover:border-teal-600 cursor-pointer group-hover:scale-105 duration-200 border border-black rounded-full px-2">SKILLS</span>
                        </li>
                    </a>
                    <Link to="/projects" className="hidden">
                        <li className="flex flex-col group">
                            <span className="md:text-[10px] lg:text-[13px] xl:text-lg text-center font-semibold hover:text-teal-600 hover:border-teal-600 cursor-pointer group-hover:scale-105 duration-200 border border-black rounded-full px-2">PROJECTS</span>
                        </li>
                    </Link>
                    <Link to="/about" onClick={handleScroll}>
                        <li className="flex flex-col group">
                            <span className="md:text-[10px] lg:text-[13px] xl:text-lg text-center font-semibold hover:text-teal-600 hover:border-teal-600 cursor-pointer group-hover:scale-105 duration-200 border border-black rounded-full px-2">ABOUT</span>
                        </li>
                    </Link>
                    <Link to="/contact" onClick={handleScroll}>
                        <li className="flex flex-col group">
                            <span className="md:text-[10px] lg:text-[13px] xl:text-lg text-center font-semibold hover:text-teal-600 hover:border-teal-600 cursor-pointer group-hover:scale-105 duration-200 border border-black rounded-full px-2">CONTACT</span>
                        </li>
                    </Link>
                </ul>
                <div className="w-20 cursor-pointer text-center hidden md:block">
                    <button onClick={handleScroll}>
                        <Link to="/">
                            <img className="w-20 h-full" src="./img/logo.webp" alt="logo" />
                        </Link>
                    </button>
                </div>
                <ul className="md:flex gap-4 font-[jawa] hidden">
                    <Link to="/certificate">
                        <li className="flex flex-col group">
                            <span className="md:text-[10px] lg:text-[13px] xl:text-lg text-center font-semibold hover:text-teal-600 hover:border-teal-600 cursor-pointer group-hover:scale-105 duration-200 border border-black rounded-full px-2">CERTIFICATE</span>
                        </li>
                    </Link>
                    {/* Handle the skills section navigation */}
                    <a href="#skills" onClick={() => handlePage('skills')}>
                        <li className="flex flex-col group">
                            <span className="md:text-[10px] lg:text-[13px] xl:text-lg text-center font-semibold hover:text-teal-600 hover:border-teal-600 cursor-pointer group-hover:scale-105 duration-200 border border-black rounded-full px-2">SKILLS</span>
                        </li>
                    </a>
                    <Link to="/projects">
                        <li className="flex flex-col group">
                            <span className="md:text-[10px] lg:text-[13px] xl:text-lg text-center font-semibold hover:text-teal-600 hover:border-teal-600 cursor-pointer group-hover:scale-105 duration-200 border border-black rounded-full px-2">PROJECTS</span>
                        </li>
                    </Link>
                </ul>
                <div className="w-1/2 h-20 cursor-pointer translate-x-10 text-center block md:hidden z-50">
                    <input type="checkbox" id="checkbox" checked={open} onChange={handleSidebar} />
                    <label htmlFor="checkbox" className="toggle" >
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>
                </div>
                <div className="w-1/2 md:w-full flex flex-row items-center absolute justify-end md:justify-start lg:justify-end -translate-x-10 md:translate-x-0 lg:-translate-x-10 right-0 md:left-0 lg:right-0 gap-2 -z-10">
                    <div className="lg:w-6 w-4 lg:h-6 h-4 bg-green-500 rounded-full">
                        <div className="lg:w-6 w-4 lg:h-6 h-4 bg-green-600 rounded-full shine -z-10">
                        </div>
                    </div>

                    <span className="font-[jawa] font-bold text-sm md:text-lg xl:text-xl block md:hidden xl:block">
                        Available
                    </span>
                    <span className="font-[jawa] font-bold text-sm md:text-lg xl:text-xl hidden md:block xl:hidden">
                        Available
                    </span>
                </div>
            </div>
            <Sidebar handleSidebar={handleSidebar} handleScroll={handleScroll} handlePage={handlePage} open={open} />
            <div className="flex flex-col gap-2 px-10 z-50 relative">
                <div className="w-full bg-black h-[1px]"></div>
                <div className="w-full bg-black h-[1px] hidden md:block"></div>
            </div>
        </nav>
    );
};

export default withRouter(Navbar);
