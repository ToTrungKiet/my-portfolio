import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Skills.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles);

const SKILLS_DATA = {
  frontend: [
    { name: 'HTML', icon: 'bxl-html5', color: '#e34c26', level: 'Advanced' },
    { name: 'CSS', icon: 'bxl-css3', color: '#264de4', level: 'Advanced' },
    { name: 'JavaScript', icon: 'bxl-javascript', color: '#f0db4f', level: 'Intermediate' },
    { name: 'React', icon: 'bxl-react', color: '#61dafb', level: 'Intermediate' },
    { name: 'Bootstrap CSS', icon: 'bxl-bootstrap', color: '#7952b3', level: 'Advanced' },
  ],
  backend: [
    { name: 'Node.js', icon: 'bxl-nodejs', color: '#3c873a', level: 'Intermediate' },
    { name: 'Express.js', icon: 'bx-server', color: '#ffffff', level: 'Intermediate' },
    { name: 'MongoDB', icon: 'bxl-mongodb', color: '#4DB33D', level: 'Intermediate' },
    { name: 'ASP.NET', icon: 'bx-code-curly', color: '#512BD4', level: 'Intermediate' },
    { name: 'SQL Server', icon: 'bx-data', color: '#CC2927', level: 'Intermediate' },
  ],
  other: [
    { name: 'Git', icon: 'bxl-git', color: '#f05032', level: 'Intermediate' },
    { name: 'GitHub', icon: 'bxl-github', color: '#ffffff', level: 'Intermediate' },
    { name: 'Postman', icon: 'bx-cloud-download', color: '#ff6c37', level: 'Intermediate' },
  ],
};

function Skills() {
  const [selectedType, setSelectedType] = useState('frontend');

  return (
    <section id="skills" className={cx('skills')}>
      <h1 className={cx('skills-title')}>Skills</h1>
      <p className={cx('skills-paragraph')}>Tools and technologies I’ve mastered or currently exploring.</p>

      <div className={cx('skills-types')}>
        {['frontend', 'backend', 'other'].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={cx('skills-types-box', { active: selectedType === type })}
          >
            <div className={cx('skills-types-box-item')}>
              <i className={`bx ${
                type === 'frontend' ? 'bx-code-alt' :
                type === 'backend' ? 'bx-server' :
                'bx-wrench'
              }`}></i>
              {type === 'frontend' ? 'Frontend' : type === 'backend' ? 'Backend' : 'Other Tools'}
            </div>
          </button>
        ))}
      </div>

      <div className={cx('skills-languages')}>
        <div className={cx('skills-row')}>
          {SKILLS_DATA[selectedType].map((skill, index) => (
            <div className={cx('skills-one-language')} key={index}>
              <div className={cx('skills-one-language-box')}>
                <i className={`bx ${skill.icon}`} style={{ color: skill.color }}></i>
              </div>
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
