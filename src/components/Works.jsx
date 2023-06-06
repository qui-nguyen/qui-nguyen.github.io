import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import styles from '../styles';
import { link } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  isMobile
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      animate={isMobile ? { opacity: 1 } : {}}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full sm:min-h-[600px]'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={link}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  return (
    <>
      <motion.div
        variants={textVariant(1)}
        animate={isMobile ? { opacity: 1 } : {}}
      >
        <p className={styles.sectionSubText}>Mes projets</p>
        <h2 className={styles.sectionHeadText}>Projets</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 0.1)}
          animate={isMobile ? { opacity: 1 } : {}}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Dans cette section, vous trouverez une sélection de mes projets où
          j'ai pu mettre en pratique mes compétences en développement Front-End avec React.
          Chaque projet est le fruit d'un travail passionné et démontre ma capacité à concevoir
          des interfaces utilisateur interactives, à gérer l'état de manière efficace et à créer
          des composants réutilisables. J'ai également travaillé sur des projets collaboratifs,
          ce qui m'a permis d'améliorer mes compétences en matière de travail d'équipe et de gestion de projet.
          N'hésitez pas à explorer ces exemples pour mieux apprécier mon savoir-faire
          et ma créativité dans le domaine du développement Front-End avec React.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} isMobile={isMobile} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'projets');