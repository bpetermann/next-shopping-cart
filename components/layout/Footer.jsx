import React from 'react';
import Accordion from '../ui/Accordion';
import classes from './Footer.module.css';
import { SiTwitter, SiSpotify, SiFacebook, SiInstagram } from 'react-icons/si';

const Footer = () => {
  return (
    <div className={classes['background']}>
      <div className={classes['container']}>
        <div className={classes['accordion-container']}>
          <Accordion />
        </div>
        <div className={classes['icon-container']}>
          <SiTwitter size={36} />
          <SiSpotify size={36} />
          <SiFacebook size={36} />
          <SiInstagram size={36} />
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
