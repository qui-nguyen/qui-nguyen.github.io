import React from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { CoffeeCanvas } from "./canvas";
import { expand } from "../assets";

import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <section className='relative w-full h-screen mx-auto'>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-gradient" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Salut, je suis &nbsp;
            <span className="animatedGradientText">Thanh Qui</span>
          </h1>
          <p className={`${styles.heroSubText} text-white`}>
            Motivée à poursuivre mon développement en tant que développeuse front-end,&nbsp;
            je suis à la recherche d'une opportunité de travail qui me permettra de mettre en pratique mes compétences&nbsp;
            et de continuer à apprendre et à me développer professionnellement.
          </p>
        </div>
      </div>
      <CoffeeCanvas />

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'> */}
      <div className={`absolute w-full flex justify-center items-center ${isMobile ? 'bottom-[70px]' : 'bottom-2'} `}>
        <a href='#presentation'>
          {/* <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'> */}
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          // className='w-3 h-3 rounded-full bg-secondary mb-1'
          ><img src={expand} alt={expand} /></motion.div>
          {/* </div> */}
        </a>
      </div>
    </section >
  )
}

export default Hero;