import React, { useEffect, useState } from 'react';
import { galleryData } from '../data';
// import { PhotoAlbum } from 'react-photo-album';
// import Lightbox from 'yet-another-react-lightbox';
// import 'yet-another-react-lightbox/styles.css'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
import Artworks from './Artworks';

const GallerySection = () => {
   const { title, btnText, btnIcon} = galleryData


  return (
    <section className='bg-[#f9f9f9] section relative mt-[40px] lg:mt-0'>
      <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='h2 max-w-[370px] lg:mb-20'
        >{title}</motion.h2>
      </div>
      <motion.div
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='flex justify-center'
      >
        <button className='btn btn-lg btn-dark'>
          {btnText}
          <div className='text-xl'>{btnIcon}</div>
        </button>
      </motion.div>

      <Artworks
          
          />
    </section>
  );
};

export default GallerySection;
