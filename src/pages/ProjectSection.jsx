import React, { useEffect } from 'react'
import { motion } from "framer-motion"

import projects from '../common/project';

function ProjectSection() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant', // Adds a smooth scrolling effect
        });
    })
    return (
        <section id="project" className="px-[5%] py-20 flex flex-col gap-6">
            <div className="w-full flex justify-center items-center gap-3 z-[2]">
                <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="brief w-24 md:w-32 h-24 md:h-32 text-teal-900 hover:text-teal-500 hover:scale-110 duration-300" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" strokeWidth="0" fill="currentColor" /></svg>
                </span>
                <div className="flex flex-col">
                        <h3 className="bg-clip-text text-transparent h-[4.4rem] md:h-[5.2rem] bg-gradient-to-r from-teal-500 to-yellow-300 font-semibold text-6xl md:text-7xl z-10 relative">Project</h3>
                        <p className="text-xl md:text-2xl text-black font-mono">My Ongoing and Past Project</p>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 pt-[2%]">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className="w-full h-auto overflow-hidden group cursor-pointer border rounded-xl flex flex-col relative hover:scale-[103%] duration-200 shadow-lg pb-4 md:pb-0"
                        >
                            <a target="_blank" rel='noopener noreferrer' href={project.link}>
                                <figure>
                                    <div className="duration-200 w-full h-auto relative overflow-hidden">
                                        <img className="w-full h-full aspect-[16/11.25] group-hover:scale-125 duration-300" src={`./img/project/${project.image}`} alt={project.title} />
                                    </div>
                                    <figcaption className="flex flex-col gap-2 px-7 py-4">
                                        <div className="aspect-[12/4]">
                                            <div className="text-lg font-mono flex justify-between">
                                                <em>{project.status}</em>
                                                <em>{project.date}</em>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <h3 className="font-semibold text-xl">{project.title}</h3>
                                                <p className="text-gray-500 line-clamp-3">{project.description}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3">
                                            {project.program.map(({ icon: Icon, colorClass }, i) => (
                                                <Icon key={i} className={`text-4xl ${colorClass}`} />
                                            ))}
                                        </div>
                                    </figcaption>
                                </figure>
                            </a>
                        </article>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default ProjectSection
