import React from "react";
import {BsArrowUpRight} from 'react-icons/bs';

import new3 from '../assets/new3.svg'

const Service = ()=>{
    const services = [
        {
            name:'UI/UX Design',
            description:'It is a super type of css used ever I had seen',
            link: 'Learn more',
        },
        {
            name:'Development',
            description:'It gives us fun while making this and also good vibe',
            link: 'Learn more',
        },
        {
            name:'Digital Marketing',
            description:'It gives us fun while making this and also good vibe',
            link: 'Learn more',
        },
        {
            name:'Product Branding',
            description:'Ti gives a lot of problem to solve',
            link: 'Learn more',
        },
    ]
    return  <section 
        className="section"
        id="services"
    >
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-x-10 ">
                {/* text & image*/}
                <div className="lg:bg-[url('../assets/new3.svg)]  bg-no-repeat
                mix-blend-lighten lg:bg-bottom mb-12 lg:mb-0 bg-contain  service-bg-css">
                    <h2 className="h2 text-accent mb-6">What I Do</h2>
                    <h3 className="h3 max-w-[455px] mb-16">
                        I'm a Freelance Front-end Developer with over 5 years of experience.
                    </h3>
                    <button className="btn btn-sm ">See my work</button>
                </div>
                <div className="flex-1">
                    {/* service list*/}
                    <div>
                        {services.map((service,index)=>{
                            const {name, description, link} = service;
                            return (
                                <div key={index} className="border-b border-white/20 h-[146px] mb-[38px] flex gap-x-3">
                                    <div className="max-w-[476px] flex-1">
                                        <h4 className="text-[20px] tracking-wider 
                                        font-primary font-semibold mb-6 ">{name}</h4>
                                        <p className="font-secondary leading-tight text-sm">{description}</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <a href="#" className="btn w-9 h-9 mb-[42px] rounded-full flex justify-center items-center">
                                            <BsArrowUpRight/>
                                        </a>
                                        <a href="" className="text-gradient text-sm">{link}</a>
                                    </div>
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>

        
    </section>
}

export default Service;