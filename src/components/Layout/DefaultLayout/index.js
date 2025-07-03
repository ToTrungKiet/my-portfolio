import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Footer from './Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main className={cx('content')}>
        <div className='container'>{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
