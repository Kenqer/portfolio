import img from './img/seameo.jpg';
import img2 from './img/c2.png';
import img3 from './img/c3.png';
import img4 from './img/c4.png';

console.log(img);

const Home = () => {
    return ( 
        <div>
            <header className="home">
            <div className="w-full h-full flex flex-col gap-2 justify-center pt-[25vh] px-[10%] z-[1] text-5xl md:text-7xl ">
                <h1 className="font-bold font-serif">Hello,</h1>
                <h2 className="font-serif">I am Javier</h2>
                <h2 className="font-serif">Kennedi...</h2>
                <div className="text-xl md:text-2xl flex flex-col ">
                    <p className="font-mono">My goal is to help you produce websites that</p>
                    <p className="font-mono">responsive and uphold a high standard of quality.</p>
                </div>
                <div className="flex text-2xl md:text-4xl gap-4">
                    <a className="hover:opacity-50 hover:scale-110 duration-300" href="https://www.instagram.com/ken.qer/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a className="hover:opacity-50 hover:scale-110 duration-300" href="https://github.com/Kenqer" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
                    <a className="hover:opacity-50 hover:scale-110 duration-300" href="https://www.youtube.com/channel/UCXG6GuBh1oHQaYM6TQ7-NRw" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
                    <a className="hover:opacity-50 hover:scale-110 duration-300" href="https://twitter.com/itisnotken" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                </div>
            </div>
            </header>
            <main className="my-[80vw] md:my-[20vw] flex flex-col gap-44">
            <section id="certificate" className="px-[10%] flex flex-col">
                <div className="w-full flex gap-3 ">
                    <span className="text-7xl text-amber-600 hover:text-amber-900 hover:scale-110 duration-300">
                        <ion-icon className="" name="trophy-outline"></ion-icon>
                    </span>
                    <div className="flex flex-col">
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 font-semibold text-5xl">Certificate</h1>
                    <p className="text-xl text-black font-mono">My Awards and Achivements</p>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-[2%]">
                        <div className="w-full h-auto border border-black rounded-xl flex flex-col relative px-3 pt-3 hover:opacity-70 hover:scale-[108%] duration-200">
                            <a target='_blank' href="https://officeseamolec-my.sharepoint.com/personal/seaqis_seameo_id/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fseaqis_seameo_id%2FDocuments%2FSEAQIS%20Cloud%2FFrom%20Internal%20Data%2FPer-year%20activities%2F2023%2F12%2E%20DECEMBER%2F07%2E%20Web%20Cloud%20Based&ga=1">
                            <img className="bg-cover" src={img} alt="jawa" />
                            <div className='px-1 py-4'>
                                <div className='text-lg font-mono flex justify-between'>
                                    <em>Academy</em>
                                    <em>Aug 2023</em>
                                </div>
                                <h1 className='font-semibold text-xl'>Seameo Qitep In Science - Web Cloud Engineering (1st Place)</h1>
                            </div>
                            </a>
                            </div>
                        <div className="w-full h-auto border border-black rounded-xl flex flex-col relative px-3 pt-3 hover:opacity-70 hover:scale-[108%] duration-200">
                            <a href="">
                            <img className="bg-cover" src={img2} alt="jawa" />
                            <div className='px-1 py-4'>
                                <div className='text-lg font-mono flex justify-between'>
                                    <em>Non-Academy</em>
                                    <em>Jan 2024</em>
                                </div>
                                <h1 className='font-semibold text-xl'>W3Docs - HTML5 Basic</h1>
                            </div>
                            </a>
                        </div>
                        <div className="w-full h-auto border border-black rounded-xl flex flex-col relative px-3 pt-3 hover:opacity-70 hover:scale-[108%] duration-200">
                            <a href="">
                            <img className="bg-cover" src={img4} alt="jawa" />
                            <div className='px-1 py-4'>
                                <div className='text-lg font-mono flex justify-between'>
                                    <em>Non-Academy</em>
                                    <em>Jan 2024</em>
                                </div>
                                <h1 className='font-semibold text-xl'>W3Docs - PHP Basic</h1>
                            </div>
                            </a> 
                        </div>
                        <div className="w-full h-auto border border-black rounded-xl flex flex-col relative px-3 pt-3 hover:opacity-70 hover:scale-[108%] duration-200">
                            <a href="">
                            <img className="bg-cover" src={img3} alt="jawa" />
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
                    <span className="text-7xl text-fuchsia-400 hover:text-fuchsia-900 hover:scale-110 duration-300">
                        <ion-icon className="" name="hardware-chip-outline"></ion-icon>
                    </span>
                    <div className="flex flex-col">
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-pink-900 font-semibold text-5xl">Skills</h1>
                    <p className="text-xl text-black font-mono">List</p>
                    </div>
                </div>
                <div className='flex flex-col pt-[2%]'>
                    <span className='border border-slate-400 rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
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
                    <span className='border border-slate-400 rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
                    <i className="fa-solid fa-icons"></i>
                        Frontend
                    </span>
                    <ul className='flex flex-wrap gap-3 text-5xl py-5'>
                        <li>
                        <i className="fa-brands fa-react text-sky-500"></i>
                        </li>
                        <li>
                        <i><svg className='w-[50px] h-[50px] fill-blue-400' height="24" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"/></svg></i>
                        </li>
                        <li className='text-purple-600'>
                        <i className="fa-brands fa-bootstrap"></i>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col pt-[2%]'>
                    <span className='border border-slate-400 rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
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
                    <span className='border border-slate-400 rounded-full w-fit min-w-[180px] flex items-center justify-center h-fit min-h-[50px] gap-2 font-mono text-xl'>
                    <i className="fa-solid fa-plus"></i>
                        Other
                    </span>
                    <ul className='flex flex-wrap gap-3 text-5xl py-5'>
                        <li>
                        <i className="fa-brands fa-aws text-red-400"></i>
                        </li>
                        <li>
                        <i class="fa-brands fa-git-alt text-red-600"></i>
                        </li>
                    </ul>
                </div>
            </section>
            </main>
        </div>
        


     );
}
 
export default Home;