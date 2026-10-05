import { HiArrowDown } from 'react-icons/hi';
import { education } from '../../data/portfolio';
import './About.scss';

const About = () => (
  <section id="about" className="section about" aria-labelledby="about-title">
    <div className="section__intro">
      <p className="section__kicker">About</p>
      <h2 id="about-title">From reusable interfaces<br /><em>to full-stack applications.</em></h2>
    </div>
    <div className="about__body">
      <div className="about__statement">
        <p>I&apos;m a software developer and UWA Master of Information Technology graduate with over two years of commercial TypeScript development experience.</p>
        <p>Through commercial frontend work, I developed skills in building reusable interfaces, integrating backend APIs and keeping UI state synchronised across screens. I also worked on recovering from timed-out requests, managing cached assets and cleaning up component lifecycles to control memory growth.</p>
        <p>I&apos;ve applied that experience to full-stack development with React, Python/Flask and PostgreSQL, working with a team and a client to deliver Heritage Fire Watch. My individual research project, CloudNet, extends this work into Python/PyTorch image-generation pipelines and GPU-based experimentation.</p>
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
            <span>{item.detail}</span>
          </article>
        ))}
      </div>
    </div>
  </section>
);
export default About;
