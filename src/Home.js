import { motion, useInView, useAnimation } from "framer-motion"
import Reveal from "./Reveal";
import RevealCard from "./RevealCard";

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
                <div className="w-full h-[78vh] md:h-full relative overflow-hidden md:static md:overflow-visible flex flex-col gap-2 justify-center pt-[25vh] px-[10%] z-[1] text-5xl md:text-7xl ">
                    <div className="absolute z-[1] ml-[-10vh] w-[100vh] md:w-[80vh] lg:w-[100vh] ">
                        <img src="./img/BG.webp" alt="" />
                    </div>
                    <div className="z-[2]">
                        <Reveal>
                            <h1 className="font-bold font-serif ">Hello,</h1>
                            <h2 className="font-serif ">I am Javier</h2>
                            <h2 className="font-serif ">Kennedi...</h2>
                            <div className="text-lg md:text-2xl flex flex-col ">
                                <p className="font-mono">My goal is to help you produce websites that</p>
                                <p className="font-mono">responsive and uphold a high standard of quality.</p>
                            </div>
                        </Reveal>
                        <div className="flex text-2xl md:text-4xl gap-4">
                            <motion.a
                                variants={iconList}
                                initial="hidd"
                                animate="visi"
                                transition={{
                                    delay: 0.2
                                }}
                            >
                                <div className="hover:scale-110 duration-300 hover:text-purple-800" href="https://www.instagram.com/ken.qer/" target="_blank">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </div>
                            </motion.a>
                            <motion.a
                                variants={iconList}
                                initial="hidd"
                                animate="visi"
                                transition={{
                                    delay: 0.4
                                }}
                            >
                                <div className="hover:scale-110 duration-300 hover:text-white" href="https://www.instagram.com/ken.qer/" target="_blank">
                                    <ion-icon name="logo-github"></ion-icon>
                                </div>
                            </motion.a>
                            <motion.a
                                variants={iconList}
                                initial="hidd"
                                animate="visi"
                                transition={{
                                    delay: 0.6
                                }}
                            >
                                <div className="hover:scale-110 duration-300 hover:text-red-500" href="https://www.instagram.com/ken.qer/" target="_blank">
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </div>
                            </motion.a>
                            <motion.a
                                variants={iconList}
                                initial="hidd"
                                animate="visi"
                                transition={{
                                    delay: 0.8
                                }}
                            >
                                <div className="hover:scale-110 duration-300 hover:text-blue-400" href="https://www.instagram.com/ken.qer/" target="_blank">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </div>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </header>
            <main className="my-[80vw] md:my-[20vw] flex flex-col gap-44">
                <section id="certificate" className="px-[10%] flex flex-col">
                    <Reveal>
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
                    </Reveal>
                    <RevealCard>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-[2%] ">
                                <div className="w-full h-auto group cursor-pointer border hover:border-b-8 hover:border-b-teal-600 hover:rounded-b-2xl rounded-xl flex flex-col relative px-3 pt-3 hover:scale-[103%] duration-200 shadow-lg">
                                    <a target='_blank' href="https://drive.google.com/drive/folders/1h7UUQpPJU86a8QRKQmEy3JAWzOaE3nHt?usp=drive_link">
                                        <div className="">
                                            <img className="aspect-[16/11.25] w-full h-fit" src="./img/seameo.webp" alt="jawa" />
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
                                            <img className="aspect-[16/11.25] w-full h-fit" src="img/c2.webp" alt="jawa" />
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
                                        <img className="aspect-[16/11.25] w-full h-fit" src="img/c4.webp" alt="jawa" />
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
                                        <img className="aspect-[16/11.25] w-full h-fit" src="/img/c3.webp" alt="jawa" />
                                        <div className='px-1 py-4'>
                                            <div className='text-lg font-mono flex justify-between'>
                                                <em>Non-Academy</em>
                                                <em>Jan 2024</em>
                                            </div>
                                            <h1 className='font-semibold text-xl'>W3Docs - CSS Basic</h1>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </RevealCard>
                </section>
                <Reveal>
                    <section id="skills" className="px-[10%] flex flex-col">
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
                            <ul className='flex flex-wrap gap-3 text-5xl py-5'>
                                <li className='htmls'>
                                    <ion-icon name="logo-html5"></ion-icon>
                                </li>
                                <li className='text-sky-500'>
                                    <ion-icon name="logo-css3"></ion-icon>
                                </li>
                                <li className='text-purple-600'>
                                    <i className='fa-brands fa-php'></i>
                                </li>
                                <li className='text-yellow-400 '>
                                    <i className="fa-brands fa-js"></i>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col pt-[2%]'>
                            <span className='border shadow-md rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
                                <i className="fa-solid fa-icons"></i>
                                Frontend
                            </span>
                            <ul className='flex flex-wrap gap-3 text-5xl py-5'>
                                <li>
                                    <i className="fa-brands fa-react text-sky-500"></i>
                                </li>
                                <li>
                                    <i><svg className='w-[50px] h-[50px] fill-blue-400' height="24" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" /></svg></i>
                                </li>
                                <li className='text-purple-600'>
                                    <i className="fa-brands fa-bootstrap"></i>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col pt-[2%]'>
                            <span className='border shadow-md rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
                                <i className="fa-solid fa-helmet-safety"></i>
                                Backend
                            </span>
                            <ul className='flex flex-wrap gap-3 text-5xl py-5'>
                                <li>
                                    <i className="fa-brands fa-laravel text-red-600"></i>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col pt-[2%]'>
                            <span className='border shadow-md rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
                                <i className="fa-solid fa-plus"></i>
                                Other
                            </span>
                            <ul className='flex flex-wrap gap-3 text-5xl py-5'>
                                <li>
                                    <i className="fa-brands fa-aws text-red-400"></i>
                                </li>
                                <li>
                                    <i className="fa-brands fa-git-alt text-red-600"></i>
                                </li>
                            </ul>
                        </div>
                    </section>
                </Reveal>
                <section id="project" className="px-[10%] flex flex-col">
                    <Reveal>
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
                    </Reveal>
                    <RevealCard>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-[2%]">
                                <div className="w-full h-auto overflow-hidden group cursor-pointer border rounded-xl flex flex-col relative hover:scale-[103%] duration-200 shadow-lg pb-10">
                                    <a target='_blank' href="https://flixflare.vercel.app">
                                        <div className="rounded-b-xl duration-200">
                                            <img className="w-full h-full" src="./img/flix.webp" alt="jawa" />
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
                                            <img className="w-full h-full" src="./img/port.webp" alt="jawa" />
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
                            </div>
                        </div>
                    </RevealCard>
                </section>
            </main>
        </div>



    );
}

export default Home;