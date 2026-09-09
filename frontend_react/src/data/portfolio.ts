export const contact = {
  email: 'harry.shudong.wang@gmail.com',
  github: 'https://github.com/TinyRattleSnake',
  linkedin: 'https://www.linkedin.com/in/harry-wang-9a6a27376/',
};

export interface ProjectImage {
  file: string;
  label: string;
  alt: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  eyebrow: string;
  period: string;
  subtitle: string;
  summary: string;
  highlights: { title: string; text: string }[];
  tags: string[];
  links: { label: string; href: string }[];
  note?: string;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: 'fire-watch',
    title: 'Heritage Fire Watch',
    eyebrow: 'Full-stack GIS · UWA team project',
    period: 'Feb – Jun 2026',
    subtitle: 'Understanding fire risk. Protecting cultural heritage.',
    summary: 'A GIS web application for UWA Archaeology to visualise fire vulnerability around cultural heritage sites in Albany, Western Australia, helping land managers identify vulnerable sites and prioritise their protection.',
    highlights: [
      { title: 'Project Manager & Tech Lead', text: 'Led the team from requirements and architecture through code review, testing, deployment and the final client demonstration.' },
      { title: 'Connected spatial workflows', text: 'An interactive Leaflet map, rule-based risk assessment, site insights and an upload workflow, backed by Flask REST APIs and PostgreSQL.' },
      { title: 'Delivery', text: 'React frontend deployed on Vercel and Flask backend on Render. The capstone project received a High Distinction.' },
    ],
    tags: ['React', 'TypeScript', 'Leaflet', 'Python', 'Flask', 'PostgreSQL'],
    links: [
      { label: 'Visit live app', href: 'https://heritage-fire-watch.vercel.app/' },
      { label: 'View code', href: 'https://github.com/TinyRattleSnake/Fire-Vulnerability-App' },
    ],
    note: 'The live application requires sign-in and administrator approval.',
    images: [{ file: 'fire-watch-fuel.webp', label: 'Map dashboard', alt: 'Heritage Fire Watch GIS dashboard with fuel-type layers, map controls and an OpenStreetMap basemap of the Albany region.', caption: 'Map dashboard · Regional fuel layers and map controls.' }],
  },
  {
    id: 'cloudnet',
    title: 'CloudNet',
    eyebrow: 'Generative AI · UWA research',
    period: 'Jul 2025 – Jun 2026',
    subtitle: 'One layout. Multiple visual styles.',
    summary: 'A diffusion-based pipeline that generates indoor scenes from a semantic layout, text prompt and style reference. It explores how synthetic images with varied appearances can supplement data for computer vision models.',
    highlights: [
      { title: 'Style-controllable generation', text: 'Combines Stable Diffusion and ControlNet with a custom Style IP-Adapter, adding a learnable style embedding module to guide image appearance.' },
      { title: 'Training through evaluation', text: 'Implemented training, generation and evaluation workflows in PyTorch, Diffusers and Accelerate, running experiments on V100 GPUs on UWA’s Kaya cluster with Slurm.' },
      { title: 'Experiments', text: 'Compared results with FreestyleNet using mIoU and CLIP-based metrics, alongside visual comparisons and ablation studies of the style embedding module.' },
    ],
    tags: ['Python', 'PyTorch', 'Diffusers', 'ControlNet', 'IP-Adapter', 'Slurm'],
    links: [{ label: 'View code & experiments', href: 'https://github.com/CloudWang-UWA/CloudNet' }],
    images: [
      { file: 'cloudnet-results.webp', label: 'Generated scenes', alt: 'CloudNet results: each row shares a semantic mask, with generated scenes in Cozy, Messy, Classic, Luxurious and Van Gogh styles.', caption: 'Each row follows one semantic layout across five styles: Cozy, Messy, Classic, Luxurious and Van Gogh.' },
      { file: 'cloudnet-architecture.webp', label: 'Architecture', alt: 'CloudNet architecture connecting a Style IP-Adapter and learnable style embedding with text conditioning, ControlNet and a Stable Diffusion U-Net.', caption: 'Architecture · Layout conditioning and learned style embeddings guide the diffusion process.' },
    ],
  },
  // HTML5 Games: reserved for future screenshots, descriptions and project links.
  // Keep this section unpublished until its content is ready.
];

export const skillGroups = [
  { title: 'Frontend', skills: ['TypeScript / JavaScript', 'React', 'HTML / CSS', 'Tailwind CSS', 'Leaflet / WebGL'] },
  { title: 'Backend & Data', skills: ['Python / Java', 'Flask', 'REST APIs', 'SQL / PostgreSQL', 'Node.js'] },
  { title: 'AI & Research', skills: ['PyTorch / TensorFlow', 'Hugging Face Diffusers', 'Stable Diffusion', 'ControlNet / IP-Adapter', 'Slurm / GPU workflows'] },
  { title: 'Development tools', skills: ['Git', 'Linux / Shell', 'Unit testing', 'Vercel / Render', 'Figma'] },
] as const;

export const education = [
  { university: 'The University of Western Australia', degree: 'Master of Information Technology', detail: '2024–2026 · WAM 80.6 · GPA 6.5/7 · Global Excellence Scholarship' },
  { university: 'Carnegie Mellon University', degree: 'M.S. Civil and Environmental Engineering', detail: '2015–2016' },
  { university: 'Jilin University', degree: 'B.Eng. Civil Engineering · Second Major in Finance', detail: '2011–2015' },
] as const;
