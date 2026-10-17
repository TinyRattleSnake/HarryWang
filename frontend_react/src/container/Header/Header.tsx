import { HiArrowDown, HiArrowRight } from 'react-icons/hi';
import { motion, useReducedMotion } from 'framer-motion';

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
      <h1>Software Engineer</h1>
      <p className="hero__intro">
        I&apos;m Harry Wang, a software engineer with commercial
        TypeScript experience. My work spans full-stack web applications and deep
        learning research, including Heritage Fire Watch and CloudNet.
      </p>
      <div className="hero__actions">
        <a className="button button--primary" href="#work">
          View projects <HiArrowDown aria-hidden="true" />
        </a>
        <a className="button button--text" href="#contact">
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
