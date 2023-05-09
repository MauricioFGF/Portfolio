import PropTypes from "prop-types";
import moment from "moment";
import "./index.css";
import me from "../../assets/me.png";
import cv from "../../assets/Mauricio-Cv.pdf";

function About(data) {
  const getYearsExperience = () => {
    const oldDate = moment("05/08/2021").format("DD/MM/YYYY");
    const diff = moment().diff(oldDate);
    const years = moment.duration(diff).asYears();
    return Math.round(years);
  };

  return (
    <section className="about section" id="sobre">
      <h2 className="section__title">Sobre Mim</h2>
      <span className="section__subtitle">Minha Introdução</span>

      <div className="about__container container grid">
        <img src={me} alt="" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            {data?.text ||
              "Desenvolvedor Front-End com sólida habilidade na resolução de problemas, desenvolvimento e prototipação de software. Busco continuamente compartilhar e adquirir novos conhecimentos, criar novas relações e impactar o mundo positivamente através da tecnologia."}
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">{getYearsExperience()}+</span>
              <span className="about__info-name">
                Anos de <br /> experiência
              </span>
            </div>
            <div>
              <span className="about__info-title">23+</span>
              <span className="about__info-name">
                Projetos <br /> desenvolvidos
              </span>
            </div>
            <div>
              <span className="about__info-title">2+</span>
              <span className="about__info-name">
                Empresas <br /> Trabalhadas
              </span>
            </div>
          </div>

          <div className="about__buttons">
            <a download="" href={cv} className="button button--flex">
              <span className="span-button">Download CV</span>
              <div className="liquid"></div>
              <i className="uil uil-download-alt button__icon span-button "></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  data: PropTypes.object,
};

About.defaultProps = {
  data: {},
};

export default About;
