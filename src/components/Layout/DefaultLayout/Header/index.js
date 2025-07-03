import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('header')}>
      <div className={`container ${cx('header_content')}`}>
        <div className={cx('header_brand')}>
          <div className={cx('logo_icon')}>
            <i className='bx bx-code-alt'></i>
          </div>
          <h1 className={cx('logo')}>My Portfolio</h1>
        </div>
        <div className={cx('header_navbar')}>
          <div className={cx('item')}>
            <div className={cx('item_icon')}>
              <i className='bx bx-home'></i>
            </div>
            <div className={cx('item_nav')}>
              <a href="#home">Home</a>
            </div>
          </div>
          <div className={cx('item')}>
            <div className={cx('item_icon')}>
              <i className='bx bx-id-card'></i>
            </div>
            <div className={cx('item_nav')}>
              <a href="#about">About</a>
            </div>
          </div>
          <div className={cx('item')}>
            <div className={cx('item_icon')}>
              <i className='bx bx-bar-chart-alt-2'></i>
            </div>
            <div className={cx('item_nav')}>
              <a href="#skills">Skills</a>
            </div>
          </div>
          <div className={cx('item')}>
            <div className={cx('item_icon')}>
              <i className='bx bxs-badge-check'></i>
            </div>
            <div className={cx('item_nav')}>
              <a href="#certificates">Certificates</a>
            </div>
          </div>
          <div className={cx('item')}>
            <div className={cx('item_icon')}>
              <i className='bx bx-code-alt'></i>
            </div>
            <div className={cx('item_nav')}>
              <a href="#projects">Projects</a>
            </div>
          </div>
          <div className={cx('item')}>
            <div className={cx('item_icon')}>
              <i className='bx bx-envelope'></i>
            </div>
            <div className={cx('item_nav')}>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
