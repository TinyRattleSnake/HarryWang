import { useEffect, useState } from 'react';
import { HiArrowRight, HiMenuAlt4, HiX } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';

import { contact } from '../../data/portfolio';
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['work', 'about', 'skills', 'contact'];

  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', closeMenu);
    return () => window.removeEventListener('keydown', closeMenu);
  }, []);

  return (
    <nav className="app__navbar" aria-label="Primary navigation">
      <a className="app__navbar-logo" href="#home" aria-label="Harry Wang, home">
        <img src={images.logo} alt="Harry Wang" />
      </a>

      <ul className="app__navbar-links">
        {links.map((item) => (
          <li key={item}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <a className="app__navbar-cta" href={`mailto:${contact.email}`}>
        Let&apos;s talk <HiArrowRight aria-hidden="true" />
      </a>

      <div className="app__navbar-menu">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
        >
          <HiMenuAlt4 aria-hidden="true" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Close navigation menu">
                <HiX aria-hidden="true" />
              </button>
              <ul>
                {['home', ...links].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setIsOpen(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
