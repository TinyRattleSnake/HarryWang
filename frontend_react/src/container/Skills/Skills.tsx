import { skillGroups } from '../../data/portfolio';
import './Skills.scss';

const Skills = () => (
  <section id="skills" className="section skills" aria-labelledby="skills-title">
    <div className="section__intro section__intro--row">
      <div><p className="section__kicker">Skills</p><h2 id="skills-title">Tools behind<br /><em>the work.</em></h2></div>
      <p className="section__aside">From interactive interfaces and APIs to model training and evaluation.</p>
    </div>
    <div className="skills__groups">
      {skillGroups.map(group => (
        <article key={group.title}>
          <h3>{group.title}</h3>
          <ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </article>
      ))}
    </div>
  </section>
);
export default Skills;
