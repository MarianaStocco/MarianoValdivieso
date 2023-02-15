import React, { useState } from 'react'
import BuyMeACofee from '../img/gallery/bmc-full-logo-no-background.png'
// import photo album & lightbox
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';
import { gallery } from '../data';


const slides = gallery.images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));


export default function Artworks() {
  const [index, setIndex] = useState(-1);

  const { images } = gallery;

  return (
    <section>
      <div className='mt-[150px] md:w-48 md:h-auto sm:w-20 sm:h-auto'>
        <a href="https://www.buymeacoffee.com/amhiank">
          <p
          className='ml-9 font-light'>
            Si quieres apoyar mi trabajo, invítame un café!
          </p>
        <img 
        src={BuyMeACofee} 
        alt="buy-me-a-coffe"
        className='w-15 h-10  md:rounded-none  mx-auto py-2'
         />
        </a>
      </div>
      <h1 className='mt-[50px] ml-32 text-lg font-extrabold'>DIGITAL ART</h1>
      <div>
        <motion.div
          variants={fadeIn('up')}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
          className='pt-5 mx-5 rounded-2xl'
        >
          <PhotoAlbum
            layout='masonry'
            photos={images}
            onClick={(event, photo, index) => setIndex(index)}
          />
          <Lightbox
            slides={slides}
            styles={{ container: { backgroundColor: 'rgba(0,0,0,.9)' } }}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
          />
        </motion.div>
      </div>
    </section>
  )
}


