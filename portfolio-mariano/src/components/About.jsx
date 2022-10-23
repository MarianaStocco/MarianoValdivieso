import React from 'react';
import { aboutData } from '../data';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const {title, subtitle1, subtitle2, btnText, btnIcon } = aboutData

  return (
  <section className='bg-white'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-[70px] items-center'>
        <div className='flex flex-col lg:flex-row flex-l'>
        <div className='text-[280px] xl:text-[280px] leading-none front-primary font-extrabold lg:tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent'>01</div>
        </div>
      </div>
      <div>
        <h2>{title}</h2>
        <div>
          <p>{subtitle1}</p>
          <p>{subtitle2}</p>
          <button>
            {btnText} <div>{btnIcon}</div>
          </button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
