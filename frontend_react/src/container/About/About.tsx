import { HiArrowDown } from 'react-icons/hi';
import { education } from '../../data/portfolio';
import './About.scss';

const About = () => (
  <section id="about" className="section about" aria-labelledby="about-title">
    <div className="section__intro">
      <p className="section__kicker">About</p>
      <h2 id="about-title">A background in software.<br /><em>A curiosity for AI.</em></h2>
    </div>
    <div className="about__body">
      <div className="about__statement">
        <p>I&apos;m a UWA Master of Information Technology graduate with commercial frontend development experience. I work with TypeScript, JavaScript, Python and Java, with experience in React and Flask.</p>
        <p>My background also includes PyTorch, TensorFlow and diffusion model research at UWA. I enjoy working independently and collaborating with developers, designers and clients to solve technical problems.</p>
        <p>I&apos;m committed to quality work, taking ownership of tasks and learning new technologies. Based in Perth, I&apos;m open to relocation.</p>
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
