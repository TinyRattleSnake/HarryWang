import { HiArrowDown, HiArrowRight } from 'react-icons/hi';
import { motion, useReducedMotion } from 'framer-motion';

import { contact } from '../../data/portfolio';
import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  const reduceMotion = useReducedMotion();
  return (
  <header id="home" className="hero">
    <motion.div
      className="hero__copy"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <p className="hero__eyebrow"><span /> Open to opportunities in Australia</p>
      <h1>
        Software developer.<br />
        <em>Full-stack web applications.</em>
      </h1>
      <p className="hero__intro">
        I&apos;m Harry Wang, a software developer with over two years of commercial
        TypeScript experience. I build full-stack applications with React, Flask and
        PostgreSQL, including a deployed web application for a UWA archaeology client.
      </p>
      <p className="hero__availability">Australian permanent resident · No sponsorship required · Open to relocation</p>
      <div className="hero__actions">
        <a className="button button--primary" href="#work">
          View projects <HiArrowDown aria-hidden="true" />
        </a>
        <a className="button button--text" href={`mailto:${contact.email}`}>
          Contact me <HiArrowRight aria-hidden="true" />
        </a>
      </div>
    </motion.div>

    <motion.div
      className="hero__portrait"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
    >
      <div className="hero__image-frame">
        <img src={images.profile} alt="Harry Wang" />
      </div>
      <div className="hero__stack" aria-label="Core technologies">
        <span>React</span><span>TypeScript</span><span>Python</span>
      </div>
      <p className="hero__caption">Perth, Australia · Open to software development opportunities</p>
    </motion.div>
  </header>
  );
};

export default Header;
