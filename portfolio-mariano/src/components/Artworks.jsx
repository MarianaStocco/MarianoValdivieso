import React, { useState } from 'react'
import BuyMeACofee from '../img/gallery/bmc-full-logo-no-background.png'
import PaypalDonate from '../img/gallery/png-transparent-paypal.png'
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
        <p
          className='ml-9 font-medium'>
          Si quieres apoyar mi trabajo, invítame un café!
        </p>
        <a href="https://www.buymeacoffee.com/amhiank">
          {/* <p
            className='ml-2'>
            * invítame un café con tarjetas!
          </p> */}
          <img
            src={BuyMeACofee}
            alt="buy-me-a-coffe"
            className='w-15 h-10  md:rounded-none  mx-auto py-2'
          />
        </a>
        <a href="https://www.paypal.com/donate/?hosted_button_id=KJ687YP5RMRZC">
          {/* <p
            className='ml-2 font-light'>
            * invítame un café con PayPal!
          </p> */}
          <img
            src={PaypalDonate}
            alt="donate"
            className='w-20 h-18  md:rounded-none  mx-auto py-2 ml-9'
          />
        </a>
        <a 
        href='https://cafecito.app/amhiank'
          rel='noopener'
          target='_blank'>
          {/* <p
            className='ml-2 font-light'>
            * invítame un café con Mercado Pago (Argentina)!
          </p> */}
          <img
          className='w-15 h-10  md:rounded-none  mx-auto py-2'
            srcset='https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x'
            src='https://cdn.cafecito.app/imgs/buttons/button_1.png'
            alt='Invitame un café en cafecito.app'
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


