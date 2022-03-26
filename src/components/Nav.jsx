import logo from "../images/logo-white.svg";
const Nav = () => {
  return (
    <nav className="navigation">
      <img className="navigation__logo" src={logo} alt="zecco-img" />

      <ul className="navigation__links">
        <li className="navigation__list-item">
          <a className="navigation__link" href="#about">
            About us
          </a>
        </li>
        <li className="navigation__list-item">
          <a className="navigation__link" href="#services">
            Services
          </a>
        </li>
        <li className="navigation__list-item">
          <a
            className="navigation__link navigation__link--contact"
            href="#contact"
          >
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
