import twitter from "../images/twitter.svg";
import instagram from "../images/insta.svg";
import logo from "../images/logo-white.svg";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <img src={logo} className="footer__logo" alt="zecco-img" />
      <div className="footer__flex-container">
        <div className="footer__info">
          <p className="footer__paragraph">
            3rd Floor Rutland House, 18 Hilton Street, Manchester UK, M1 1FR
          </p>

          <a className="footer__email" href="mailto:hello@zecco.com">
            hello@zecco.com
          </a>
        </div>
        <div className="footer__links">
          <a className="footer__link" href="#about">
            About us
          </a>
          <a className="footer__link" href="#services">
            Services
          </a>
          <a className="footer__link" href="#contact">
            Contact us
          </a>
        </div>

        <div className="footer__social__links">
          <div className="footer__twitter-container">
            <a target="_blank" rel="noreferrer" href="https://twitter.com/">
              <img src={twitter} alt="" />
            </a>
          </div>

          <div className="footer__instagram-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/"
            >
              <img src={instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
