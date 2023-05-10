import PropTypes from "prop-types";
import "./index.css";

function Home(data) {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social animate__animated animate__backInDown animate__slower">
            <a
              href="https://www.linkedin.com/in/mauricio-guimar%C3%A3es-5312a41a6/"
              className="home__social-icon"
              target="__blank"
              aria-label="Read to my linkedin"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>

            <a
              href="https://github.com/MauricioFGF"
              className="home__social-icon"
              target="__blank"
              aria-label="Read to my github"
            >
              <i className="uil uil-github-alt"></i>
            </a>

            <a
              href="https://wa.me/5581997670898"
              className="home__social-icon"
              target="__blank"
              aria-label="Read to my whatsapp"
            >
              <i className="uil uil-whatsapp"></i>
            </a>
          </div>

          <div className="home__img home__blob animate__animated animate__fadeInRight animate__slow">
            <div className="liquid-blob"></div>
          </div>

          <div className="home__data animate__animated animate__fadeInLeft animate__faster">
            <h1 className="home__title">
              {data?.title || "Olá, sou Mauricio"}
            </h1>
            <span className="home__subtitle" id="home_write" />
            <p className="home__description">
              {data?.description ||
                "Experiência de alto nível em desenvolvimento web e mobile, produzindo trabalhos de qualidade."}
            </p>
            <a
              className="button button--flex"
              target="__blank"
              href={
                screen.width < 568
                  ? "mailto:ferreiramauricio441@gmail.com"
                  : "https://wa.me/5581997670898"
              }
              aria-label="Contact-me"
            >
              <span className="span-button">Contato</span>
              <div className="liquid"></div>
              <i className="uil uil-message button__icon span-button"></i>
            </a>
          </div>
        </div>

        <div className="home__scroll animate__animated animate__fadeInLeft animated__slower">
          <a
            href="#sobre"
            aria-label="Scrolll down"
            className="home__scroll-button button--flex"
          >
            <i className="uil uil-mouse-alt home__scroll-mouse "></i>
            <span className="home__scroll-name">Role para baixo</span>
            <i className="uil uil-arrow-down home__scroll-arrow "></i>
          </a>
        </div>
      </div>
    </section>
  );
}

Home.propTypes = {
  data: PropTypes.object,
};

Home.defaultProps = {
  data: {},
};

export default Home;
