import React from 'react';
import Accordion from '../ui/Accordion';
import classes from './Footer.module.css';
import { SiTwitter, SiSpotify, SiFacebook, SiInstagram } from 'react-icons/si';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <div className={classes['background']}>
      <Newsletter />
      <div className={classes['container']}>
        <div className={classes['accordion-container']}>
          <Accordion color={'#fcfcfc'} backgroundColor={'#1a1a1a'} />
        </div>
        <div className={classes['icon-container']}>
          <SiTwitter size={36} style={{ color: '#fcfcfc' }} />
          <SiSpotify size={36} style={{ color: '#fcfcfc' }} />
          <SiFacebook size={36} style={{ color: '#fcfcfc' }} />
          <SiInstagram size={36} style={{ color: '#fcfcfc' }} />
        </div>
        <nav className={classes['navigation-container']}>
          <a href='https://github.com/bpetermann'>Privacy Policy</a>
          <a href='https://github.com/bpetermann'>Terms of Use</a>
          <a href='https://github.com/bpetermann'>Cookie Preferences</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
