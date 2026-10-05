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
  layout?: 'compact';
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: 'fire-watch',
    title: 'Heritage Fire Watch',
    eyebrow: 'UWA client project · Project Manager & Technical Lead',
    layout: 'compact',
    period: 'Feb – Jun 2026',
    subtitle: 'Understanding fire risk. Protecting cultural heritage.',
    summary: 'A GIS web application for UWA Archaeology to visualise fire vulnerability around cultural heritage sites in Albany, Western Australia, helping land managers identify vulnerable sites and prioritise their protection.',
    highlights: [
      { title: 'Risk assessment & map workflows', text: 'Implemented a Python module combining environmental hazard and heritage-site vulnerability into risk layers. Built a React/TypeScript dashboard with Leaflet and CSV/Excel export for selected map areas.' },
      { title: 'Validated data & authentication', text: 'Developed site uploads with input validation and PostgreSQL persistence through SQLAlchemy, alongside password hashing, token-based sessions and server-side permission checks for administrator actions.' },
      { title: 'Client delivery & automated checks', text: 'Led team delivery and the final client presentation. Configured GitHub Actions for macOS setup checks, frontend builds, backend health checks and automated backend tests, with deployments to Vercel and Render.' },
    ],
    tags: ['React', 'TypeScript', 'Leaflet', 'Python', 'Flask', 'PostgreSQL'],
    links: [
      { label: 'Try the application', href: 'https://heritage-fire-watch.vercel.app/' },
      { label: 'View source code', href: 'https://github.com/TinyRattleSnake/Fire-Vulnerability-App' },
    ],
    note: 'Registration required. New accounts can sign in immediately.',
    images: [
      { file: 'fire-watch-fuel.webp', label: 'Map dashboard', alt: 'Heritage Fire Watch GIS dashboard with fuel-type layers, map controls and an OpenStreetMap basemap of the Albany region.', caption: 'Regional fuel layers and map controls. Open at full size to explore the interface.' },
      { file: 'fire-watch-upload.jpg', label: 'Site upload', alt: 'Heritage Fire Watch empty site-upload form with site details, optional reference photo and location fields.', caption: 'Record site details, location and an optional reference photo in one workflow.' },
    ],
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
  { title: 'Backend & Data', skills: ['Python / Java', 'Flask / REST APIs', 'SQL / PostgreSQL', 'SQLAlchemy', 'Node.js / MongoDB'] },
  { title: 'AI & Research', skills: ['PyTorch / TensorFlow', 'Hugging Face Diffusers', 'Stable Diffusion', 'ControlNet / IP-Adapter', 'Slurm / GPU workflows'] },
  { title: 'Development tools', skills: ['Git / SVN', 'Linux / Shell', 'Vite / GitHub Actions', 'Automated testing', 'Vercel / Render'] },
] as const;

export const education = [
  { university: 'The University of Western Australia', degree: 'Master of Information Technology', detail: '2024–2026 · WAM 80.6 · Global Excellence Scholarship' },
] as const;
