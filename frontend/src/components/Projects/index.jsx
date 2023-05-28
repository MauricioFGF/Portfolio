import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";
import tetris from "../../assets/tetris.avif";
import airbnb from "../../assets/airbnb.avif";
import halloween from "../../assets/halloween.png";

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
                <img
                  src={tetris}
                  alt="project_img"
                  className="portfolio__img"
                />

                <div className="portfolio__data">
                  <h3 className="portfolio__title">Tetris</h3>
                  <p className="portfolio__description">
                    Reedição do jogo Tetris
                  </p>
                  <a
                    href="https://mauriciofgf.github.io/Tetris/"
                    target="__blank"
                    className="button button--flex button--small portfolio__button"
                    aria-label="Read to my tetris project"
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
                <img
                  src={airbnb}
                  alt="project_img"
                  className="portfolio__img"
                />

                <div className="portfolio__data">
                  <h3 className="portfolio__title">Airbnb</h3>
                  <p className="portfolio__description">
                    Site baseado do airbnb de aluguel de imovél para viagens.
                  </p>
                  <a
                    href="https://airbnb-trip.vercel.app/"
                    target="__blank"
                    className="button button--flex button--small portfolio__button"
                    aria-label="Read to my 404 page"
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
                <img
                  src={halloween}
                  alt="project_img"
                  className="portfolio__img"
                />

                <div className="portfolio__data">
                  <h3 className="portfolio__title">Halloween 💀</h3>
                  <p className="portfolio__description">
                    Website responsivo de vendas com tema de halloween.
                  </p>
                  <a
                    href="https://halloween-three.vercel.app/"
                    target="__blank"
                    className="button button--flex button--small portfolio__button"
                    aria-label="Read to my film page"
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
  data: PropTypes.array,
};

Projects.defaultProps = {
  data: [],
};

export default Projects;
