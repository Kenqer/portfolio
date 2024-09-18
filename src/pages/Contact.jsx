import emailjs from '@emailjs/browser';
import React, { useRef } from "react";
import { motion } from "framer-motion"
import socials from '../common/socials';


const Contact = () => {
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
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2gc7i59', 'jawa_6969', form.current, {
                publicKey: 'ba5l1j--xi91KSV_D',
            })
            .then(
                () => {
                    window.location.replace(window.location.href)
                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
    };

    return (
        <main className='w-full h-screen'>
            <div className='w-full h-full flex justify-center items-center lg:flex-row md:flex-col-reverse flex-col-reverse overflow-hidden'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-row justify-center absolute md:absolute lg:static items-center z-[2] w-full h-full overflow-hidden'>
                    <div className='px-20 pt-10 pb-20 z-[2]'>
                        <div className='flex flex-col gap-4'>
                            <div className='text-center pb-6'>
                                <h3 className='text-3xl font-bold font-[jawa]'>CONTACT ME</h3>
                            </div>
                            <label className='flex flex-col'>
                                Name
                                <input type="text" name="from_name" required className='border-b border-teal-500 shadow-xl bg-transparent outline-none' />
                            </label>
                            <label className='flex flex-col'>
                                Email
                                <input type="email" name="from_email" required className='border-b border-teal-500 shadow-xl bg-transparent outline-none' />
                            </label>
                            <label className='flex flex-col'>
                                Phone Number
                                <input type="text" name="phone_no" required className='border-b border-teal-500 shadow-xl bg-transparent outline-none' />
                            </label>
                            <label className='flex flex-col'>
                                Subject
                                <input type="text" name="subject" required className='border-b border-teal-500 shadow-xl bg-transparent outline-none' />
                            </label>
                            <label className='flex flex-col'>
                                Message
                                <textarea name="message" rows='4' cols='30' placeholder='What can I possibly help you with?' className='border-b border-teal-500 shadow-xl bg-transparent outline-none' />
                            </label>
                            <div className='flex flex-row items-center gap-5'>
                                <button type="submit" value="Send" className='px-10 py-1 text-xl font-semibold font-[jawa] bg-teal-600 rounded-xl shadow-xl hover:scale-110 hover:bg-teal-200 duration-200' >Send</button>
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
                    </div>
                    {/* <div className='absolute z-[1] md:mt-[-40rem] lg:mt-[-40rem] mt-[-30rem] lg:ml-[-30rem] md:ml-[-30rem] ml-[-14rem] '>
                        <img src="./img/mail.webp" alt="" className='lg:w-40 lg:h-40 md:w-40 md:h-40 w-20 h-20 mail' />
                    </div> */}

                </form>
                <section className='w-full h-screen flex items-center justify-center '>
                    <div className="px-[10%] z-[1] blur-sm md:blur-sm lg:blur-none ">
                        <motion.div
                            initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
                            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1.2 }}
                            className="z-[1] w-[50vh] md:w-[80vh] lg:w-[80vh] md:mt-[-15vh] lg:mt-[-15vh]">
                            <lottie-player
                                autoplay
                                loop
                                mode="normal"
                                src="https://lottie.host/a365ffae-b83b-49cb-bea5-4209bbc79bbd/MKlmWoTF15.json"
                                className="w-20 h-20"
                            ></lottie-player>
                        </motion.div>
                    </div>
                </section>
            </div >
        </main >
    );
};
export default Contact;