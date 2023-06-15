import React from "react";
import { githubIcon, linkedinIcon, messageIcon, contactIcon } from "../assets";
import styled from "styled-components";

const ButtonContact = () => {
    return (
        <ContactBtn className="flex justify-center items-center">
            <img className="w-[80%] h-[80%] object-contain" src={contactIcon} alt="icon communication" />
            {/* <div className="transition duration-400 text-center rounded-full text-white text-24 shadow-md cursor-pointer relative"> */}
            <div className="flex justify-center items-center w-[100px] h-[100px]">
                <a className="flex justify-center items-center w-full h-full" href="https://github.com/qui-nguyen">
                    <img src={githubIcon} alt="icon-github" className="w-[80%] h-[80%] object-contain" />
                </a>
            </div>
            <div className="flex justify-center items-center">
                <a className="flex justify-center items-center w-full h-full" href="https://linkedin.com/in/thanh-qui-nguyen">
                    <img src={linkedinIcon} alt="icon-linkedin" className="w-[80%] h-[80%] object-contain" />
                </a>
            </div>
            <div className="flex justify-center items-center">
                <a className="flex justify-center items-center w-full h-full" href="#contact" >
                    <img src={messageIcon} alt="icon-message" className="w-[80%] h-[80%] object-contain" />
                </a>
            </div>
        </ContactBtn>
        // </div>
    );
};

export default ButtonContact;

const ContactBtn = styled.div`
    transition: 400ms;
    position: fixed;
    right: 10%;
    bottom: 50px;
    width: 80px;
    height: 80px;
    text-align: center;
    line-height: 60px;
    border-radius: 50%;
    background-color: #0a0f1b;
    color: ;
    font-size: 24px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
    cursor: pointer;
    z-index: 10;

    &:hover {
        background: #000;
        box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.28), 0 4px 15px 0 rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 640px) {
        width: 50px;
        height: 50px;
    }

    div {
        transition: 400ms;
        opacity: 0;
        width: 0px;
        height: 0px;
        text-align: center;
        border-radius: 50%;
        color: #FFFFFF;
        font-size: 24px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
        cursor: pointer;
        z-index: -1;
        position: relative;

        &:hover {
            box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.28), 0 4px 15px 0 rgba(0, 0, 0, 0.25);
            z-index: 10;
        }

        &:nth-child(2) {
            transition-delay: 200ms;
            position: absolute;
            right: 30px;
            bottom: 30px;
            background: #0a0f1b;
        }

        &:nth-child(3) {
            transition-delay: 300ms;
            position: absolute;
            right: 30px;
            bottom: 30px;
            background: #0a0f1b;
        }

        &:nth-child(4) {
            transition-delay: 400ms;
            position: absolute;
            right: 30px;
            bottom: 30px;
            background: #0a0f1b;
        }
    }

    &:hover {
        div {
            opacity: 1;
            width: 50px;
            height: 50px;

            @media (max-width: 640px) {
                width: 40px;
                height: 40px;
            }

            a {
                height: 100%;
                scale: none;
            }

            &:nth-child(2) {
                right: 120px;
                bottom: 20px;

                @media (max-width: 640px) {
                    right: 70px;
                    bottom: -25px;
                }

                &:hover {
                    transition-delay: 100ms;
                    background: #000;
                }
            }

            &:nth-child(3) {
                right: 80px;
                bottom: 85px;

                @media (max-width: 640px) {
                    right: 60px;
                bottom: 30px;
                }

                &:hover {
                    transition-delay: 100ms;
                    background: #000;
                }
            }

            &:nth-child(4) {
                right: 0px;
                bottom: 105px;
                @media (max-width: 640px) {
                    right: 20px;
                    bottom: 70px;
                }

                &:hover {
                    transition-delay: 100ms;
                    background: #000;
                }
            }
        }
    }
`

// .contact-button {
//     @include display-flex;
//     transition: 400ms;
//     position: fixed;
//     right: 10%;
//     bottom: 50px;
//     width: 80px;
//     height: 80px;
//     text-align: center;
//     line-height: 60px;
//     border-radius: 50%;
//     background-color: #000;
//     color: $backgroundColor1;
//     font-size: 24px;
//     box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
//     cursor: pointer;
//     z-index: 10;

//     &:hover {
//         background: darken(#000, 5%);
//         box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.28), 0 4px 15px 0 rgba(0, 0, 0, 0.25);
//     }

//     @media (max-width: 640px) {
//         width: 50px;
//         height: 50px;
//     }

//     div {
//         @include display-flex;
//         transition: 400ms;
//         opacity: 0;
//         width: 0px;
//         height: 0px;
//         text-align: center;
//         border-radius: 50%;
//         color: #FFFFFF;
//         font-size: 24px;
//         box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22);
//         cursor: pointer;
//         z-index: -1;
//         position: relative;

//         .social-network-icon {
//             height: 100%;

//             &:hover {
//                 scale: none;
//             }
//         }

//         &:hover {
//             box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.28), 0 4px 15px 0 rgba(0, 0, 0, 0.25);
//             z-index: 10;
//         }

//         &:nth-child(2) {
//             transition-delay: 200ms;
//             position: absolute;
//             right: 30px;
//             bottom: 30px;
//             background: #000;
//         }

//         &:nth-child(3) {
//             transition-delay: 300ms;
//             position: absolute;
//             right: 30px;
//             bottom: 30px;
//             background: #000;
//         }

//         &:nth-child(4) {
//             transition-delay: 400ms;
//             position: absolute;
//             right: 30px;
//             bottom: 30px;
//             background: #000;
//         }
//     }

//     &:hover {
//         div {
//             opacity: 1;
//             width: 50px;
//             height: 50px;

//             @media (max-width: 640px) {
//                 width: 40px;
//                 height: 40px;
//             }

//             a {
//                 height: 100%;
//                 @include display-flex;
//                 scale: none;
//             }

//             &:nth-child(2) {
//                 right: 120px;
//                 bottom: 20px;

//                 @media (max-width: 640px) {
//                     right: 70px;
//                     bottom: -25px;
//                 }

//                 &:hover {
//                     transition-delay: 100ms;
//                     background: darken(#000, 5%);
//                 }
//             }

//             &:nth-child(3) {
//                 right: 80px;
//                 bottom: 85px;

//                 @media (max-width: 640px) {
//                     right: 60px;
//                 bottom: 30px;
//                 }

//                 &:hover {
//                     transition-delay: 100ms;
//                     background: darken(#000, 5%);
//                 }
//             }

//             &:nth-child(4) {
//                 right: 0px;
//                 bottom: 105px;
//                 @media (max-width: 640px) {
//                     right: 20px;
//                     bottom: 70px;
//                 }

//                 &:hover {
//                     transition-delay: 100ms;
//                     background: darken(#000, 5%);
//                 }
//             }
//         }
//     }
// }
