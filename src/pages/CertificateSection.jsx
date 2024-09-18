import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import certificate from '../common/certificate'
import { TbCertificate } from "react-icons/tb";

function CertificateSection() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // Adds a smooth scrolling effect
    });
  })
  return (
    <section id="certificate" className="px-[5%] py-20 gap-8 flex flex-col items-center">
      <div className="flex items-center gap-3 z-[2]">
        <TbCertificate className="w-24 md:w-32 h-24 md:h-32 text-amber-600 hover:text-amber-900 hover:scale-110 duration-300 trophy" />
        <div className="flex flex-col">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 font-semibold text-6xl md:text-8xl">Certificate</h3>
          <p className="text-xl md:text-2xl text-black font-mono">My Awards and Achivements</p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 pt-[2%] ">
          {certificate.map((certificate, index) => (
            <div key={index} className="w-full h-auto relative overflow-hidden group cursor-pointer border hover:border-b-8 hover:border-b-teal-600 hover:rounded-b-2xl rounded-xl flex flex-col hover:scale-[103%] duration-200 shadow-lg">
              <a target='_blank' rel='noopener noreferrer' href={certificate.link}>
                <div className="">
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
    </section>
  )
}

export default CertificateSection
