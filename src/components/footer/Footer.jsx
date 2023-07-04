import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container md:w-auto max-w-[360px]">
        <h1 className="footer__title">Abu Jayed</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link"></a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link"></a>
          </li>

          <li>
            <a href="#contact" className="footer__link"></a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="" className="footer__social-link" target="_blank">
        <box-icon type='logo' name='facebook'></box-icon>
            </a>

            <a href="" className="footer__social-link" target="_blank">
            <box-icon name='linkedin' type='logo' ></box-icon>
            </a>

            <a href="https://github.com" className="footer__social-link" rel="noreferrer" target="_blank">
            <box-icon name='linkedin' type='logo' ></box-icon>
            </a>
        </div>

        <span className="footer__copy">
          &#169; Md Abu Jayed. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;