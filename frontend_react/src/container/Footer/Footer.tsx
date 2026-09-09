import { HiArrowRight } from 'react-icons/hi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { contact } from '../../data/portfolio';
import './Footer.scss';

const Footer = () => (
  <footer id="contact" className="footer">
    <div className="footer__top">
      <p className="section__kicker">Contact · Perth, Western Australia</p>
      <h2>Have a role, project<br />or good idea? <em>Let&apos;s talk.</em></h2>
      <a href={`mailto:${contact.email}`}>{contact.email} <HiArrowRight aria-hidden="true" /></a>
    </div>
    <div className="footer__bottom">
      <p>Harry Wang · Software Developer</p>
      <div className="footer__socials">
        <a href={contact.linkedin} target="_blank" rel="noreferrer"><AiFillLinkedin aria-hidden="true" /> LinkedIn <span className="sr-only">(opens in a new tab)</span></a>
        <a href={contact.github} target="_blank" rel="noreferrer"><AiFillGithub aria-hidden="true" /> GitHub <span className="sr-only">(opens in a new tab)</span></a>
      </div>
      <p>© {new Date().getFullYear()} Harry Wang</p>
    </div>
  </footer>
);
export default Footer;
