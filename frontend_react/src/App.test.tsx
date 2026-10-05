import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('portfolio', () => {
  it('provides navigation and links to the published projects', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /software developer/i, level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view projects/i })).toHaveAttribute('href', '#work');
    expect(screen.getByRole('link', { name: /try the application/i })).toHaveAttribute('href', 'https://heritage-fire-watch.vercel.app/');
    expect(screen.getByRole('link', { name: /view code & experiments/i })).toHaveAttribute('href', 'https://github.com/CloudWang-UWA/CloudNet');
  });

  it('presents the current access requirements and compact Fire Watch preview', () => {
    render(<App />);
    const project = within(screen.getByRole('article', { name: 'Heritage Fire Watch' }));
    expect(project.getByText('Registration required. New accounts can sign in immediately.')).toBeInTheDocument();
    expect(project.queryByText(/administrator approval/i)).not.toBeInTheDocument();
    expect(project.getByRole('link', { name: /view source code/i })).toHaveAttribute('href', 'https://github.com/TinyRattleSnake/Fire-Vulnerability-App');
    const upload = project.getByRole('button', { name: 'Site upload' });
    fireEvent.click(upload);
    expect(upload).toHaveAttribute('aria-pressed', 'true');
    expect(project.getByRole('img')).toHaveAttribute('src', expect.stringContaining('projects/fire-watch-upload.jpg'));
    expect(project.getByRole('link', { name: /open heritage fire watch site upload at full size/i })).toHaveAttribute('href', expect.stringContaining('projects/fire-watch-upload.jpg'));
    fireEvent.click(project.getByRole('button', { name: 'Map dashboard' }));
    expect(project.getByRole('img')).toHaveAttribute('src', expect.stringContaining('projects/fire-watch-fuel.webp'));
  });

  it('keeps the profile focused on skills and the selected education', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/full-stack web applications/i);
    expect(screen.getByText(/no sponsorship required/i)).toBeInTheDocument();
    expect(document.querySelectorAll('.about__education article')).toHaveLength(1);
    expect(screen.getByRole('heading', { name: 'The University of Western Australia' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /resume|download/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /HTML5 games/i })).not.toBeInTheDocument();
  });

  it('switches the CloudNet gallery and full-size link together', () => {
    render(<App />);
    const project = within(screen.getByRole('article', { name: 'CloudNet' }));
    const architecture = project.getByRole('button', { name: 'Architecture' });
    fireEvent.click(architecture);
    expect(architecture).toHaveAttribute('aria-pressed', 'true');
    expect(project.getByRole('img')).toHaveAttribute('src', expect.stringContaining('projects/cloudnet-architecture.webp'));
    expect(project.getByRole('link', { name: /open cloudnet architecture at full size/i })).toHaveAttribute('href', expect.stringContaining('projects/cloudnet-architecture.webp'));
    fireEvent.click(project.getByRole('button', { name: 'Generated scenes' }));
    expect(project.getByRole('img')).toHaveAttribute('src', expect.stringContaining('projects/cloudnet-results.webp'));
  });
});
