import { HiArrowDown } from 'react-icons/hi';
import { education } from '../../data/portfolio';
import './About.scss';

const About = () => (
  <section id="about" className="section about" aria-labelledby="about-title">
    <div className="section__intro">
      <p className="section__kicker">About</p>
      <h2 id="about-title">Building, experimenting<br /><em>and improving.</em></h2>
    </div>
    <div className="about__body">
      <div className="about__statement">
        <p>I enjoy building things, experimenting with different approaches, and finding ways to improve the results.</p>
        <p>My software development experience began with commercial frontend work using TypeScript and JavaScript. More recently, I&apos;ve worked on full-stack development, including a GIS web application that helps users explore fire risks to cultural heritage sites.</p>
        <p>During my master&apos;s studies at UWA, I also explored deep learning through CloudNet, an independent research project focused on generating indoor images in different visual styles. I particularly enjoyed comparing the generated images and understanding why some approaches worked better than others.</p>
        <a href="#work">Explore projects <HiArrowDown aria-hidden="true" /></a>
        <div className="about__teaching">
          <p className="section__kicker">At UWA · Jul 2026–present</p>
          <h3>Casual Teaching Assistant</h3>
          <p>Marking project and examination assessments for CITS5017 Deep Learning, with constructive feedback to support students.</p>
        </div>
      </div>
      <div className="about__education">
        <p className="section__kicker">Education</p>
        {education.map(item => (
          <article key={item.university}>
            <h3>{item.university}</h3>
            <p>{item.degree}</p>
            <p>Specialisation: {item.specialisation}</p>
            <span>{item.detail}</span>
          </article>
        ))}
      </div>
    </div>
  </section>
);
export default About;
