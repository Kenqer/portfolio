import { motion } from "framer-motion"
import Reveal from "../components/utils/Reveal";
import { SiAndroid, } from 'react-icons/si';
import { Tooltip } from '@chakra-ui/react'
import { IoLanguage } from "react-icons/io5";
import { FaEye, FaGears, FaHelmetSafety, FaIcons } from "react-icons/fa6";
import projects from "../common/project";
import language from "../common/language";
import frontend from "../common/frontend";
import backend from "../common/backend";
import mobile from "../common/mobile";
import devOps from "../common/devOps";
import certificate from "../common/certificate";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { TbCertificate } from "react-icons/tb";
import socials from "../common/socials";
import * as LottiePlayer from "@lottiefiles/lottie-player";

const Home = () => {
    const iconList = {
        hidd: {
            opacity: 0,
            filter: "blur(5px)",
            y: 35
        },
        visi: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
        }
    }


    return (
        <div>
            <header className="home">
                <div className="w-full h-screen flex md:flex-row flex-col justify-center items-center">
                    <div className="md:w-1/2 w-full h-full md:h-full relative overflow-hidden md:static md:overflow-visible flex flex-col justify-center px-[10%] gap-4 text-5xl lg:text-6xl xl:text-7xl ">
                        <Reveal>
                            <h1 className="font-serif ">My Name is,</h1>
                            <h1 className="font-bold font-serif ">I'm Javier Kennedi...</h1>
                            <div className="text-lg md:text-xl lg:text-2xl flex flex-col ">
                                <p className="font-mono">My goal is to help you produce websites that responsive and uphold a high standard of quality.</p>
                            </div>
                        </Reveal>
                        <div className="flex text-2xl md:text-4xl gap-4 items-center">
                            {socials.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={iconList}
                                    initial="hidd"
                                    animate="visi"
                                    transition={{
                                        delay: item.delay,
                                        duration: 1.2,
                                        bounce: 0.55,
                                        type: 'spring'
                                    }}
                                >
                                    <a className={`hover:scale-110 duration-300 ${item.colorClass}`} href={item.link} rel="noreferrer" target="_blank">
                                        <item.icon />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2 }}
                        className="md:w-1/2 static w-full z-[1] blur-sm md:blur-none">
                        <lottie-player
                            autoplay
                            loop
                            mode="normal"
                            src="https://lottie.host/5e562d08-18f9-47fa-8502-371b492c0d25/C3FhCBBp0F.json"
                            className="w-20 h-20"
                        ></lottie-player>
                    </motion.div>
                </div>
            </header>
            <main className="my-40 md:my-20 flex flex-col gap-44">
                <section id="certificate" className="px-[10%] gap-8 flex flex-col items-center">
                    <div className="flex items-center gap-3 z-[2]">
                        <TbCertificate className="w-20 h-20 text-amber-600 hover:text-amber-900 hover:scale-110 duration-300 trophy" />

                        <div className="flex flex-col">
                            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 font-semibold text-5xl">Certificate</h3>
                            <p className="text-xl text-black font-mono">My Awards and Achivements</p>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5 }}

                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-[2%] ">
                            {certificate.slice(0, 3).map((certificate, index) => (
                                <div key={index} className="w-full h-auto relative overflow-hidden group cursor-pointer border hover:border-b-8 hover:border-b-teal-600 hover:rounded-b-2xl rounded-xl flex flex-col hover:scale-[103%] duration-200 shadow-lg">
                                    <a target='_blank' rel='noopener noreferrer' href={certificate.link}>
                                        <div className="w-full h-auto">
                                            <img className="aspect-[16/11.25]" src={`./img/certificate/${certificate.image}`} alt={certificate.title} />
                                        </div>
                                        <div className='px-4 py-4'>
                                            <div className='text-lg font-mono flex justify-between'>
                                                <em>{certificate.status}</em>
                                                <em>{certificate.date}</em>
                                            </div>
                                            <h3 className='font-semibold text-xl'>{certificate.title}</h3>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <button className="text-sky-500 hover:text-sky-400 font-medium text-lg">
                        <Link to="/certificate" className="flex items-center gap-2">
                            <FaEye className="w-6 h-6" />
                            Show all certificate
                        </Link>
                    </button>

                </section>
                <Reveal>
                    <section id="skills" className="md:px-[10%] flex flex-row md:justify-between items-center">
                        <div className="flex flex-col md:w-1/2 w-full z-[2] px-[10%] md:px-0">
                            <div className="w-full flex gap-3 ">
                                <span className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings chip w-[4.5rem] text-fuchsia-400 hover:text-fuchsia-900 hover:scale-110 duration-300" width="4.5rem" height="4.5rem" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>
                                </span>
                                <div className="flex flex-col">
                                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-pink-900 font-semibold text-5xl">Skills</h1>
                                    <p className="text-xl text-black font-mono">List</p>
                                </div>
                            </div>
                            <div className='flex flex-col pt-[2%]'>
                                <span className='border shadow-md rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
                                    <IoLanguage />
                                    Language
                                </span>
                                <ul className='flex flex-wrap gap-6  py-5'>
                                    {language.map((lang, index) => (
                                        <li key={index} className={lang.className}>
                                            <Tooltip label={lang.label} hasArrow>
                                                <span>
                                                    <lang.icon className='w-12 h-12' />
                                                </span>
                                            </Tooltip>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex flex-col pt-[2%]'>
                                <span className='border shadow-md rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
                                    <FaIcons />
                                    Frontend
                                </span>
                                <ul className='flex flex-wrap gap-4 text-5xl py-5'>
                                    {frontend.map((tech, index) => (
                                        <li key={index} className={`${tech.className}`}>
                                            <Tooltip label={tech.label} hasArrow>
                                                <span>
                                                    <tech.icon className="w-12 h-12" />
                                                </span>
                                            </Tooltip>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex flex-col pt-[2%]'>
                                <span className='border shadow-md rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
                                    <FaHelmetSafety />
                                    Backend
                                </span>
                                <ul className='flex flex-wrap gap-4 text-5xl py-5 items-center'>
                                    {backend.map((tech, index) => (
                                        <li key={index} className={`${tech.className}`}>
                                            <Tooltip label={tech.label} hasArrow>
                                                <span>
                                                    <tech.icon className="w-12 h-12" />
                                                </span>
                                            </Tooltip>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex flex-col pt-[2%]'>
                                <span className='border shadow-md rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
                                    <SiAndroid />
                                    Mobile
                                </span>
                                <ul className='flex flex-wrap gap-4  py-5 items-center'>
                                    {mobile.map((tech, index) => (
                                        <li key={index} className={`${tech.className}`}>
                                            <Tooltip label={tech.label} hasArrow>
                                                <span>
                                                    <tech.icon className="w-12 h-12" />
                                                </span>
                                            </Tooltip>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex flex-col pt-[2%]'>
                                <span className='border shadow-md rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
                                    <FaGears />
                                    DevOps
                                </span>
                                <ul className='flex flex-wrap gap-4 py-5 items-center'>
                                    {devOps.map((tech, index) => (
                                        <li key={index} className={`${tech.className}`}>
                                            <Tooltip label={tech.label} hasArrow>
                                                <span>
                                                    <tech.icon className="w-12 h-12" />
                                                </span>
                                            </Tooltip>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/2 absolute md:static w-full z-[1] blur-sm md:blur-none">
                            <lottie-player
                                autoplay
                                loop
                                mode="normal"
                                src="https://lottie.host/6dec9da8-de4b-44f1-bb9c-1ca95d70fb59/5H2I83WxU9.json"
                                className="w-20 h-20"
                            ></lottie-player>
                        </div>
                    </section>
                </Reveal>
                <section id="project" className="px-[10%] flex flex-col justify-center items-center gap-4 ">
                    <div className="w-full h-full flex">
                        <div className="flex gap-3 z-[2]">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-briefcase-filled brief w-[4.5rem] text-teal-900 hover:text-teal-500 hover:scale-110 duration-300" width="4.5rem" height="4.5rem" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" strokeWidth="0" fill="currentColor" /></svg>
                            </span>
                            <div className="flex flex-col">
                                <div>
                                    <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-yellow-300 font-semibold text-5xl">Project</h3>
                                </div>
                                <div>
                                    <p className="text-xl text-black font-mono -z-10 relative">My Ongoing and Past Project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-[2%]">
                            {projects.map((project, index) => (
                                <article
                                    key={index}
                                    className="w-full h-auto overflow-hidden group cursor-pointer border rounded-xl flex flex-col relative hover:scale-[103%] duration-200 shadow-lg pb-4 md:pb-0"
                                >
                                    <a target="_blank" rel='noopener noreferrer'  href={project.link}>
                                        <figure>
                                            <div className="duration-200 w-full h-auto relative overflow-hidden">
                                                <img className="w-full h-full aspect-[16/11.25] group-hover:scale-125 duration-300" src={`./img/project/${project.image}`} alt={project.title} />
                                            </div>
                                            <figcaption className="flex flex-col gap-2 px-7 py-4">
                                                <div className="aspect-[12/4]">
                                                    <div className="text-lg font-mono flex justify-between">
                                                        <em>{project.status}</em>
                                                        <em>{project.date}</em>
                                                    </div>
                                                    <div className="flex flex-col gap-3">
                                                        <h3 className="font-semibold text-xl">{project.title}</h3>
                                                        <p className="text-gray-500 line-clamp-3">{project.description}</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row gap-3">
                                                    {project.program.map(({ icon: Icon, colorClass }, i) => (
                                                        <Icon key={i} className={`text-4xl ${colorClass}`} />
                                                    ))}
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </article>
                            ))}
                        </div>
                    </motion.div>
                    <button className="text-sky-500 hover:text-sky-400 font-medium text-lg">
                        <Link to="/projects" className="flex items-center gap-2">
                            <FaEye className="w-6 h-6" />
                            Show all projects
                        </Link>
                    </button>
                </section>
            </main>
        </div>



    );
}

export default Home;