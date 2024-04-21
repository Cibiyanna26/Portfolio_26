import React from "react";
//images
// import Image from '../assets/image1.png';
// import Image from '../assets/image1.png';
import Image from '../assets/new1.svg'

import {FaGithub, FaYoutube , FaDribbble, FaTwitter, FaLinkedin} from 'react-icons/fa';

import { TypeAnimation } from "react-type-animation";

//motion

import {motion} from 'framer-motion';

import {fadeIn} from '../variants';

const Banner = ()=>{
    return (
        <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
            <div className="container mx-auto">
                <div className="lg:flex gap-x-6 ">
                    {/* text */}
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h1 variants={fadeIn('up',0.4)} 
                                    initial="hidden"
                                    whileInView={'show'}
                                    viewport={{once:false,amount:0.7}}
                                     className="text-[55px] font-bold leading-[0.8] lg:text-[80px] my-4">Cibiyanna <span>P</span>
                        </motion.h1>
                        <motion.div 
                            variants={fadeIn('up',0.5)} 
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once:false,amount:0.7}}
                            className="mb-6 text-[36px] lg:text-[60px]
                                        font-secondary font-semibold uppercase leading-[1]">
                            <span className="mr-4 text-white">I am a </span>
                            <TypeAnimation sequence={[
                                'Developer',
                                2000,
                                'ML Enthusiast',
                                2000,
                            ]}
                            speed={50}
                            className="text-accent"
                            wrapper="span"
                            repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p 
                            variants={fadeIn('up',0.6)} 
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once:false,amount:0.7}}
                            className="mb-8 max-w-lg mx-auto lg:mx-1">
                            I'm a Full-Stack Developer and Founder of <a href="" target="_blank">Devoice</a> .
                        </motion.p>
                        <motion.div 
                            variants={fadeIn('up',0.8)} 
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once:false,amount:0.7}}
                            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                            <a href="mailto:pkcibiyanna@gmail.com"><button className="btn btn-sm" >Contact me</button></a>
                            
                            <span className="text-gradient btn-link">
                                My Portfolio
                            </span>
                        </motion.div>
                        {/*socials*/}
                        <motion.div 
                             variants={fadeIn('up',0.9)} 
                             initial="hidden"
                             whileInView={'show'}
                             viewport={{once:false,amount:0.7}}
                            className="flex text-[20px] gap-x-6 max-w-max mx-auto
                            lg:mx-0">
                            <a href="https://github.com/Cibiyanna26" target="_blank">
                                <FaGithub/>
                            </a>
                            <a href="https://www.linkedin.com/in/cibiyanna-p-449394259/" target="_blank">
                                <FaLinkedin/>
                            </a>
                            <a href="https://twitter.com/PCibiyanna" target="_blank">
                                <FaTwitter/>
                            </a>
                        </motion.div>
                    </div>
                    {/* image */}
                    <motion.div
                        variants={fadeIn('down',0.3)} 
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once:false,amount:0.7}} 
                        className="flex-1 hidden lg:flex justify-center items-center max-w-[380px] banner-element">
                        <img src={Image} alt='' className=" mix-blend-lighten "/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


export default Banner;