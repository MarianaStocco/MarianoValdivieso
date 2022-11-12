import React, { useEffect, useState } from 'react';
//  useInView hook
import { useInView } from 'react-intersection-observer';
// react circular
import { CircularProgressbar } from 'react-circular-progressbar';
// react circular styles
import 'react-circular-progressbar/dist/styles.css';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [illustration, setillustration] = useState(0);
  const [oil, setOil] = useState(0);
  const [digital, setDigital] = useState(0);
  

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (illustration < 90) {
          setillustration(illustration + 1);
        }
        if (oil < 80) {
          setOil(oil + 1);
        }
        if (digital < 75) {
          setDigital(digital + 1);
        }
      }, 50);
    } else {
      setillustration(0);
      setOil(0);
      setDigital(0);
    }
  }, [inView, illustration, oil, digital]);

  const styles = {
    path: {
      stroke: '#111111',
    },
    trail: {
      stroke: '#EEEEEE',
    },
    text: {
      fill: '#111111',
      fontSize: '24px',
    },
  };

  return (
    <motion.section
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
      ref={ref}
      className='section font-primary'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row justify-between items-center gap-y-12'>
          <div className='w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              styles={styles}
              value={illustration}
              text={`${illustration}%`}
            />
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Illustration
            </div>
          </div>
          <div className='w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={oil}
              text={`${oil}%`}
            />
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Oil on Canvas
            </div>
          </div>
          <div className='w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={digital}
              text={`${digital}%`}
            />
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Digital Art
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
