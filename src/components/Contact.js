import React from "react";
import { ReactSVG } from 'react-svg'
import Social from '../assets/socailmedia.svg';
import Insta from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';
import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';
import { Link } from "react-scroll";



import {motion} from 'framer-motion';

import { fadeIn } from "../variants";

const Contact = ()=>{
    return  <section 
        className="h-screen py-24"
        id="contact"
    >
        <div className="container mx-auto  mix-blend-lighten"> 
        <div className="flex lg:flex-row flex-col gap-x-14 pb-10">
                <motion.div 
                    variants={fadeIn('right',0.8)} 
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{once:false,amount:0.8}}

                    className="flex justify-center items-center elements">
                    <img src={Social} className=" lg:w-[500px] w-[250px]"></img>
                </motion.div>   
                <div className="flex flex-col gap-y-4 justify-center items-center">   
                    <motion.div
                        variants={fadeIn('down',0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once:false,amount:0.4}} 
                        className="text-center py-5 px-0">
                            <h1 className="lg:text-4xl text-2xl font-bold tracking-wide  font-primary">Connect With Me</h1>
                    </motion.div> 
                    <div className="flex justify-center items-center">
                            <div className="flex flex-col gap-y-8  items-start mb-8 ml-8 justify-center lg:w-[400px] w-[300px]">

                                <motion.div 
                                    variants={fadeIn('left',0.2)}
                                    initial="hidden"
                                    whileInView={'show'}
                                    viewport={{once:false,amount:1}}
                                    className="flex flex-row gap-x-6 items-center cursor-pointer">
                                         <a href="https://www.linkedin.com/in/cibiyanna-p-449394259/" target="_blank">
                                    <img src={Linkedin} className="max-w-[40px] cursor-pointer"></img></a>
                                    <a href="https://www.linkedin.com/in/cibiyanna-p-449394259/" target="_blank"><h1 className="font-semibold text-xl">Cibiyanna P</h1></a>
                                </motion.div>
                                <motion.div
                                    variants={fadeIn('left',0.4)}
                                    initial="hidden"
                                    whileInView={'show'}
                                    viewport={{once:false,amount:1}} 
                                    className="flex flex-row gap-x-6 items-center cursor-pointer">
                                        <a href="https://github.com/Cibiyanna26" target="_blank">
                                    <img src={Github} className="max-w-[40px] "></img></a>
                                    <a href="https://github.com/Cibiyanna26" target="_blank"><h1 className="font-semibold text-xl">Cibiyanna26</h1></a>
                                </motion.div>
                                <motion.div 
                                    variants={fadeIn('left',0.6)}
                                    initial="hidden"
                                    whileInView={'show'}
                                    viewport={{once:false,amount:1}}
                                    className="flex flex-row gap-x-6 items-center cursor-pointer">
                                         <a href="https://twitter.com/PCibiyanna" target="_blank">
                                                    <img src={Twitter} className="max-w-[40px] " ></img></a> 
                                    <a href="https://twitter.com/PCibiyanna" target="_blank"> <h1 className="font-semibold text-xl">PCibiyanna</h1></a> 
                                </motion.div>
                            </div>
                    </div>
                    
                        
                    
                </div>
        </div>

        </div>

    </section>
}

export default Contact;