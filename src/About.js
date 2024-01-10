import cat from './img/cat.jpg';

const About = () => {
    return ( 
        <section className="about">
            <header className="home">
            <div className="w-full h-full flex flex-col-reverse gap-2 justify-center pt-[25vh] px-[10%] z-[1] text-5xl md:text-7xl md:flex-row">
                <div className='relative w-full md:w-[500px] h-full flex justify-center '>
                    <img src={cat} alt="car" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-7'>
                <div className="w-1/2 md:w-full flex gap-3">
                    <span className="w-fit text-7xl text-yellow-600 hover:text-sky-900 hover:scale-110 duration-300">
                        <i class="fa-solid fa-ghost"></i>
                    </span>
                    <div className="flex flex-col">
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-slate-900 font-semibold text-5xl">About Me</h1>
                    </div>
                </div>
                <div className="text-xl md:text-2xl">
                    <span className="font-semibold">Hello there,</span>
                    <p className="w-full font-serif">My name is Javier Kennedi, I live in Indonesia. I make a responsive and high quality websiste. While my main focus is on the frontend, I can manage basic backend tasks.
                         Currently in the process of learning JavaScript, my proficiency in JavaScript is barely at a basic level.
                         I'm always want to learn and contribute new ideas.</p>
                </div>
                <div className="flex text-2xl md:text-4xl gap-4">
                    <a className="hover:opacity-50 hover:scale-110 duration-300" href="https://www.instagram.com/ken.qer/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a className="hover:opacity-50 hover:scale-110 duration-300" href="https://github.com/Kenqer" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
                    <a className="hover:opacity-50 hover:scale-110 duration-300" href="https://www.youtube.com/channel/UCXG6GuBh1oHQaYM6TQ7-NRw" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
                    <a className="hover:opacity-50 hover:scale-110 duration-300" href="https://twitter.com/itisnotken" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                </div>
                </div>
                 
                
                
                
            </div>
            </header>
        </section>
     );
}
 
export default About;