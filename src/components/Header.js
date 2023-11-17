import React from "react";
import logo from "../assets/logo.svg" ;

const Header = ()=>{
    return  <header 
        className="py-8 "
        id=""
    >
       <div className="container mx-auto">
            <div
                className="flex justify-between items-center" 
            >
                {/* logo */ }
                <a href="#" className="invisible">
                        <img  src={logo} alt=""/>
                </a>           
                {/* button */}
                <p  className="text-gradient btn-link">
                                Work with me
                            </p>
            </div>
       </div>
    </header>
}

export default Header;