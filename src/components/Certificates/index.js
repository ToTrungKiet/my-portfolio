import classNames from 'classnames/bind';
import styles from './Certificates.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import CertificateHTML from '~/assets/images/CertificateHTML.png'
import CertificateJSAdvanced from '~/assets/images/CertificateJSAdvanced.png'
import CertificateJSBasic from '~/assets/images/CertificateJSBasic.png'
import CertificateResponsive from '~/assets/images/CertificateResponsive.png'

const cx = classNames.bind(styles);

const CERTIFICATES_DATA = [
  CertificateHTML,
  CertificateJSAdvanced,
  CertificateJSBasic,
  CertificateResponsive
]

function Certificates() {
  return (
    <section id="certificates" className={cx('certificates')}>
      <h1 className={cx('certificates-title')}>Certificates</h1>
      <p className={cx('certificates-paragraph')}>After a process of persistent training and continuous learning, I am proud to have completed and received certificates in important languages ​​and technologies.</p>

      <div className={cx('certificates-more')}>
        <div className={cx('certificates-row')}>
          {CERTIFICATES_DATA.map((certificate, index) => (
            <div className={cx('certificates-one')} key={index}>
                <img src={certificate} alt='Certificate' className={cx('certificate-img')} aria-hidden="true"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
