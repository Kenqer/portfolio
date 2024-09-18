import { motion} from "framer-motion"
import socials from "../common/socials";


const About = () => {
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
        <section className="about">
                <div className="w-full h-screen flex flex-col-reverse gap-2 justify-center items-center z-[1] text-5xl md:text-7xl md:flex-row px-20 md:px-0">
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className='relative md:w-[500px] flex justify-center '>
                            <img className="aspect-auto" src="img/city.png" alt="City" />
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
                            <p className="w-full font-serif">My name is Javier Kennedi, and I reside in Indonesia. I specialize in creating responsive, high-quality websites with a keen focus on front-end development. With expertise in React Native JavaScript and React.js, I excel in crafting dynamic and visually appealing web applications. While my primary focus lies in front-end development, I am also proficient in handling basic backend tasks. Constantly striving to innovate, I am dedicated to exploring new techniques to enhance the aesthetics and functionality of websites.</p>
                        </div>
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




                </div>
        </section>
    );
}

export default About;