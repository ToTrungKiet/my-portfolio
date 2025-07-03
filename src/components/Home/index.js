import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '~/assets/images/avatar.jpg';

const cx = classNames.bind(styles);

function Home() {
  return (
      <section id='home' className={cx('home')}>
      <div className={cx('home_introduce')}>
        <div className={cx('home-title')}>
          <h1>Hi, I'm Kevin D Kid 👋</h1>
        </div>
        <div className={cx('home-position')}>
          <h2>Junior IT student</h2>
        </div>
        <div className={cx('home-description')}>
          <p>
            I'm a third-year Information Technology student with a strong passion for creating dynamic and responsive web applications. I specialize in fullstack development using modern technologies like React, Node.js, Express, and SQL Server.
            I enjoy turning ideas into real-world digital experiences, focusing on clean code, user-centered design, and performance optimization.
            Currently, I'm looking for opportunities to learn, grow, and contribute to real-world projects alongside experienced developers.
          </p>
        </div>
        <div className={cx('home_social')}>
          <p>Follow me on:</p>
          <div className={cx('home_social-link')}>
            <button className={cx('home_social-link-item')}>
              <a href='https://github.com/ToTrungKiet' target='_blank' rel='noopener noreferrer' title='GitHub'>
                <i className='bx bxl-github text-lg'></i>
              </a>
            </button>
            <button className={cx('home_social-link-item')}>
              <a href='https://www.instagram.com/kevindkid/' target='_blank' rel='noopener noreferrer' title='Instagram'>
                <i className='bx bxl-instagram text-lg'></i>
              </a>
            </button>
            <button className={cx('home_social-link-item')}>
              <a href='https://www.facebook.com/kiet.trung.752/' target='_blank' rel='noopener noreferrer' title='Facebook'>
                <i className='bx bxl-facebook text-lg'></i>
              </a>
            </button>
          </div>
        </div>
        <div className={cx('home_explore_dowload')}>
          <button className={cx('btn_explore')}>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <i className='bx bx-download'></i>
                <p>Explore My Project</p>
              </a>
          </button>
          <button className={cx('btn_dowload')}>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <i className='bx bx-envelope'></i>
              <p>Dowload My CV</p>
            </a>
          </button>
        </div>
        <div className={cx('QuickStats')}>
          <i className='bx bx-bar-chart-alt text-base'></i>
          Quick stats:
        </div>
        <div className={cx('home_info-list')}>
          <button className={cx('home_info')}>
            <div>
              <i className='bx bx-briefcase'></i>
              <p>0+ Years</p>
              <span>Experience</span>
            </div>
          </button>
          <button className={cx('home_info')}>
            <div>
              <i className='bx bxl-javascript'></i>
              <p>JavaScript</p>
              <span>Main Language</span>
            </div>
          </button>
          <button className={cx('home_info')}>
            <div>
              <i className='bx bx-code-alt'></i>
              <p>0 Projects</p>
              <span>Total Projects</span>
            </div>
          </button>
          <button className={cx('home_info')}>
            <div>
              <i className='bx bx-award'></i>
              <p>2.94/4.00</p>
              <span>GPA</span>
            </div>
          </button>
        </div>
      </div>
      <div className={cx('home_image')}>
        <div className={cx('home_image-language1')}>
          <i className='bx bxl-html5' style={{ color: '#e34c26' }}></i>
        </div>
        <div className={cx('home_image-language2')}>
          <i className='bx bxl-css3' style={{ color: '#264de4' }}></i>
        </div>
        <div className={cx('home_image-img')}>
          <img src={avatar} alt='Avatar' className={cx('home_avatar')} />
        </div>
        <div className={cx('home_image-language3')}>
          <i className='bx bxl-javascript' style={{ color: '#f0db4f' }}></i>
        </div>
        <div className={cx('home_image-language4')}>
          <i className='bx bxl-react' style={{ color: '#61DBFB' }}></i>
        </div>
      </div>
      </section>
  )
}

export default Home;
