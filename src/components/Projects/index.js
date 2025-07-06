import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Projects.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles);

const PROJECTS_DATA = {
  allprojects: [
    {
      icon: 'bx bx bx-id-card text-5xl',
      name: 'Personal Portfolio',
      subname: 'Frontend • 2025 • Completed',
      feature: ['Bootstrap CSS', 'Dark/light mode', 'Animated tabs', 'Project & skill showcase'],
      language: ['React', 'Bootstrap'],
    },
    {
      icon: 'bx bx bx-id-card text-5xl',
      name: 'Personal Portfolio',
      subname: 'Frontend • 2025 • Completed',
      feature: ['Bootstrap CSS', 'Dark/light mode', 'Animated tabs', 'Project & skill showcase'],
      language: ['React', 'Bootstrap'],
    },
    {
      icon: 'bx bx bx-id-card text-5xl',
      name: 'Personal Portfolio',
      subname: 'Frontend • 2025 • Completed',
      feature: ['Bootstrap CSS', 'Dark/light mode', 'Animated tabs', 'Project & skill showcase'],
      language: ['React', 'Bootstrap'],
    },
    {
      icon: 'bx bx bx-id-card text-5xl',
      name: 'Personal Portfolio',
      subname: 'Frontend • 2025 • Completed',
      feature: ['Bootstrap CSS', 'Dark/light mode', 'Animated tabs', 'Project & skill showcase'],
      language: ['React', 'Bootstrap'],
    },
    {
      icon: 'bx bx bx-id-card text-5xl',
      name: 'Personal Portfolio',
      subname: 'Frontend • 2025 • Completed',
      feature: ['Bootstrap CSS', 'Dark/light mode', 'Animated tabs', 'Project & skill showcase'],
      language: ['React', 'Bootstrap'],
    },
    {
      icon: 'bx bx bx-id-card text-5xl',
      name: 'Personal Portfolio',
      subname: 'Frontend • 2025 • Completed',
      feature: ['Bootstrap CSS', 'Dark/light mode', 'Animated tabs', 'Project & skill showcase'],
      language: ['React', 'Bootstrap'],
    },
  ],
  frontend: [
    {
      icon: 'bx bx bx-id-card text-5xl',
      name: 'Personal Portfolio',
      subname: 'Frontend • 2025 • Completed',
      feature: ['Tailwind CSS', 'Dark/light mode', 'Animated tabs', 'Project & skill showcase'],
      language: ['React', 'Tailwind'],
    },
    {
      icon: 'bx bx bx-id-card text-5xl',
      name: 'Personal Portfolio',
      subname: 'Frontend • 2025 • Completed',
      feature: ['Tailwind CSS', 'Dark/light mode', 'Animated tabs', 'Project & skill showcase'],
      language: ['React', 'Tailwind'],
    },
    {
      icon: 'bx bx bx-id-card text-5xl',
      name: 'Personal Portfolio',
      subname: 'Frontend • 2025 • Completed',
      feature: ['Tailwind CSS', 'Dark/light mode', 'Animated tabs', 'Project & skill showcase'],
      language: ['React', 'Tailwind'],
    },
  ],
  backend: [
    {
      icon: 'bx bx bx-id-card text-5xl',
      name: 'Personal Portfolio',
      subname: 'Frontend • 2025 • Completed',
      feature: ['Tailwind CSS', 'Dark/light mode', 'Animated tabs', 'Project & skill showcase'],
      language: ['React', 'Tailwind'],
    },
    {
      icon: 'bx bx bx-id-card text-5xl',
      name: 'Personal Portfolio',
      subname: 'Frontend • 2025 • Completed',
      feature: ['Tailwind CSS', 'Dark/light mode', 'Animated tabs', 'Project & skill showcase'],
      language: ['React', 'Tailwind'],
    },
    {
      icon: 'bx bx bx-id-card text-5xl',
      name: 'Personal Portfolio',
      subname: 'Frontend • 2025 • Completed',
      feature: ['Tailwind CSS', 'Dark/light mode', 'Animated tabs', 'Project & skill showcase'],
      language: ['React', 'Tailwind'],
    },
  ],
  fullstack: [
    {
      icon: 'bx bx bx-id-card text-5xl',
      name: 'Personal Portfolio',
      subname: 'Frontend • 2025 • Completed',
      feature: ['Tailwind CSS', 'Dark/light mode', 'Animated tabs', 'Project & skill showcase'],
      language: ['React', 'Tailwind'],
    },
    {
      icon: 'bx bx bx-id-card text-5xl',
      name: 'Personal Portfolio',
      subname: 'Frontend • 2025 • Completed',
      feature: ['Tailwind CSS', 'Dark/light mode', 'Animated tabs', 'Project & skill showcase'],
      language: ['React', 'Tailwind'],
    },
    {
      icon: 'bx bx bx-id-card text-5xl',
      name: 'Personal Portfolio',
      subname: 'Frontend • 2025 • Completed',
      feature: ['Tailwind CSS', 'Dark/light mode', 'Animated tabs', 'Project & skill showcase'],
      language: ['React', 'Tailwind'],
    },
  ],
};

function Projects() {
  const [selectedType, setSelectedType] = useState('allprojects');

  return (
    <section id="projects" className={cx('projects')}>
      <h1 className={cx('projects-title')}>Projects</h1>
      <p className={cx('projects-paragraph')}>
        Explore some of the works I've built — from slick frontend UIs, powerful backend APIs, to fullstack apps
        connected with real-time databases.
      </p>

      <div className={cx('projects-types')}>
        {['allprojects', 'frontend', 'backend', 'fullstack'].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={cx('projects-types-box', { active: selectedType === type })}
          >
            <div className={cx('projects-types-box-item')}>
              <i
                className={`bx ${
                  type === 'allprojects'
                    ? 'bx-grid-alt'
                    : type === 'frontend'
                    ? 'bx-desktop'
                    : type === 'backend'
                    ? 'bx-server'
                    : 'bx-code-alt'
                }`}
              ></i>
              {type === 'allprojects'
                ? 'All Projects'
                : type === 'frontend'
                ? 'Frontend'
                : type === 'backend'
                ? 'Backend'
                : 'Fullstack'}
            </div>
          </button>
        ))}
      </div>

      <div className={cx('projects-all')}>
        <div className={cx('projects-row')}>
          {PROJECTS_DATA[selectedType].map((project, index) => (
            <div className={cx('projects-one')} key={index}>
              <div className={cx('projects-box-title')}>
                <div className={cx('projects-one-box')}>
                  <i className={`bx ${project.icon} text-5xl`} style={{ color: project.color }}></i>
                </div>
                <div className={cx('projects-all-name')}>
                  <h3>{project.name}</h3>
                  <span className={cx('projects-subname')}>{project.subname}</span>
                </div>
              </div>
              <div className={cx('projects-features')}>
                <h4>Features:</h4>
                <ul>
                  {project.feature.map((f, i) => (
                    <li key={i}>
                      <i className="bx bx-check text-lg"></i>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={cx('projects-languages')}>
                <h4>Technologies:</h4>
                <div className={cx('projects-language-list')}>
                  {project.language.map((lang, i) => (
                    <div className={cx('language-tag')} key={i}>
                        {lang}
                    </div>
                  ))}
                </div>
              </div>

              <div className={cx('button-box')}>
                <button className={cx('button-box-demo')}>
                  <i className='bx bx-link-external'></i>
                  <span>Demo</span>
                </button>
                <button className={cx('button-box-code')}>
                  <i className='bx bx-code'></i>
                  <span>Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
