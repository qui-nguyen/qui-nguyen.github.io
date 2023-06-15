import React from "react";
import {
    githubIcon,
    linkedinIcon,
    messageIcon
} from "../assets";

import { SectionWrapper } from "../hoc";

const Footer = () => {

    return (
        <div className="sm:px-16 px-6 sm:pt-16 pt-10 max-w-7xl mx-auto relative z-0">
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
            <div className="flex flex-col w-full items-center justify-center gap-[10px] py-3">
                <p className="text-secondary text-center m-0">© Qui Nguyen 2023</p>
                <p className="text-secondary text-center m-0 text-xs"> Style inspiré par &nbsp;
                    <a href="https://github.com/qui-nguyen/portfolio-v1" target="_blank" className="underline hover:text-slate-400">Qui Nguyen Dev (v1)</a>
                    &nbsp;&&nbsp;
                    <a href="https://www.jsmastery.pro" target="_blank" className="underline hover:text-slate-400">JavaScript Mastery</a>
                </p>
            </div>
        </div>

    )
}

export default Footer;
