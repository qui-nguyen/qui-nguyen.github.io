import React from "react";
import {
    githubIcon,
    linkedinIcon,
    messageIcon
} from "../assets";

const Footer = () => {

    return (
        <>
            <div className="flex flex-row items-center justify-center gap-6 py-3">
                <div className="w-[30px] md:w-[45px] cursor-pointer">
                    <a href="https://github.com/qui-nguyen">
                        <img className="w-full h-full object-contain" src={githubIcon} alt="icon-gtihub" />
                    </a>
                </div>
                <div className="w-[30px] md:w-[45px] cursor-pointer">
                    <a href="#contact" role="link">
                        <img className="w-full h-full object-contain" src={messageIcon} alt="icon-message" />
                    </a>
                </div>
                <div className="w-[30px] md:w-[45px] cursor-pointer">
                    <a href="https://linkedin.com/in/thanh-qui-nguyen">
                        <img className="w-full h-full object-contain" src={linkedinIcon} alt="icon-linkedin" />
                    </a>
                </div>
            </div>
            <p className="text-center py-3 m-0">© Qui Nguyen 2023</p>
        </>

    )
}

export default Footer;
