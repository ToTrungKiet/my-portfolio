import classNames from 'classnames/bind';
import styles from './About.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '~/assets/images/avatar.jpg';

const cx = classNames.bind(styles);

function About() {
  return (
    <section id="about" className={cx('about')}>
      <h1 className={cx('about-title')}>About Me</h1>
      <p className={cx('about-paragraph')}>Discover my journey, passions, and the story behind my work</p>
      <div className={cx('about-content')}>
        <div className={cx('avatar-introduce')}>
          <div className={cx('about-avatar')}>
            <img src={avatar} alt="avatar" className={cx('avatar')} />
          </div>
          <div className={cx('about-introduce')}>
            <div>
              <div className={cx('about-introduce1')}>
                <div className={cx('about-introduce-title')}>
                  <div className={cx('about-logo')}>
                    <i className="bx bx-info-circle text-xl"></i>
                  </div>
                  <h3>Who Am I</h3>
                </div>
                <p>
                  I'm a frontend developer who crafts responsive, interactive, and clean UIs. With a background in
                  Informatics Engineering, I blend design sense with technical logic.
                </p>
              </div>
              <div className={cx('about-introduce2')}>
                <div className={cx('about-introduce-title')}>
                  <div className={cx('about-logo')}>
                    <i className="bx bx-bulb text-xl"></i>
                  </div>
                  <h3>My Approach</h3>
                </div>
                <p>
                  I focus on user-centered design, performance, and accessibility always evolving with modern tech to
                  deliver seamless digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('personal-info')}>
              <div className={cx('personal-logo')}>
                <i className="bx bx-info-circle text-xl"></i>
              </div>
              <h2 className={cx('personal-title')}>Personal Info</h2>
            </div>
            <div className={cx('about-info')}>
              <div className={cx('item-4')}>
                <div className={cx('about-info-item')}>
                  <div className={cx('about-logo')}>
                    <i className="bx bx-id-card text-xl"></i>
                  </div>
                  <div className={cx('about-info-detail')}>
                    <span>Name:</span>
                    <span> To Trung Kiet</span>
                  </div>
                </div>
                <div className={cx('about-info-item')}>
                  <div className={cx('about-logo')}>
                    <i className="bx bx-map text-xl"></i>
                  </div>
                  <div className={cx('about-info-detail')}>
                    <span>Place of Birth:</span>
                    <span> Kien Giang, VietNam</span>
                  </div>
                </div>
                <div className={cx('about-info-item')}>
                  <div className={cx('about-logo')}>
                    <i className="bx bx-phone text-xl"></i>
                  </div>
                  <div className={cx('about-info-detail')}>
                    <span>Phone:</span>
                    <span> +84 981959702</span>
                  </div>
                </div>
                <div className={cx('about-info-item')}>
                  <div className={cx('about-logo')}>
                    <i className="bx bx-calendar text-xl"></i>
                  </div>
                  <div className={cx('about-info-detail')}>
                    <span>Date of Birth:</span>
                    <span> October,26-2003</span>
                  </div>
                </div>
              </div>
              <div className={cx('item-3')}>
                <div className={cx('about-info-item')}>
                  <div className={cx('about-logo')}>
                    <i className="bx bx-envelope text-xl"></i>
                  </div>
                  <div className={cx('about-info-detail')}>
                    <span>Email:</span>
                    <span> totrungkiet26102003@gmail.com</span>
                  </div>
                </div>
                <div className={cx('about-info-item')}>
                  <div className={cx('about-logo')}>
                    <i className="bx bx-book text-xl"></i>
                  </div>
                  <div className={cx('about-info-detail')}>
                    <span>Education:</span>
                    <span> Hutech University</span>
                  </div>
                </div>
                <div className={cx('about-info-item')}>
                  <div className={cx('about-logo')}>
                    <i className="bx bx-award text-xl"></i>
                  </div>
                  <div className={cx('about-info-detail')}>
                    <span>GPA:</span>
                    <span> 2.94 / 4.00</span>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </section>
  );
}

export default About;
