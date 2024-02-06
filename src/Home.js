

const Home = () => {
    return (
        <div>
            <header className="home">
                <div className="w-full h-[78vh] md:h-full relative overflow-hidden md:static md:overflow-visible flex flex-col gap-2 justify-center pt-[25vh] px-[10%] z-[1] text-5xl md:text-7xl ">
                    <div className="absolute z-[1] ml-[-10vh] w-[100vh] md:w-[80vh] lg:w-[100vh] ">
                        <img src="./img/BG.png" alt="" />
                    </div>
                    <div className="z-[2]">
                        <h1 className="font-bold font-serif">Hello,</h1>
                        <h2 className="font-serif">I am Javier</h2>
                        <h2 className="font-serif">Kennedi...</h2>
                        <div className="text-xl md:text-2xl flex flex-col ">
                            <p className="font-mono">My goal is to help you produce websites that</p>
                            <p className="font-mono">responsive and uphold a high standard of quality.</p>
                        </div>
                        <div className="flex text-2xl md:text-4xl gap-4">
                            <a className="hover:scale-110 duration-300 hover:text-purple-800" href="https://www.instagram.com/ken.qer/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                            <a className="hover:scale-110 duration-300 hover:text-gray-800" href="https://github.com/Kenqer" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
                            <a className="hover:scale-110 duration-300 hover:text-red-600" href="https://www.youtube.com/channel/UCXG6GuBh1oHQaYM6TQ7-NRw" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
                            <a className="hover:scale-110 duration-300 hover:text-blue-400" href="https://twitter.com/itisnotken" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                        </div>
                    </div>
                </div>
            </header>
            <main className="my-[80vw] md:my-[20vw] flex flex-col gap-44">
                <section id="certificate" className="px-[10%] flex flex-col">
                    <div className="w-full flex">
                        <div className="flex gap-3 z-[2]">
                            <span className="text-7xl text-amber-600 hover:text-amber-900 hover:scale-110 duration-300 trophy">
                                <i className="fa-solid fa-trophy"></i>
                            </span>
                            <div className="flex flex-col">
                                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 font-semibold text-5xl">Certificate</h1>
                                <p className="text-xl text-black font-mono">My Awards and Achivements</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-[2%] ">
                            <div className="w-full h-auto group cursor-pointer border hover:border-b-8 hover:border-b-teal-600 hover:rounded-b-2xl rounded-xl flex flex-col relative px-3 pt-3 hover:scale-[103%] duration-200 shadow-lg">
                                <a target='_blank' href="https://drive.google.com/drive/folders/1h7UUQpPJU86a8QRKQmEy3JAWzOaE3nHt?usp=drive_link">
                                    <div className="">
                                        <img className="aspect-[16/11.25]" src="./img/seameo.png" alt="jawa" />
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
                                        <img className="aspect-[16/11.25]" src="img/c2.png" alt="jawa" />
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
                                    <img className="aspect-[16/11.25]" src="img/c4.png" alt="jawa" />
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
                                    <img className="aspect-[16/11.25]" src="/img/c3.png" alt="jawa" />
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
                </section>
                <section id="skills" className="px-[10%] flex flex-col">
                    <div className="w-full flex gap-3 ">
                        <span className="chip text-7xl text-fuchsia-400 hover:text-fuchsia-900 hover:scale-110 duration-300">
                            <i class="fa-solid fa-gear"></i>
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
                <section id="project" className="px-[10%] flex flex-col">
                    <div className="w-full flex">
                        <div className="flex gap-3 z-[2]">
                            <span className="brief text-7xl text-teal-900 hover:text-teal-500 hover:scale-110 duration-300">
                                <i className="fa-solid fa-briefcase"></i>
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
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-[2%]">
                            <div className="w-full h-auto overflow-hidden group cursor-pointer border rounded-xl flex flex-col relative hover:scale-[103%] duration-200 shadow-lg pb-10">
                                <a target='_blank' href="https://flixflare.vercel.app">
                                    <div className="rounded-b-xl duration-200">
                                        <img src="./img/flix.png" alt="jawa" />
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
                                            <i className="fa-brands fa-react text-3xl text-blue-400"></i>
                                            <i><svg className='w-[35px] h-[35px] fill-blue-400' height="24" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" /></svg></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="w-full h-auto overflow-hidden group cursor-pointer border rounded-xl flex flex-col relative hover:scale-[103%] duration-200 shadow-lg pb-10">
                                <a target='_blank' href="https://legoin.org">
                                    <div className="rounded-b-xl duration-200">
                                        <img src="./img/port.png" alt="jawa" />
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
                                            <i className="fa-brands fa-react text-3xl text-blue-400"></i>
                                            <i><svg className='w-[35px] h-[35px] fill-blue-400' height="24" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" /></svg></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>



    );
}

export default Home;