import { motion, useInView, useAnimation, spring } from "framer-motion"
import Reveal from "../components/utils/Reveal";
import { SiAmazonaws, SiAndroid, SiAndroidstudio, SiChakraui, SiCpanel, SiExpo, SiExpress, SiFramer, SiFreelancer, SiGit, SiGithub, SiGithubpages, SiInstagram, SiLinkedin, SiMongodb, SiMysql, SiPython, SiReact, SiTailwindcss, SiTwitter, SiVercel, SiYoutube, SiAxios, SiJsonwebtokens, SiVite } from 'react-icons/si'
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { Tooltip } from '@chakra-ui/react'

const Home = () => {
    const iconList = {
        hidd: {
            opacity: 0,
            y: 35
        },
        visi: {
            opacity: 1,
            y: 0,
        }
    }
    return (
        <div>
            <header className="home">
                <div className="flex md:flex-row flex-col ">
                    <div className="md:w-1/2 w-full h-full mt-10 md:mt-0 md:h-full relative overflow-hidden md:static md:overflow-visible flex flex-col gap-2 justify-center md:pt-[25vh] px-[10%] z-[1] text-5xl md:text-7xl ">

                        {/* <motion.div
                            className="absolute z-[1] ml-[-10vh] w-[100vh] md:w-[80vh] lg:w-[100vh] ">
                            <img src="./img/BG.webp" alt="" draggable='false' />
                        </motion.div> */}
                        <div className="z-[2]">
                            <Reveal>
                                <h1 className="font-bold font-serif ">Hello,</h1>
                                <h2 className="font-serif ">I'm Javier</h2>
                                <h2 className="font-serif ">Kennedi...</h2>
                                <div className="text-lg md:text-2xl flex flex-col ">
                                    <p className="font-mono">My goal is to help you produce websites that responsive and uphold a high standard of quality.</p>
                                </div>
                            </Reveal>
                            <div className="flex text-2xl md:text-4xl gap-4 items-center">
                                <motion.div
                                    variants={iconList}
                                    initial="hidd"
                                    animate="visi"
                                    transition={{
                                        delay: 0.2,
                                        duration: 1,
                                        bounce: 0.55,
                                        type: 'spring'
                                    }}
                                >
                                    <a className="hover:scale-110 duration-300 hover:text-purple-800" href="https://www.instagram.com/ken.qer/" target="_blank">
                                        <SiInstagram></SiInstagram>
                                    </a>
                                </motion.div>
                                <motion.div
                                    variants={iconList}
                                    initial="hidd"
                                    animate="visi"
                                    transition={{
                                        delay: 0.4,
                                        duration: 1,
                                        bounce: 0.55,
                                        type: 'spring'
                                    }}
                                >
                                    <a className="hover:scale-110 duration-300 hover:text-gray-500" href="https://github.com/Kenqer" target="_blank">
                                        <SiGithub></SiGithub>
                                    </a>
                                </motion.div>
                                <motion.div
                                    variants={iconList}
                                    initial="hidd"
                                    animate="visi"
                                    transition={{
                                        delay: 0.6,
                                        duration: 1,
                                        bounce: 0.55,
                                        type: 'spring'
                                    }}
                                >
                                    <a className="hover:scale-110 duration-300 hover:text-red-500" href="https://www.youtube.com/channel/UCXG6GuBh1oHQaYM6TQ7-NRw" target="_blank">
                                        <SiYoutube></SiYoutube>
                                    </a>
                                </motion.div>
                                <motion.div
                                    variants={iconList}
                                    initial="hidd"
                                    animate="visi"
                                    transition={{
                                        delay: 0.8,
                                        duration: 1,
                                        bounce: 0.55,
                                        type: 'spring'
                                    }}
                                >
                                    <a className="hover:scale-110 duration-300 hover:text-blue-900" href="https://www.linkedin.com/in/javier-kennedi-9bb6342aa/" target="_blank">
                                        <SiLinkedin></SiLinkedin>
                                    </a>
                                </motion.div>
                                <motion.div
                                    variants={iconList}
                                    initial="hidd"
                                    animate="visi"
                                    transition={{
                                        delay: 1,
                                        duration: 1,
                                        bounce: 0.55,
                                        type: 'spring'
                                    }}
                                >
                                    <a className="hover:scale-110 duration-300 hover:text-blue-400" href="https://twitter.com/itisnotken" target="_blank">
                                        <SiTwitter></SiTwitter>
                                    </a>
                                </motion.div>
                                <motion.div
                                    variants={iconList}
                                    initial="hidd"
                                    animate="visi"
                                    transition={{
                                        delay: 1.2,
                                        duration: 1,
                                        bounce: 0.55,
                                        type: 'spring'
                                    }}
                                >
                                    <a className="hover:scale-110 duration-300 hover:text-sky-400" href="https://www.freelancer.com/u/JavierKennedi" target="_blank">
                                        <SiFreelancer></SiFreelancer>
                                    </a>
                                </motion.div>

                            </div>
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
            <main className="my-[80vw] md:my-[20vw] flex flex-col gap-44">
                <section id="certificate" className="px-[10%] flex flex-col">
                    <div className="w-full flex">
                        <div className="flex gap-3 z-[2]">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trophy-filled w-[4.5rem] text-amber-600 hover:text-amber-900 hover:scale-110 duration-300 trophy" width="4.5rem" height="4.5rem" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" strokeWidth="0" fill="currentColor" /></svg>
                            </span>
                            <div className="flex flex-col">
                                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 font-semibold text-5xl">Certificate</h1>
                                <p className="text-xl text-black font-mono">My Awards and Achivements</p>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-[2%] ">
                            <div className="w-full h-auto group cursor-pointer border hover:border-b-8 hover:border-b-teal-600 hover:rounded-b-2xl rounded-xl flex flex-col relative px-3 pt-3 hover:scale-[103%] duration-200 shadow-lg">
                                <a target='_blank' href="https://drive.google.com/drive/folders/1h7UUQpPJU86a8QRKQmEy3JAWzOaE3nHt?usp=drive_link">
                                    <div className="">
                                        <img className="aspect-[16/11.25]" src="./img/seameo.webp" alt="jawa" />
                                    </div>
                                    <div className='px-1 py-4'>
                                        <div className='text-lg font-mono flex justify-between'>
                                            <em>Academy</em>
                                            <em>Aug 2023</em>
                                        </div>
                                        <h1 className='font-semibold text-xl'>Seameo Qitep In Science - Web Cloud Engineering (1st Place)</h1>
                                    </div>
                                </a>
                            </div>
                            <div className="w-full h-auto cursor-pointer border rounded-xl hover:border-b-8 hover:border-b-teal-600 hover:rounded-b-2xl flex flex-col relative px-3 pt-3  hover:scale-[103%] duration-200 shadow-lg">
                                <a target="_blank" href="https://www.w3docs.com/quiz/certificate/3/100/1704877126/Javier%20Kennedi/b5bef9956d838ff3e475f2ae3fe38799">
                                    <div className="">
                                        <img className="aspect-[16/11.25]" src="img/c2.webp" alt="jawa" />
                                    </div>
                                    <div className='px-1 py-4'>
                                        <div className='text-lg font-mono flex justify-between'>
                                            <em>Non-Academy</em>
                                            <em>Jan 2024</em>
                                        </div>
                                        <h1 className='font-semibold text-xl'>W3Docs - HTML5 Basic</h1>
                                    </div>
                                </a>
                            </div>
                            <div className="w-full h-auto cursor-pointer border rounded-xl hover:border-b-8 hover:border-b-teal-600 hover:rounded-b-2xl flex flex-col relative px-3 pt-3  hover:scale-[103%] duration-200 shadow-lg">
                                <a target='_blank' href="https://www.w3docs.com/quiz/certificate/2/100/1704879442/Javier%20Kennedi/337cc6f88702cc7fe2a7a07a69c8338f">
                                    <img className="aspect-[16/11.25]" src="img/c4.webp" alt="jawa" />
                                    <div className='px-1 py-4'>
                                        <div className='text-lg font-mono flex justify-between'>
                                            <em>Non-Academy</em>
                                            <em>Jan 2024</em>
                                        </div>
                                        <h1 className='font-semibold text-xl'>W3Docs - PHP Basic</h1>
                                    </div>
                                </a>
                            </div>
                            <div className="w-full h-auto cursor-pointer border  rounded-xl hover:border-b-8 hover:border-b-teal-600 hover:rounded-b-2xl flex flex-col relative px-3 pt-3  hover:scale-[103%] duration-200 shadow-lg">
                                <a target='_blank' href="https://www.w3docs.com/quiz/certificate/5/100/1704876717/Javier%20Kennedi/32ea25c2344d1bbf5f256bfc5a63c359">
                                    <img className="aspect-[16/11.25]" src="/img/c3.webp" alt="jawa" />
                                    <div className='px-1 py-4'>
                                        <div className='text-lg font-mono flex justify-between'>
                                            <em>Non-Academy</em>
                                            <em>Jan 2024</em>
                                        </div>
                                        <h1 className='font-semibold text-xl'>W3Docs - CSS Basic</h1>
                                    </div>
                                </a>
                            </div>
                            <div className="w-full h-auto cursor-pointer border  rounded-xl hover:border-b-8 hover:border-b-teal-600 hover:rounded-b-2xl flex flex-col relative px-3 pt-3  hover:scale-[103%] duration-200 shadow-lg">
                                <a target='_blank' href="https://www.dicoding.com/certificates/EYX403EYWPDL">
                                    <img className="aspect-[16/11.25]" src="/img/dicoding1.webp" alt="jawa" />
                                    <div className='px-1 py-4'>
                                        <div className='text-lg font-mono flex justify-between'>
                                            <em>Academy</em>
                                            <em>Mar 2024</em>
                                        </div>
                                        <h1 className='font-semibold text-xl'>Dicoding Academy - Web Developement Basic</h1>
                                    </div>
                                </a>
                            </div>
                            <div>
                            </div>
                        </div>
                    </motion.div>
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
                                    <ion-icon name="language-outline"></ion-icon>
                                    Language
                                </span>
                                <ul className='flex flex-wrap gap-4 text-5xl py-5'>
                                    <li className='htmls'>
                                        <Tooltip label="HTML5" hasArrow>
                                            <ion-icon name="logo-html5"></ion-icon>
                                        </Tooltip>
                                    </li>
                                    <li className='text-sky-500'>
                                        <Tooltip label="CSS3" hasArrow>
                                            <ion-icon name="logo-css3"></ion-icon>
                                        </Tooltip>
                                    </li>
                                    <li className='text-purple-600'>
                                        <Tooltip label="PHP" hasArrow>
                                            <i className='fa-brands fa-php'></i>
                                        </Tooltip>
                                    </li>
                                    <li className='text-yellow-400 '>
                                        <Tooltip hasArrow label="Javascript">
                                            <i className="fa-brands fa-js"></i>
                                        </Tooltip>
                                    </li>
                                    <li className='text-yellow-500 '>
                                        <Tooltip label="Python" hasArrow>
                                            <span>
                                                <svg width="64" height="64" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                                                    <defs>
                                                        <linearGradient id="a" x1="0.13" x2="0.8" y1="0.12" y2="0.78">
                                                            <stop stop-color="#387EB8" />
                                                            <stop offset="1" stop-color="#366994" />
                                                        </linearGradient>
                                                        <linearGradient id="b" x1="0.19" x2="0.91" y1="0.2" y2="0.89">
                                                            <stop stop-color="#FFE052" />
                                                            <stop offset="1" stop-color="#FFC331" />
                                                        </linearGradient>
                                                    </defs>
                                                    <g class="layer">
                                                        <title>Layer 1</title>
                                                        <g id="svg_3">
                                                            <path d="m32.23,3c-14.95,0 -14.02,6.47 -14.02,6.47l0.02,6.71l14.25,0l0,2.02l-19.92,0s-9.56,-1.09 -9.56,14c0,15.06 8.35,14.53 8.35,14.53l4.97,0l0,-6.99s-0.26,-8.35 8.22,-8.35l14.14,0s7.95,0.13 7.95,-7.67l0,-12.91s1.2,-7.82 -14.4,-7.82zm-7.87,4.51c1.42,0 2.56,1.16 2.56,2.57s-1.14,2.56 -2.56,2.56a2.56,2.56 0 0 1 -2.57,-2.56c0,-1.42 1.16,-2.57 2.57,-2.57z" fill="url(#a)" id="svg_1" />
                                                            <path d="m32.65,61.54c14.93,0 14,-6.47 14,-6.47l-0.02,-6.71l-14.25,0l0,-2.02l19.92,0s9.56,1.1 9.56,-13.98c0,-15.08 -8.35,-14.55 -8.35,-14.55l-4.97,0l0,7.01s0.26,8.33 -8.22,8.33l-14.14,0s-7.95,-0.13 -7.95,7.69l0,12.91s-1.2,7.8 14.42,7.8zm7.85,-4.51a2.56,2.56 0 0 1 -2.57,-2.57c0,-1.42 1.16,-2.56 2.57,-2.56s2.57,1.14 2.57,2.56c0,1.43 -1.16,2.57 -2.57,2.57z" fill="url(#b)" id="svg_2" />
                                                        </g>
                                                    </g>
                                                </svg>

                                            </span>
                                        </Tooltip>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col pt-[2%]'>
                                <span className='border shadow-md rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
                                    <i className="fa-solid fa-icons"></i>
                                    Frontend
                                </span>
                                <ul className='flex flex-wrap gap-4 text-5xl py-5'>
                                    <li>
                                        <Tooltip label="React JS" hasArrow>
                                            <span>
                                                <SiReact className="text-sky-500"></SiReact>
                                            </span>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip label="TailwindCSS" hasArrow>
                                            <span>
                                                <SiTailwindcss className="text-sky-400"></SiTailwindcss>
                                            </span>
                                        </Tooltip>
                                    </li>
                                    <li className='text-purple-600'>
                                        <Tooltip label="Bootstrap" hasArrow>
                                            <i className="fa-brands fa-bootstrap"></i>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip label='Framer Motion' hasArrow>
                                            <span>
                                                <SiFramer className=""></SiFramer>
                                            </span>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip label='Chakra UI' hasArrow>
                                            <span>
                                                <SiChakraui className="text-green-300"></SiChakraui>
                                            </span>
                                        </Tooltip>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col pt-[2%]'>
                                <span className='border shadow-md rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
                                    <i className="fa-solid fa-helmet-safety"></i>
                                    Backend
                                </span>
                                <ul className='flex flex-wrap gap-4 text-5xl py-5 items-center'>
                                    <li>
                                        <Tooltip label='Laravel' hasArrow>
                                            <i className="fa-brands fa-laravel text-red-600"></i>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip label="MongoDB" hasArrow>
                                            <span>
                                                <SiMongodb className="text-green-600"></SiMongodb>
                                            </span>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip label="MySQL" hasArrow>
                                            <span>
                                                <SiMysql className="text-orange-400"></SiMysql>
                                            </span>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip label="Express JS" hasArrow>
                                            <span>
                                                <SiExpress className="text-black"></SiExpress>
                                            </span>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip label="Axios" hasArrow>
                                            <span>
                                                <SiAxios className="text-black"></SiAxios>
                                            </span>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip label="JWT" hasArrow>
                                            <span>
                                                <SiJsonwebtokens className="text-black"></SiJsonwebtokens>
                                            </span>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip label="Vite" hasArrow>
                                            <span>
                                                <svg width="50" height="50" viewBox="0 0 410 404" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z" fill="url(#paint0_linear)" />
                                                    <path d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z" fill="url(#paint1_linear)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#41D1FF" />
                                                            <stop offset="1" stop-color="#BD34FE" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#FFEA83" />
                                                            <stop offset="0.0833333" stop-color="#FFDD35" />
                                                            <stop offset="1" stop-color="#FFA800" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>

                                            </span>
                                        </Tooltip>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col pt-[2%]'>
                                <span className='border shadow-md rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
                                    <SiAndroid className="fa-solid fa-helmet-safety"></SiAndroid>
                                    Mobile
                                </span>
                                <ul className='flex flex-wrap gap-4  py-5 items-center'>
                                    <li>
                                        <Tooltip label="Android Studio" hasArrow>
                                            <span>
                                                <SiAndroidstudio className="text-5xl text-green-400"></SiAndroidstudio>                                            </span>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip label="Expo" hasArrow>
                                            <span>
                                                <SiExpo className="text-5xl text-slate-700"></SiExpo>
                                            </span>
                                        </Tooltip>
                                    </li>
                                    <li className="flex flex-col items-center justify-center">
                                        <Tooltip label="React Native" hasArrow>
                                            <span>
                                                <SiReact className="text-4xl text-sky-400"></SiReact>
                                                <span className="text-sm font-[jawa] font-bold text-sky-400">Native</span>
                                            </span>
                                        </Tooltip>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col pt-[2%]'>
                                <span className='border shadow-md rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
                                    <i className="fa-solid fa-plus"></i>
                                    Other
                                </span>
                                <ul className='flex flex-wrap gap-4 py-5 items-center'>
                                    <li>
                                        <Tooltip label='AWS' hasArrow>
                                            <span>
                                                <SiAmazonaws className="text-5xl  text-red-400"></SiAmazonaws>
                                            </span>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip label="Git">
                                            <span>
                                                <SiGit className="text-5xl text-red-600"></SiGit>
                                            </span>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip label="cPanel" hasArrow>
                                            <span>
                                                <SiCpanel className="text-6xl text-blue-600"></SiCpanel>
                                            </span>
                                        </Tooltip>
                                    </li>
                                    <li className=" bg-black rounded-full flex items-center">
                                        <Tooltip label="Vercel" hasArrow>
                                            <span>
                                                <SiVercel className="text-5xl text-white p-2"></SiVercel>
                                            </span>
                                        </Tooltip>
                                    </li>
                                    <li className="">
                                        <Tooltip label='Github Pages' hasArrow>
                                            <span>
                                                <SiGithubpages className="text-6xl text-black"></SiGithubpages>
                                            </span>
                                        </Tooltip>
                                    </li>
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
                <section id="project" className="px-[10%] flex flex-col">
                    <div className="w-full flex">
                        <div className="flex gap-3 z-[2]">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-briefcase-filled brief w-[4.5rem] text-teal-900 hover:text-teal-500 hover:scale-110 duration-300" width="4.5rem" height="4.5rem" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" strokeWidth="0" fill="currentColor" /></svg>
                            </span>
                            <div className="flex flex-col">
                                <div>
                                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-yellow-300 font-semibold text-5xl">Project</h1>
                                </div>
                                <div>
                                    <p className="text-xl text-black font-mono">My Ongoing and Past Project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-[2%]">
                            <div className="w-full h-auto overflow-hidden group cursor-pointer border rounded-xl flex flex-col relative hover:scale-[103%] duration-200 shadow-lg pb-10">
                                <a target='_blank' href="https://flixflare.vercel.app">
                                    <div className="rounded-b-xl duration-200">
                                        <img className="w-full h-full aspect-[16/11.25]" src="./img/flix.webp" alt="jawa" />
                                    </div>
                                    <div className='px-7 py-4'>
                                        <div className="">
                                            <div className='text-lg font-mono flex justify-between'>
                                                <em>Work in Progress</em>
                                                <em>Jan 2024</em>
                                            </div>
                                            <div className="flex flex-col gap-3 pb-3">
                                                <h1 className='font-semibold text-xl'>FlixFlare (Movie App)</h1>
                                                <p className="text-gray-500">I tried to create a movie website to only stream the movie for free but, it look like, it still have a lot things to work on. Like fetching an
                                                    API and make it more responsive and beautiful. Also I don't have a lot of time to work on this website, so if I have  a lot of free time I will finish this project. Stay tuned. </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-end gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-react w-[35px] h-[35px] text-blue-400" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>
                                            <i><svg className='w-[35px] h-[35px] fill-blue-400' height="24" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" /></svg></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="w-full h-auto overflow-hidden group cursor-pointer border rounded-xl flex flex-col relative hover:scale-[103%] duration-200 shadow-lg pb-10">
                                <a target='_blank' href="https://legoin.org">
                                    <div className="rounded-b-xl duration-200">
                                        <img className="w-full h-full aspect-[16/11.25]" src="./img/port.webp" alt="jawa" />
                                    </div>
                                    <div className='px-7 py-4'>
                                        <div className="pb-20">
                                            <div className='text-lg font-mono flex justify-between'>
                                                <em>Ongoing</em>
                                                <em>Jan 2024</em>
                                            </div>
                                            <div className="flex flex-col gap-3 pb-3">
                                                <h1 className='font-semibold text-xl'>Personal Website</h1>
                                                <p className="text-gray-500">I create portfolio website projects with several features such as contacts, skills, and projects</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-end gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-react w-[35px] h-[35px] text-blue-400" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>
                                            <i><svg className='w-[35px] h-[35px] fill-blue-400' height="24" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" /></svg></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="w-full h-auto overflow-hidden group cursor-pointer border rounded-xl flex flex-col relative hover:scale-[103%] duration-200 shadow-lg pb-10">
                                <a href="#">
                                    <div className="rounded-b-xl duration-200">
                                        <img className="w-full h-full aspect-[16/11.25]" src="./img/blog.webp" alt="jawa" />
                                    </div>
                                    <div className='px-7 py-4'>
                                        <div className="pb-20">
                                            <div className='text-lg font-mono flex justify-between'>
                                                <em>Semi-finish</em>
                                                <em>Mar 2024</em>
                                            </div>
                                            <div className="flex flex-col gap-3 pb-3">
                                                <h1 className='font-semibold text-xl'>Blog Application</h1>
                                                <p className="text-gray-500">I've developed the backend using Express.js for my blog application built with React Native. It includes several features such as creating articles and user account registration to save and post articles.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-3">
                                            <span className="flex flex-col items-center">
                                                <SiReact className="text-xl text-sky-400"></SiReact>
                                                <span className="text-[10px] font-[jawa] font-bold text-sky-400">Native</span>
                                            </span>
                                            <SiTailwindcss className="text-3xl text-blue-400"></SiTailwindcss>
                                            <SiAndroidstudio className="text-3xl text-green-400"></SiAndroidstudio>
                                            <SiExpress className="text-3xl text-black"></SiExpress>
                                            <SiMongodb className="text-3xl text-green-600"></SiMongodb>
                                            <SiAxios className="text-3xl text-black"></SiAxios>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
        </div>



    );
}

export default Home;