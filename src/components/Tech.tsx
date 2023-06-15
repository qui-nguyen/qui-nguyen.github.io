import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

import { useMediaQuery } from "react-responsive";

const Tech = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology: { name: string; icon: string }) => (
        <div className={`${isMobile ? 'w-[64px] h-[64px]' : 'w-28 h-28'}`} key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}

    </div>
  )
}

export default SectionWrapper(Tech, 'tech');