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
    { href: '/home', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/gallery', name: 'Gallery' },
    { href: '/contact', name: 'Contact' },
  ],
};

export const socialData = [
  { href: 'https://www.facebook.com/Mariano.Valdivieso.Pinturas', icon: <GrFacebookOption /> },
  { href: 'https://www.instagram.com/mariano.valdivieso_pinturas/', icon: <IoLogoInstagram /> },
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

export const interviewData = {
  title:
    '“as you get closer to the truth you get closer to the light”',
  btnText: 'Watch it now',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
    name: 'Jack Geoffrey',
    occupation: 'Tattoo Artist',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Douglas Hane',
    occupation: 'Tattoo Artist',
  },
];

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
  links: {
    title: 'Useful links',
    items: [
      { href: '/about', name: 'About me' },
      { href: '/gallery', name: 'My gallery' },
      { href: '/contact', name: 'Contact me' },
    ],
  },

};
