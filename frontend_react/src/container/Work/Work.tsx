import { useState } from 'react';
import { HiArrowRight, HiExternalLink } from 'react-icons/hi';
import { projects, type Project } from '../../data/portfolio';
import './Work.scss';

const ProjectGallery = ({ project }: { project: Project }) => {
  const [selected, setSelected] = useState(0);
  const figure = project.images[selected];
  const src = `${import.meta.env.BASE_URL}projects/${figure.file}`;

  return (
    <div className="project__gallery">
      <div className="project__gallery-bar">
        <span>{project.title} / Preview</span>
        <a href={src} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} ${figure.label} at full size (opens in a new tab)`}>
          Full size <HiExternalLink aria-hidden="true" />
        </a>
      </div>
      {project.images.length > 1 && (
        <div className="project__views" role="group" aria-label={`${project.title} images`}>
          {project.images.map((item, index) => (
            <button key={item.file} type="button" aria-pressed={index === selected} onClick={() => setSelected(index)}>{item.label}</button>
          ))}
        </div>
      )}
      <figure>
        <a href={src} target="_blank" rel="noreferrer" aria-label={`Enlarge ${project.title} ${figure.label} (opens in a new tab)`}>
          <img src={src} alt={figure.alt} loading="lazy" decoding="async" />
        </a>
        <figcaption aria-live="polite">{figure.caption}</figcaption>
      </figure>
    </div>
  );
};

const Work = () => (
  <section id="work" className="section work" aria-labelledby="work-title">
    <div className="section__intro section__intro--row">
      <div><p className="section__kicker">Selected projects</p><h2 id="work-title">Applications built<br /><em>around real problems.</em></h2></div>
      <p className="section__aside">A client-facing full-stack application, followed by independent research in controllable image generation.</p>
    </div>
    <div className="work__list">
      {projects.map((project, index) => (
        <article className={`project${project.layout === 'compact' ? ' project--compact' : ''}`} id={project.id} key={project.id} aria-labelledby={`${project.id}-title`}>
          <div className="project__heading">
            <span className="project__number">0{index + 1}</span>
            <div><p className="project__meta">{project.eyebrow} <span>{project.period}</span></p><h3 id={`${project.id}-title`}>{project.title}</h3><p className="project__subtitle">{project.subtitle}</p></div>
          </div>
          <div className="project__content">
            <ProjectGallery project={project} />
            <div className="project__overview">
              <p className="project__summary">{project.summary}</p>
              <ul className="project__tags" aria-label={`${project.title} technologies`}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              <div className="project__links">{project.links.map((link, linkIndex) => <a className={project.layout === 'compact' && linkIndex === 0 ? 'project__primary-link' : undefined} key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<HiArrowRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>)}</div>
              {project.note && <p className="project__note">{project.note}</p>}
            </div>
            <dl className="project__highlights">{project.highlights.map(item => <div key={item.title}><dt>{item.title}</dt><dd>{item.text}</dd></div>)}</dl>
          </div>
        </article>
      ))}
      {/* HTML5 Games: reserved, intentionally not rendered until media and copy are ready. */}
    </div>
    <p className="work__colophon">This portfolio is built with React and TypeScript. <a href="https://github.com/TinyRattleSnake/HarryWang" target="_blank" rel="noreferrer">View source <span className="sr-only">(opens in a new tab)</span><HiArrowRight aria-hidden="true" /></a></p>
  </section>
);

export default Work;
