import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles);

const CONTACT_DATA = {
  github: [
    {
      name: 'GitHub',
      subname: 'Explore my code & projects',
      icon: 'bx bxl-github text-xl',
      src: 'https://github.com/ToTrungKiet',
    },
  ],
  facebook: [
    {
      name: 'Facebook',
      subname: 'My visual journal & life updates',
      icon: 'bx bxl-facebook text-lg',
      src: 'https://www.facebook.com/kiet.trung.752/',
    },
  ],
  instagram: [
    {
      name: 'Instagram',
      subname: 'My visual journal & life updates',
      icon: 'bx bxl-instagram text-xl',
      src: 'https://www.instagram.com/kevindkid/',
    },
  ],
};

const INPUT_DATA = {
  yourname: { placeholder: 'Your Name', type: 'text' },
  youremail: { placeholder: 'Your Email', type: 'email' },
  yourMessage: { placeholder: 'Your Message', type: 'text', isTextarea: true },
};

function Contact() {
  return (
    <section id="contact" className={cx('contact')}>
      <h1 className={cx('contact-title')}>Contact</h1>
      <p className={cx('contact-paragraph')}>
        If you are interested in my work, have a project you would like to collaborate on, or simply want to connect and
        chat, please do not hesitate to contact me! I am always ready to listen and respond as soon as possible.
      </p>

      <div className={cx('contact-bigbox')}>
        {/* Social links */}
        <div className={cx('contact-bigbox1')}>
          {Object.values(CONTACT_DATA)
            .flat()
            .map((item) => (
              <div className={cx('button-link-social')} key={item.name}>
                <a
                  href={item.src}
                  className={cx('contact-one')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={cx('contact-one-box')}>
                    <i className={`bx ${item.icon}`}></i>
                  </div>
                  <div className={cx('contact-title-name')}>
                    <h3>{item.name}</h3>
                    <span>{item.subname}</span>
                  </div>
                  <i className="bx bx-chevron-right text-2xl text-gray-800 dark:text-white"></i>
                </a>
              </div>
            ))}
        </div>

        {/* Message form */}
        <div className={cx('contact-bigbox2')}>
          <div className={cx('title-message')}>
            <i className="bx bx-envelope text-lg"></i>
            <span>Send Me a Message</span>
          </div>

          <div className={cx('inputs-desc')}>
            {Object.entries(INPUT_DATA).map(([key, item]) => (
              <div className={cx('input-one')} key={key}>
                {item.isTextarea ? (
                  <textarea placeholder={item.placeholder}></textarea>
                ) : (
                  <input type={item.type} placeholder={item.placeholder} />
                )}
              </div>
            ))}
            <button className={cx('submit')}>
              <span>Send</span>
              <i className="bx bx-send text-[1.2rem] translate-y-[1px]"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
