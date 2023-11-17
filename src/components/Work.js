import React from "react";
import new3 from '../assets/portfolio-img2.png'
import { useInView } from "react-intersection-observer";
import Lic from '../assets/lic_project.png';
import Social from '../assets/social.png';
import laptop from '../assets/laptop.png'
import Github from '../assets/github.png';
import facedet from '../assets/facedet.jpeg'
import Website from '../assets/website.png'
import skysense from '../assets/skysenseimage.jpg';
import Port from '../assets/portfolioimg.png'
import classroom from '../assets/classroom.png';
import nike from '../assets/nikedesign.png';
import figma from '../assets/figma.png';

const Work = ()=>{

    const tech = ['webdev','django','ml','figma'];
    
    return  <section className="py-8 lg:py-14 " id="work">
            <div className="container mx-auto">
                <div>
                    <div className="text-center">
                        <h1 className="py-2 text-2xl font-semibold font-primary mb-2">MY PROJECTS</h1>
                        
                            <div className="container mx-auto flex lg:flex-row gap-y-10 gap-x-10   justify-evenly flex-wrap px-8 py-3">
                                {tech.map((tused,index)=>{
                                    return(
                                        <div className="bg-blue-500 rounded-xl px-3 py-1 shadow-lg shadow-indigo-500/20">
                                             <h1 className="font-semibold tracking-[2px]">{tused}</h1>
                                        </div>
                                       
                                    )
                                })}
                            </div>
                            
                           
                       
                    </div>
                </div>
                <div className="p-3 flex flex-wrap lg:flex-row justify-evenly lg:gap-y-12 gap-y-10 gap-x-18">
                    
                          
                    <div className="h-[350px] w-[340px] overflow-hidden  p-3 bg-cardbg rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3">
                        <div  className=" rounded-xl overflow-hidden cursor-pointer border-zinc-950
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
                    
                    <div className="h-[350px] w-[340px] overflow-hidden  p-3 bg-cardbg rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3">
                        <div  className="rounded-xl overflow-hidden cursor-pointer border-zinc-950
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
                    <div className="h-[350px] w-[340px] overflow-hidden  p-3 bg-cardbg rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3">
                        <div  className=" rounded-xl overflow-hidden cursor-pointer border-zinc-950
                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30">
                            <img src={Port} className="w-[330px] h-[190px]"></img>
                        </div>
                        <div className="p-2">
                            <h1 className="font-bold text-xl ">Portfolio</h1>
                            
                            <p className="font-semibold text-sm">My recent portfolio built with react</p>
    
                            <div className="flex bottom-2 fixed w-[310px]">
                                <div className="flex flex-1 gap-x-5 items-center max-w-full">
                                    <div className="max-w-[30px] overflow-hidden rounded-full
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50 dark:hover:shadow-black/30">
                                        <a href="https://github.com/Cibiyanna26/Portfolio" target="_blank"><img src={Github} className=""></img></a> 
                                    </div>
                                    <div className="max-w-[30px]  overflow-hidden rounded-full
                                                    shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             ">
                                        <a href="" className="cursor-default"><img src={Website} className=""></img></a> 
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
                    <div className="h-[350px] w-[340px] overflow-hidden  p-3 bg-cardbg rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300
                                    shadow-none flex flex-col gap-y-3">
                        <div  className=" rounded-xl overflow-hidden cursor-pointer border-zinc-950
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
                    <div className="h-[350px] w-[340px] overflow-hidden  p-3 bg-cardbg rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300 
                                    shadow-none flex flex-col gap-y-3">
                        <div  className="  rounded-xl overflow-hidden cursor-pointer border-zinc-950
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
                    <div className="h-[350px] w-[340px] overflow-hidden  p-3 bg-cardbg rounded-xl text-black
                                    font-secondary  transform-gpu transistion duration-300 
                                    shadow-none flex flex-col gap-y-3">
                        <div  className="  rounded-xl  cursor-pointer border-zinc-950 overflow-hidden
                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30">
                            <img src={nike} className="object-fill w-[330px] h-[190px]"></img>
                        </div>
                        <div className="p-2">
                            <h1 className="font-bold text-xl ">Nike</h1>
                            
                            <p className="font-semibold text-sm">A simple UI design of Nike</p>
    
                            <div className="flex bottom-2 fixed w-[310px]">
                                <div className="flex flex-1 gap-x-5 items-center max-w-full">
                                    <div className="w-[40px] overflow-hidden rounded-full p-2 bg-gray-50
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50 dark:hover:shadow-black/30">
                                        <a href="
                                            https://www.figma.com/proto/2peRsOuLHrZEG1d3XrOxTS/Untitled?page-id=0%3A1&type=design&node-id=8-2&viewport=85%2C1648%2C0.68&t=lynmY7NDykIL8tlA-1&scaling=scale-down&mode=design
                                            " target="_blank"><img src={figma} className=""></img></a> 
                                    </div>
                                   
                                    
                                    
                                </div>
                                <div className="">
                                    <button className="bg-rose-500  py-1 px-2 rounded-xl  text-white
                                                        shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30             
                                                        ">
                                                        Figma
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