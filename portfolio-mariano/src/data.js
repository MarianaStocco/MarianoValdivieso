// import images
import GalleryImg1 from '../src/img/gallery/1.jpg';
import GalleryImg2 from '../src/img/gallery/2.jpg';
import GalleryImg3 from '../src/img/gallery/3.jpg';
import GalleryImg4 from '../src/img/gallery/4.jpg';
import GalleryImg5 from '../src/img/gallery/5.jpeg';
import GalleryImg6 from '../src/img/gallery/6.jpg';
import GalleryImg7 from '../src/img/gallery/7.jpg';
import Logo from '../src/img/header/logo2.png';
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Home' },
    { href: '/', name: 'About' },
    { href: '/gallery', name: 'Gallery' },
    // { href: '/', name: 'Contact' },
  ],
};

export const socialData = [
  { href: 'https://www.facebook.com/Mariano.Valdivieso.Pinturas', icon: <GrFacebookOption /> },
  { href: 'https://www.instagram.com/amihank_keniihank/', icon: <IoLogoInstagram /> },
  { href: 'https://ar.pinterest.com/MarianoPaint/', icon: <IoLogoPinterest /> },
  { href: 'https://www.youtube.com/channel/UCPRsngvBhSrDxM1gYhNbKOQ', icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: 'MARIANO VALDIVIESO',
  subtitle:
    '“Color is the place where our brain and the universe meet.” – Paul Klee',
  btnText: 'read more',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'My Story:',
  subtitle1:
    'In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.',
  subtitle2:
    'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.',
  btnText: 'Know more',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'Check my gallery:',
  btnText: 'View all',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 540,
      height: 540,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 410,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 410,
      height: 540,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 410,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 410,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 410,
      height: 540,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 410,
      height: 540,
    },
  ],
};
export const gallery = {
  title: 'Digital Art:',
  btnText: 'View all',
  btnIcon: <IoMdArrowForward />,
  images: [

    {
      src: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062625/Artworks/nacimiento_inta_tz5ss1.jpg',
      original: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062625/Artworks/nacimiento_inta_tz5ss1.jpg',
      width:[] ,
      height:[] ,
    },
    {
      src: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062625/Artworks/angel_3_inta_ekcquj.jpg',
      original: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062625/Artworks/angel_3_inta_ekcquj.jpg',
      width: [],
      height: [],
    },
    {
      src: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062625/Artworks/angel_2_insta_tglax1.jpg',
      original: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062625/Artworks/angel_2_insta_tglax1.jpg',
      width: [],
      height: [],
    },
    {
      src: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062180/Artworks/ser_cristal_03_qczgly.jpg',
      original: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062180/Artworks/ser_cristal_03_qczgly.jpg',
      width: [],
      height: [],
    },
    {
      src: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062177/Artworks/ser_cristal_08_htvqqm.jpg',
      original: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062177/Artworks/ser_cristal_08_htvqqm.jpg',
      width: [],
      height: [],
    },
    {
      src: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062176/Artworks/ser_cristal_09_jlfl20.jpg',
      original: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062176/Artworks/ser_cristal_09_jlfl20.jpg',
      width: [],
      height: [],
    },
    {
      src: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062171/Artworks/ser_cristal_11_vy7azo.jpg',
      original: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062171/Artworks/ser_cristal_11_vy7azo.jpg',
      width: [],
      height: [],
    },
    {
      src: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062164/Artworks/ser_cristal_12_wnggev.jpg',
      original: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062164/Artworks/ser_cristal_12_wnggev.jpg',
      width: [],
      height: [],
    },
    {
      src: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062165/Artworks/mercahva_chico_dmbglk.jpg',
      original: 'https://res.cloudinary.com/drmm6mayx/image/upload/v1676062165/Artworks/mercahva_chico_dmbglk.jpg',
      width: [],
      height: [],
    },
    {
      src: "https://res.cloudinary.com/drmm6mayx/image/upload/v1665430440/Artworks/faraon_negro_s1d2kz.jpg",
      original: "https://res.cloudinary.com/drmm6mayx/image/upload/v1665430440/Artworks/faraon_negro_s1d2kz.jpg",
      width: [],
      height: [],
    },

    {
      src: "https://res.cloudinary.com/drmm6mayx/image/upload/v1663943046/Artworks/steam_pxbnog.jpg",
      original: "https://res.cloudinary.com/drmm6mayx/image/upload/v1663943046/Artworks/steam_pxbnog.jpg",
      width: [],
      height: [],
    },
    
    {
      src: "https://res.cloudinary.com/drmm6mayx/image/upload/v1663930334/Artworks/molotov_yxhxw4.jpg",
      original: "https://res.cloudinary.com/drmm6mayx/image/upload/v1663930334/Artworks/molotov_yxhxw4.jpg",
      width: [],
      height: [],
    },

  ],
};
export const interviewData = {
  title:
    '“as you get closer to the truth you get closer to the light”',
  btnText: 'Watch it now',
  btnIcon: <FaPlay />,
};



export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'All World Office',
      subtitle:
        'Art has no frontiers or flags, contact me',
      phone: {
        icon: <FaPhoneAlt />,
        number: '+54 2616 44600',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'marianovaldivieso@hotmail.com',
      },
    },
    
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};

export const footerData = {
  about: {
    title: 'About Mariano Valdivieso',
    subtitle:
      'If you want to know more about me and my art, do not hesitate to contact me.',
    address: {
      icon: <FaMapMarkerAlt />,
      name: 'All World',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+54 2616 44600',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'marianovalidivieso@hotmail.com',
    },
  },
  // links: {
  //   title: 'Useful links',
  //   items: [
  //     // { href: '/about', name: 'About me' },
  //     { href: '/gallery', name: 'My gallery' },
  //     // { href: '/contact', name: 'Contact me' },
  //   ],
  // },

};
