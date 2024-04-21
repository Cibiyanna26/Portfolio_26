import React from "react";
import new1 from '../assets/new2.svg';
//countup

import CountUp from 'react-countup';

// intersection observer hook

import { useInView } from "react-intersection-observer";

import {motion} from 'framer-motion';
//variandt

import {fadeIn} from '../variants'


const About = ()=>{
    const {ref,inView} = useInView({
        threshold:0.5
    })
    return  <section className="section" id="about" ref={ref}>
        <div className="container mx-auto">
            <div className="flex flex-col  lg:flex-row lg:items-center lg:gap-x-20  h-screen">
                <motion.div 
                            variants={fadeIn('right',0.8)} 
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once:true,amount:0.7}}
                            className="lg:flex-1   bg-contain bg-no-repeat 
                            mix-blend-lighten bg-top lg:h-[600px] elements">
                    <img src={new1} className="lg:block hidden"></img>
                </motion.div>
                <div 
                     
                    className="p-6 flex-1">
                   
                    <div className="">
                        <h1 className="text-3xl h2 font-bold text-accent">About</h1>
                        <p className="text-xl font-medium">With a solid track record of completing numerous projects and solving a substantial number of LeetCode challenges, my skills and knowledge continue to expand.</p>
                    </div>
                    
                    <div className="lg:py-12 p-10 leading-[2] text-left lg:px-10">
                        <div className="">
                            
                            <div className="font-primary text-sm tracking-[2px]">
                                 Projects on Web Development
                            </div>
                            <div className="font-tertiary text-[40px] text-gradient mb-2">
                               {inView?<CountUp start={0} end={5} duration={2} /> 
                               :null} 
                            </div>
                        </div>
                        <div>
                            
                            <div className="font-primary text-sm tracking-[2px]">
                                 Projects on Design
                            </div>
                            <div className="font-tertiary text-[40px] text-gradient mb-2">
                               {inView?<CountUp start={0} end={1} duration={3} /> 
                               :null} 
                            </div>
                        </div>
                        <div>
                            
                            <div className="font-primary text-sm tracking-[2px]">
                                 Leetcode Count
                            </div>
                            <div className="font-tertiary text-[40px] text-gradient mb-2">
                               {inView?<CountUp start={0} end={356} duration={3} /> 
                               :null} 
                            </div>
                        </div>
                        <div>
                            
                            <div className="font-primary text-sm tracking-[2px]">
                                 Leetcode Max Contest Rating
                            </div>
                            <div className="font-tertiary text-[40px] text-gradient mb-2">
                               {inView?<CountUp start={0} end={1440} duration={1} /> 
                               :null} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
}

export default About;