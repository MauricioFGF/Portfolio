import PropTypes from "prop-types";
import "./index.css";

function Footer(data) {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Mauricio</h1>
            <span className="footer__subtitle">Frontend developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#sobre" className="footer__link">
                Sobre mim
              </a>
            </li>
            <li>
              <a href="#habilidades" className="footer__link">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#projetos" className="footer__link">
                Projetos
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/mauricio-guimar%C3%A3es-5312a41a6/"
              target="__blank"
              className="footer__social"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://github.com/MauricioFGF"
              target="__blank"
              className="footer__social"
            >
              <i className="uil uil-github-alt"></i>
            </a>
            <a
              href="https://wa.me/5581997670898"
              target="__blank"
              className="footer__social"
            >
              <i className="uil uil-whatsapp"></i>
            </a>
          </div>
        </div>
        <p className="footer__copy">&#169; Bedimcode. All right reserved</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  data: PropTypes.object,
};

Footer.defaultProps = {
  data: {},
};

export default Footer;
