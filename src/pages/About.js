import { motion, useInView, useAnimation, spring } from "framer-motion"

const About = () => {
    return (
        <section className="about">
            <header className="home">
                <div className="w-full h-full flex flex-col-reverse gap-2 justify-center pt-[25vh] px-[10%] z-[1] text-5xl md:text-7xl md:flex-row">
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className='relative md:w-[500px] flex justify-center '>
                            <img src="img/city.png" alt="car" />
                        </div>
                    </motion.div>

                    <div className='w-full md:w-1/2 flex flex-col gap-7 z-[2] '>
                        <div className="w-1/2 md:w-full ">
                            <div className="flex flex-col">
                                <h1 className="bg-clip-text text-transparent bg-teal-600 font-semibold text-5xl font-[jawa]">About Me</h1>
                            </div>
                        </div>
                        <div className="text-xl md:text-2xl">
                            <span className="font-semibold">Hello there,</span>
                            <p className="w-full font-serif">My name is Javier Kennedi, I live in Indonesia. I make a responsive and high-quality website. While my main focus is on the front end, I can manage basic backend tasks.
                                Currently in the process of learning JavaScript, my proficiency in JavaScript is at a basic level. I always want to learn and provide new different ways to illustrate a beautiful website.</p>
                        </div>
                        <div className="flex text-2xl md:text-4xl gap-4">
                            <a className="hover:text-purple-600 hover:scale-110 duration-300" href="https://www.instagram.com/ken.qer/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                            <a className="hover:text-gray-600 hover:scale-110 duration-300" href="https://github.com/Kenqer" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
                            <a className="hover:text-red-600 hover:scale-110 duration-300" href="https://www.youtube.com/channel/UCXG6GuBh1oHQaYM6TQ7-NRw" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
                            <a className="hover:text-blue-600 hover:scale-110 duration-300" href="https://twitter.com/itisnotken" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                        </div>
                    </div>




                </div>
            </header>
        </section>
    );
}

export default About;