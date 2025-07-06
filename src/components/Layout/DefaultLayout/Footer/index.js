import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import logoUniversity from '~/assets/images/logoUniversity.png';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('footer')}>
      <div className={cx(`container ${cx('footer_content')}`)}>
        <div className={cx('footer-desciption')}>
          <div className={cx('footer-title')}>
            <i className="bx bx-code-alt text-gray-800 dark:text-white text-xl"></i>
            <h3>Kevin D Kid</h3>
          </div>
          <p>
            Frontend Developer specializing in UI/UX, modern web technologies, and building smooth digital experiences
            with clean code & creative flow.
          </p>
        </div>
        <div className={cx('footer-desciption')}>
          <div className={cx('footer-title-nav')}>
            <i className="bx bx-navigation text-base"></i>
            <h4>Navigation</h4>
          </div>
          <ul className={cx('list-nav')}>
            <li>
              <a href="#home" className={cx('item-nav')}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={cx('item-nav')}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" className={cx('item-nav')}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={cx('item-nav')}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={cx('footer-desciption')}>
          <div className={cx('footer-socials-title')}>
            <i className="bx bx-share-alt text-base"></i>
            <h4>Find Me Online</h4>
          </div>
          <div className={cx('link-socials')}>
            <a href="https://github.com/ToTrungKiet" className={cx('link-socials-box')} target="blank">
              <i className="bx bxl-github text-xl"></i>
            </a>
            <a href="https://www.facebook.com/kiet.trung.752/" className={cx('link-socials-box')} target="blank">
              <i className="bx bx bxl-facebook text-lg"></i>
            </a>
            <a href="https://www.instagram.com/kevindkid/" className={cx('link-socials-box')} target="blank">
              <i className="bx bx bxl-instagram text-xl"></i>
            </a>
          </div>
        </div>
        <div className={cx('footer-desciption')}>
          <div className={cx('footer-university-box')}>
            <img src={logoUniversity} alt="Hutech University" />
            <h3>Hutech University</h3>
          </div>
        </div>
      </div>
      <hr className={cx('footer-line')} />
      <div className={cx(`container ${cx('developer')}`)}>
        <div className={cx('PP-ToU-SM')}>
            <a href='#' className={cx('PP')}>Privacy Policy</a>
            <a href='#' className={cx('ToU')}>Term of Use</a>
            <a href='#' className={cx('SM')}>Sitemap</a>
        </div>
        <div className={cx('developer-release')}>
          © 2025 Kevin D Kid. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
