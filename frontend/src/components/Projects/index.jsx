import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";
import tetris from "../../assets/tetris.png";
import img404 from "../../assets/404.png";
import moovie from "../../assets/moovie.png";

function Projects(data) {
  return (
    <section className="portfolio section" id="projetos">
      <h2 className="section__title">Projetos</h2>
      <span className="section__subtitle">Trabalhos mais recentes</span>

      <div className="portfolio__container container">
        <div>
          <Swiper
            loop={true}
            navigation={false}
            pagination={{ clickable: true }}
            mousewheel={true}
            modules={[Mousewheel, Navigation, Pagination]}
            className="mySwiper"
          >
            {/* 1 */}
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={tetris} alt="" className="portfolio__img" />

                <div className="portfolio__data">
                  <h3 className="portfolio__title">Tetris</h3>
                  <p className="portfolio__description">
                    Explorando o título que fez sucesso nos anos 90, tetris tem
                    por objetivo montar um quebra-cabeça encaixando peças de
                    diferentes formatos capazes de girar sobre o próprio eixo em
                    apenas quatro posições diferentes.
                  </p>
                  <a
                    href="https://mauriciofgf.github.io/Tetris/"
                    target="__blank"
                    className="button button--flex button--small portfolio__button"
                  >
                    <span className="span-button">Demo</span>
                    <div className="liquid"></div>
                    <i className="uil uil-arrow-right button__icon span-button"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            {/* 2 */}
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={img404} alt="" className="portfolio__img" />

                <div className="portfolio__data">
                  <h3 className="portfolio__title">Erro 404</h3>
                  <p className="portfolio__description">
                    Site responsivo para erro de requisição 404.
                  </p>
                  <a
                    href="https://mauriciofgf.github.io/notfound-404/"
                    target="__blank"
                    className="button button--flex button--small portfolio__button"
                  >
                    <span className="span-button">Demo</span>
                    <div className="liquid"></div>
                    <i className="uil uil-arrow-right button__icon span-button"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            {/* 3 */}
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={moovie} alt="" className="portfolio__img" />

                <div className="portfolio__data">
                  <h3 className="portfolio__title">Filmes</h3>
                  <p className="portfolio__description">
                    Website responsivo que trás informações sobre os principais
                    filmes da atualidade, como também antigos títulos aclamados
                    pela mídia.
                  </p>
                  <a
                    href="https://mauriciofgf.github.io/Insole/#/home"
                    target="__blank"
                    className="button button--flex button--small portfolio__button"
                  >
                    <span className="span-button">Demo</span>
                    <div className="liquid"></div>
                    <i className="uil uil-arrow-right button__icon span-button"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  data: PropTypes.object,
};

Projects.defaultProps = {
  data: {},
};

export default Projects;
