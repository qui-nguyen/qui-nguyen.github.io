import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import styles from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/index';

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Présentation</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 0.1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Je suis une développeuse Front-End Junior spécialisée en React, passionnée par la création d'interfaces utilisateur interactives et réactives. J'ai une solide compréhension de HTML, CSS et JavaScript, ainsi que dans la création de composants réutilisables avec React.
        Je suis curieuse, toujours prête à relever de nouveaux défis et à apprendre continuellement. Consultez mon portfolio pour voir mes projets et discutons de ma contribution potentielle à votre équipe.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'presentation');