import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Sidebar = ({ handleSidebar, open, handlePage, handleScroll }) => {

    return (
        <div className={`w-full h-screen absolute flex ${open ? 'visible' : 'invisible'}`}>
            <div className={`w-80 sm:w-96 h-full bg-white shadow-2xl duration-300 ${open ? 'translate-x-0 ' : '-translate-x-full'}`}>
                <ul className={`flex flex-col gap-6 w-full justify-center items-center mt-10`}>
                    <Link to="/" onClick={() => { handleScroll(); handleSidebar(); }}>
                        <li className="flex flex-col w-40 group">
                            <span className="md:text-[10px] lg:text-[13px] xl:text-lg text-center font-semibold hover:text-teal-600 hover:border-teal-600 cursor-pointer group-hover:scale-105 duration-200 border border-black rounded-full px-2">HOME</span>
                        </li>
                    </Link>
                    <Link to="/certificate" onClick={() => handleSidebar()}>
                        <li className="flex flex-col w-40 group">
                            <span className="md:text-[10px] lg:text-[13px] xl:text-lg text-center font-semibold hover:text-teal-600 hover:border-teal-600 cursor-pointer group-hover:scale-105 duration-200 border border-black rounded-full px-2">CERTIFICATE</span>
                        </li>
                    </Link>
                    {/* Handle the skills section navigation */}
                    <a href="#skills" onClick={() => { handlePage('skills'); handleSidebar(); }}>
                        <li className="flex flex-col w-40 group">
                            <span className="md:text-[10px] lg:text-[13px] xl:text-lg text-center font-semibold hover:text-teal-600 hover:border-teal-600 cursor-pointer group-hover:scale-105 duration-200 border border-black rounded-full px-2">SKILLS</span>
                        </li>
                    </a>
                    <Link to="/projects" onClick={() => handleSidebar()}>
                        <li className="flex flex-col w-40 group">
                            <span className="md:text-[10px] lg:text-[13px] xl:text-lg text-center font-semibold hover:text-teal-600 hover:border-teal-600 cursor-pointer group-hover:scale-105 duration-200 border border-black rounded-full px-2">PROJECTS</span>
                        </li>
                    </Link>
                    <Link to="/about" onClick={() => { handleScroll(); handleSidebar(); }}>
                        <li className="flex flex-col w-40 group">
                            <span className="md:text-[10px] lg:text-[13px] xl:text-lg text-center font-semibold hover:text-teal-600 hover:border-teal-600 cursor-pointer group-hover:scale-105 duration-200 border border-black rounded-full px-2">ABOUT</span>
                        </li>
                    </Link>
                    <Link to="/contact" onClick={() => { handleScroll(); handleSidebar(); }}>
                        <li className="flex flex-col w-40 group">
                            <span className="md:text-[10px] lg:text-[13px] xl:text-lg text-center font-semibold hover:text-teal-600 hover:border-teal-600 cursor-pointer group-hover:scale-105 duration-200 border border-black rounded-full px-2">CONTACT</span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className={`w-full h-full absolute -z-10 bg-[rgba(0,0,0,0.29)]`}></div>
        </div>
    )
}

export default Sidebar
