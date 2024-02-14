import emailjs from '@emailjs/browser';
import React, { useRef } from "react";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2gc7i59', 'jawa_6969', form.current, {
                publicKey: 'ba5l1j--xi91KSV_D',
            })
            .then(
                () => {
                    alert('SUCCESS!');
                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
    };

    return (
        <main className='w-full h-screen'>
            <div className='w-full h-full flex justify-evenly'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-row justify-center items-center z-[2] h-full'>
                    <div className='flex flex-col justify-center gap-4 bg-teal-500 px-20 pt-10 pb-20 shadow-xl w-full h-full'>
                        <div className='flex flex-col gap-4'>
                            <div className='text-center pb-6'>
                                <h3 className='text-3xl font-bold font-[jawa]'>CONTACT ME</h3>
                            </div>
                            <div className='flex flex-col'>
                                <label>Name</label>
                                <input type="text" name="from_name" required className='border-b shadow-xl bg-transparent outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <label>Email</label>
                                <input type="email" name="from_email" required className='border-b shadow-xl bg-transparent outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <label>Phone Number</label>
                                <input type="text" name="phone_no" required className='border-b shadow-xl bg-transparent outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <label>Subject</label>
                                <input type="text" name="subject" required className='border-b shadow-xl bg-transparent outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <label>Message</label>
                                <textarea name="message" rows='4' cols='30' className='border-b shadow-xl bg-transparent outline-none' />
                            </div>
                            <div>
                                <button type="submit" value="Send" className='px-10 py-1 text-xl font-semibold font-[jawa] bg-white rounded-xl shadow-xl hover:scale-110 hover:bg-teal-200 mt-10 duration-200' >Send</button>
                            </div>
                        </div>
                    </div>
                </form>
                <section className='mt-40'>
                    <h2 className='text-8xl font-serif'>Let's work together...</h2>
                    <div className='absolute z-[1]'>
                        <img src="./img/mail.webp" alt="" className='w-48 h-48 mail' />
                    </div>
                </section>
            </div>
        </main>
    );
};
export default Contact;