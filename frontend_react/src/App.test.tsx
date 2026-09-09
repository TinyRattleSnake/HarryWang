import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('portfolio', () => {
  it('provides navigation and links to the published projects', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /software developer/i, level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view projects/i })).toHaveAttribute('href', '#work');
    expect(screen.getByRole('link', { name: /visit live app/i })).toHaveAttribute('href', 'https://heritage-fire-watch.vercel.app/');
    expect(screen.getByRole('link', { name: /view code & experiments/i })).toHaveAttribute('href', 'https://github.com/CloudWang-UWA/CloudNet');
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
