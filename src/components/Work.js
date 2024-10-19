import React from "react";
import new3 from '../assets/portfolio-img2.png'
import { useInView } from "react-intersection-observer";
import Lic from '../assets/lic_project.png';
import Github from '../assets/github.png';
import facedet from '../assets/facedet.jpeg'
import Website from '../assets/website.png'
import skysense from '../assets/skysenseimage.jpg';
import Port from '../assets/portfolioimg.png'
import classroom from '../assets/classroom.png';
import nike from '../assets/nikedesign.png';
import figma from '../assets/figma.png';
import effitrack from '../assets/effitrac-image.png'
import aminity from '../assets/faith-store.png';
import leetcode_roaster from '../assets/leetcode-roaster.png';
import roaster_logo from '../assets/leetcode_roaster_logo.png';
import ror_landing from '../assets/ror-landing.png'


const Work = () => {

    const tech = ['Webdev', 'Django', 'ML','MERN'];

    return <section className="py-8 lg:py-14 " id="work">
        <div className="container mx-auto">
            <div>
                <div className="text-center">
                    <h1 className="py-2 text-2xl font-semibold font-primary mb-2">MY PROJECTS</h1>

                    <div className="container mx-auto flex lg:flex-row gap-y-10 gap-x-10   justify-evenly flex-wrap px-8 py-3">
                        {tech.map((tused, index) => {
                            return (
                                <div className="bg-blue-500 rounded-xl px-3 py-1 shadow-lg shadow-indigo-500/20">
                                    <h1 className="font-semibold tracking-[2px]">{tused}</h1>
                                </div>

                            )
                        })}
                    </div>



                </div>
            </div>
            <div className="p-3 flex flex-wrap lg:flex-row justify-evenly lg:gap-y-12 gap-y-10 gap-x-18">
                <div className="min-h-[350px] max-w-[340px] overflow-hidden  p-3 bg-cardbg rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3">
                    <div className=" rounded-xl overflow-hidden cursor-pointer border-zinc-950
                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30">
                        <img src={effitrack} className="w-[330px] h-[190px]"></img>
                    </div>
                    <div className="p-2">
                        <h1 className="font-bold text-xl ">Effitrack</h1>

                        <p className="font-semibold text-sm">A open-source software which helps students to monitor and track their personalized growth.</p>

                        <div className="flex bottom-2 fixed w-[310px]">
                            <div className="flex flex-1 gap-x-5 items-center max-w-full">
                                <div className="max-w-[30px]  overflow-hidden rounded-full
                                                    shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             ">
                                    <a href="https://effitrack.vercel.app/login"><img src={Website} className=""></img></a>
                                </div>


                            </div>
                            <div className="">
                                <button className="bg-cardcl py-1 px-2 rounded-xl  text-white
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             
                                                        ">
                                    WEBDEV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-h-[350px] max-w-[340px] overflow-hidden  p-3 bg-cardbg rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3">
                    <div className=" rounded-xl overflow-hidden cursor-pointer border-zinc-950
                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30">
                        <img src={roaster_logo} className="w-[330px] h-[190px]"></img>
                    </div>
                    <div className="p-2">
                        <h1 className="font-bold text-xl ">Leetcode Roaster</h1>

                        <p className="font-semibold text-sm">Leetcode Roaster is a fun web app that gives a humorous roast based on your Leetcode activity. </p>

                        <div className="flex bottom-2 fixed w-[310px]">
                            <div className="flex flex-1 gap-x-5 items-center max-w-full">
                                <div className="max-w-[30px]  overflow-hidden rounded-full
                                                    shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             ">
                                    <a href="https://leetcode-roaster.netlify.app/"><img src={Website} className=""></img></a>
                                </div>


                            </div>
                            <div className="">
                                <button className="bg-white py-1 px-2 rounded-xl  text-black
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             
                                                        border border-black font-medium">
                                    MERN
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-h-[350px] max-w-[340px] overflow-hidden  p-3 bg-cardbg rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3">
                    <div className=" rounded-xl overflow-hidden cursor-pointer border-zinc-950
                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30">
                        <img src={ror_landing} className="w-[330px] h-[190px]"></img>
                    </div>
                    <div className="p-2">
                        <h1 className="font-bold text-xl ">Reach Out Rural</h1>

                        <p className="font-semibold text-sm">The Telemedicine App Created for Rural People, let every one in the rural to have access to telemedicine.</p>

                        <div className="flex bottom-2 fixed w-[310px]">
                            <div className="flex flex-1 gap-x-5 items-center max-w-full">
                                {/* <div className="max-w-[30px]  overflow-hidden rounded-full
                                                    shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             ">
                                    <a href="https://leetcode-roaster.netlify.app/"><img src={Website} className=""></img></a>
                                </div> */}


                            </div>
                            <div className="flex space-x-2">
                                <button className="bg-blue-500 py-1 px-2 rounded-xl  text-white
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             
                                                         font-medium">
                                    Flutter
                                </button>
                                <button className="bg-django  py-1 px-2 rounded-xl  text-white
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             
                                                        ">
                                    Django
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-h-[350px] max-w-[340px] overflow-hidden  p-3 bg-cardbg rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3">
                    <div className=" rounded-xl overflow-hidden cursor-pointer border-zinc-950
                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30">
                        <img src={aminity} className="w-[330px] h-[190px]"></img>
                    </div>
                    <div className="p-2">
                        <h1 className="font-bold text-xl ">Faith Store</h1>

                        <p className="font-semibold text-sm">A aminity based software which enable users to buy foods from the store.</p>

                        <div className="flex bottom-2 fixed w-[310px]">
                            <div className="flex flex-1 gap-x-5 items-center max-w-full">
                                <div className="max-w-[30px]  overflow-hidden rounded-full
                                                    shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             ">
                                    <a href="https://webathon-xi.vercel.app/home"><img src={Github} className=""></img></a>
                                </div>


                            </div>
                            <div className="">
                                <button className="bg-cardcl py-1 px-2 rounded-xl  text-white
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             
                                                        ">
                                    WEBDEV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="min-h-[350px] w-[340px] overflow-hidden  p-3 bg-cardbg rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3">
                    <div className=" rounded-xl overflow-hidden cursor-pointer border-zinc-950
                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30">
                        <img src={Lic} className="w-[330px] h-[190px]"></img>
                    </div>
                    <div className="p-2">
                        <h1 className="font-bold text-xl ">Lic Project</h1>

                        <p className="font-semibold text-sm">Tried to form our own lic webpage</p>

                        <div className="flex bottom-2 fixed w-[310px]">
                            <div className="flex flex-1 gap-x-5 items-center max-w-full">
                                <div className="max-w-[30px] overflow-hidden rounded-full
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50 dark:hover:shadow-black/30">
                                    <a href="https://github.com/muruga21/lic_work" target="_blank"><img src={Github} className=""></img></a>
                                </div>
                                <div className="max-w-[30px]  overflow-hidden rounded-full
                                                    shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             ">
                                    <a href="https://muruga21.github.io/lic_work/"><img src={Website} className=""></img></a>
                                </div>


                            </div>
                            <div className="">
                                <button className="bg-cardcl py-1 px-2 rounded-xl  text-white
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             
                                                        ">
                                    WEBDEV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="min-h-[350px] w-[340px] overflow-hidden  p-3 bg-cardbg rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3">
                    <div className="rounded-xl overflow-hidden cursor-pointer border-zinc-950
                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30">
                        <img src={facedet} className="w-[330px] h-[190px]"></img>
                    </div>
                    <div className="p-2">
                        <h1 className="font-bold text-xl ">Criminal Face Detection</h1>

                        <p className="font-semibold text-sm">Criminal face Detection using deep learning</p>

                        <div className="flex bottom-2 fixed w-[310px]">
                            <div className="flex flex-1 gap-x-5 items-center max-w-full">
                                <div className="max-w-[30px] overflow-hidden rounded-full
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50 dark:hover:shadow-black/30">
                                    <a href="https://github.com/GriffinAnnshual/Criminal-Face-Identification-System" target="_blank"><img src={Github} className=""></img></a>
                                </div>



                            </div>
                            <div className="">
                                <button className="bg-ml py-1 px-2 rounded-xl  text-white
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             
                                                        w-[50px]">
                                    ML
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="min-h-[350px] w-[340px] overflow-hidden  p-3 bg-cardbg rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3">
                    <div className=" rounded-xl overflow-hidden cursor-pointer border-zinc-950
                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30">
                        <img src={skysense} className="w-[330px] h-[190px]"></img>
                    </div>
                    <div className="p-2">
                        <h1 className="font-bold text-xl ">Sky Sense</h1>

                        <p className="font-semibold text-sm">sky sense the project mainly focused on early weather alert.</p>

                        <div className="flex bottom-2 fixed w-[310px]">
                            <div className="flex flex-1 gap-x-5 items-center max-w-full">
                                <div className="max-w-[30px] overflow-hidden rounded-full
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50 dark:hover:shadow-black/30">
                                    <a href="" target="_blank" className="cursor-default"><img src={Github} className=""></img></a>
                                </div>



                            </div>
                            <div className="">
                                <button className="bg-cardcl py-1 px-2 rounded-xl  text-white
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             
                                                        ">
                                    WEBDEV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-h-[350px] w-[340px] overflow-hidden  p-3 bg-cardbg rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300 
                                    shadow-none flex flex-col gap-y-3">
                    <div className="  rounded-xl overflow-hidden cursor-pointer border-zinc-950
                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30">
                        <img src={classroom} className="w-[330px] h-[190px]"></img>
                    </div>
                    <div className="p-2">
                        <h1 className="font-bold text-xl ">Workspace</h1>

                        <p className="font-semibold text-sm">Workspace - A minimal version of Google Classroom </p>

                        <div className="flex bottom-2 fixed w-[310px]">
                            <div className="flex flex-1 gap-x-5 items-center max-w-full">
                                <div className="w-[30px] overflow-hidden rounded-full
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50 dark:hover:shadow-black/30">
                                    <a href="https://github.com/Cibiyanna26/Workspace" target="_blank"><img src={Github} className=""></img></a>
                                </div>



                            </div>
                            <div className="">
                                <button className="bg-django  py-1 px-2 rounded-xl  text-white
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             
                                                        ">
                                    Django
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Work;