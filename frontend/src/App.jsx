import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper";
import moment from "moment";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./App.css";
import me from "./assets/me.png";
import cv from "./assets/Mauricio-Cv.pdf";
import profile from "./assets/profile.svg";
import portfolio1 from "./assets/portfolio1.jpg";
import portfolio2 from "./assets/portfolio2.jpg";
import portfolio3 from "./assets/portfolio3.jpg";
import { getPortfolioById } from "./routes";

const navItems = [
  { text: "Home", icon: "estate" },
  { text: "Sobre", icon: "user" },
  { text: "Habilidades", icon: "book-alt" },
  { text: "Qualificações", icon: "laptop" },
  { text: "Projetos", icon: "scenery" },
];

const front = [
  { text: "HTML", percentage: "100%" },
  { text: "CSS", percentage: "100%" },
  { text: "JavaScript", percentage: "100%" },
  { text: "React", percentage: "100%" },
];

const back = [
  { text: "DB", percentage: "40%" },
  { text: "Node", percentage: "64%" },
  { text: "Firebase", percentage: "32%" },
  { text: "Python", percentage: "78%" },
];

const design = [
  { text: "Figma", percentage: "42%" },
  { text: "Sketch", percentage: "15%" },
  { text: "Photoshop", percentage: "55%" },
];

const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

function App() {
  const [accordion, setAccordion] = useState("front");
  const [qualification, setQualification] = useState("education");

  const getCurrentTheme = () => {
    return document.body.classList.contains(darkTheme) ? "dark" : "light";
  };
  const getCurrentIcon = () => {
    const themeButton = document.getElementById("theme-button");

    return themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
  };

  const changeTheme = () => {
    const themeButton = document.getElementById("theme-button");

    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };

  const colorById = () => {
    scrollHeader();
    scrollUp();
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.scrollY;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    });
  };

  const scrollHeader = () => {
    const nav = document.getElementById("header");
    if (window.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
  };

  const scrollUp = () => {
    const scrollTop = document.getElementById("scroll-up");
    if (window.scrollY >= 560) scrollTop.classList.add("show-scroll");
    else scrollTop.classList.remove("show-scroll");
  };

  const changeAccordion = (value) => {
    let accordionValue = value;
    if (value === accordion) accordionValue = "";
    setAccordion(accordionValue);
  };

  const changeQualification = (value) => {
    setQualification(value);
  };

  const openMenu = () => {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu) {
      navMenu.classList.add("show-menu");
    }
  };

  const closeMenu = () => {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu) {
      navMenu.classList.remove("show-menu");
    }
  };

  const getYearsExperience = () => {
    const oldDate = moment("05/08/2021").format("DD/MM/YYYY");
    const diff = moment().diff(oldDate);
    const years = moment.duration(diff).asYears();
    return Math.round(years);
  };

  const getPortfolio = async (id) => {
    try {
      const response = await getPortfolioById(id);
      console.log("res", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getPortfolio(1);
    const themeButton = document.getElementById("theme-button");

    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");
    if (selectedTheme && themeButton) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
        iconTheme
      );
    }
    window.addEventListener("scroll", colorById);
  }, []);

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Mauricio
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              {navItems.map((item) => (
                <li className="nav__item" key={item.text} onClick={closeMenu}>
                  <a href={`#${item.text.toLowerCase()}`} className="nav__link">
                    <i className={`uil uil-${item.icon} nav__icon`}></i>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <i
              className="uil uil-times nav__close"
              id="nav-close"
              onClick={closeMenu}
            ></i>
          </div>

          <div className="nav__btns">
            <i
              className="uil uil-moon change-theme"
              id="theme-button"
              onClick={changeTheme}
            ></i>

            <div className="nav__toggle" id="nav-toggle" onClick={openMenu}>
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a
                  href="https://www.linkedin.com/in/mauricio-guimar%C3%A3es-5312a41a6/"
                  className="home__social-icon"
                  target="__blank"
                >
                  <i className="uil uil-linkedin-alt"></i>
                </a>

                <a
                  href="https://github.com/MauricioFGF"
                  className="home__social-icon"
                  target="__blank"
                >
                  <i className="uil uil-github-alt"></i>
                </a>

                <a
                  href="https://wa.me/5581997670898"
                  className="home__social-icon"
                  target="__blank"
                >
                  <i className="uil uil-whatsapp"></i>
                </a>
              </div>
              <div className="home__img">
                <img className="home__blob" src={profile}></img>
              </div>

              <div className="home__data">
                <h1 className="home__title">Olá, sou Mauricio</h1>
                <h3 className="home__subtitle">Frontend developer</h3>
                <p className="home__description">
                  Experiência de alto nível em desenvolvimento web e mobile,
                  produzindo trabalhos de qualidade.
                </p>
                <a
                  href="mailto:ferreiramauricio441@gmail.com"
                  className="button button--flex"
                >
                  Contato <i className="uil uil-message button__icon"></i>
                </a>
              </div>
            </div>

            <div className="home__scroll">
              <a href="#sobre" className="home__scroll-button button--flex">
                <i className="uil uil-mouse-alt home__scroll-mouse "></i>
                <span className="home__scroll-name">Role para baixo</span>
                <i className="uil uil-arrow-down home__scroll-arrow "></i>
              </a>
            </div>
          </div>
        </section>

        <section className="about section" id="sobre">
          <h2 className="section__title">Sobre Mim</h2>
          <span className="section__subtitle">Minha Introdução</span>

          <div className="about__container container grid">
            <img src={me} alt="" className="about__img" />
            <div className="about__data">
              <p className="about__description">
                Desenvolvedor Front-End com sólida habilidade na resolução de
                problemas, desenvolvimento e prototipação de software. Busco
                continuamente compartilhar e adquirir novos conhecimentos, criar
                novas relações e impactar o mundo positivamente através da
                tecnologia.
              </p>
              <div className="about__info">
                <div>
                  <span className="about__info-title">
                    {getYearsExperience()}+
                  </span>
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
                  Download CV{" "}
                  <i className="uil uil-download-alt button__icon "></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section" id="habilidades">
          <h2 className="section__title">Habilidades</h2>
          <span className="section__subtitle">Meu nível técnico</span>

          <div className="skills__container container grid">
            <div>
              <div
                className={`skills__content ${
                  accordion === "front" ? "skills__open" : "skills__close"
                }`}
              >
                <div
                  className="skills__header"
                  onClick={() => changeAccordion("front")}
                >
                  <i className="uil uil-brackets-curly skills__icon"></i>

                  <div>
                    <h1 className="skills__titles">Desenvolvedor front-end</h1>
                    <span className="skills__subtitle">
                      Mais de {getYearsExperience()} anos{" "}
                    </span>
                  </div>

                  <i className="uil uil-angle-down skills__arrow "></i>
                </div>

                <div className="skills__list grid">
                  {front.map((item) => (
                    <div key={item.text} className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">{item.text}</h3>
                        <span className="skills__number">
                          {item.percentage}
                        </span>
                      </div>
                      <div className="skills__bar">
                        <span
                          className="skills__percentage"
                          style={{ width: item.percentage }}
                        ></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`skills__content ${
                  accordion === "back" ? "skills__open" : "skills__close"
                }`}
              >
                <div
                  className="skills__header"
                  onClick={() => changeAccordion("back")}
                >
                  <i className="uil uil-server-network skills__icon "></i>

                  <div>
                    <h1 className="skills__titles">Desenvolvedor back-end</h1>
                    <span className="skills__subtitle">
                      Mais de {getYearsExperience()} anos{" "}
                    </span>
                  </div>

                  <i className="uil uil-angle-down skills__arrow "></i>
                </div>

                <div className="skills__list grid">
                  {back.map((item) => (
                    <div key={item.text} className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">{item.text}</h3>
                        <span className="skills__number">
                          {item.percentage}
                        </span>
                      </div>
                      <div className="skills__bar">
                        <span
                          className="skills__percentage"
                          style={{ width: item.percentage }}
                        ></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div
                className={`skills__content ${
                  accordion === "design" ? "skills__open" : "skills__close"
                }`}
              >
                <div
                  className="skills__header"
                  onClick={() => changeAccordion("design")}
                >
                  <i className="uil uil-swatchbook skills__icon "></i>

                  <div>
                    <h1 className="skills__titles">Designer</h1>
                    <span className="skills__subtitle">
                      Mais de {getYearsExperience()} anos{" "}
                    </span>
                  </div>

                  <i className="uil uil-angle-down skills__arrow "></i>
                </div>

                <div className="skills__list grid">
                  {design.map((item) => (
                    <div key={item.text} className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">{item.text}</h3>
                        <span className="skills__number">
                          {item.percentage}
                        </span>
                      </div>
                      <div className="skills__bar">
                        <span
                          className="skills__percentage"
                          style={{ width: item.percentage }}
                        ></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="qualification section" id="qualificações">
          <h2 className="section__title">Qualificações</h2>
          <span className="section__subtitle">Minha jornada </span>

          <div className="qualification__container container">
            <div className="qualification__tabs">
              <div
                className={`qualification__button button--flex ${
                  qualification === "education" && "qualification__active"
                }`}
                onClick={() => changeQualification("education")}
              >
                <i className="uil uil-graduation-cap qualification__icon"></i>
                Acadêmica
              </div>
              <div
                className={`qualification__button button--flex ${
                  qualification === "work" && "qualification__active"
                }`}
                onClick={() => changeQualification("work")}
              >
                <i className="uil uil-briefcase-alt qualification__icon"></i>
                Profissional
              </div>
            </div>

            <div className="qualification__sections">
              <div
                className={`qualification__content ${
                  qualification === "education" && "qualification__active"
                }`}
                data-content
                id="education"
              >
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">
                      1 Computer Enginner
                    </h3>
                    <span className="qualification__subtitle">
                      Peru - University
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt calendar "></i>
                      2009 - 2014
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">
                      2 Computer Enginner
                    </h3>
                    <span className="qualification__subtitle">
                      Peru - University
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt calendar "></i>
                      2009 - 2014
                    </div>
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">
                      3 Computer Enginner
                    </h3>
                    <span className="qualification__subtitle">
                      Peru - University
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt calendar "></i>
                      2009 - 2014
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">
                      4 Computer Enginner
                    </h3>
                    <span className="qualification__subtitle">
                      Peru - University
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt calendar "></i>
                      2009 - 2014
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`qualification__content ${
                  qualification === "work" && "qualification__active"
                }`}
                data-content
                id="work"
              >
                {/* quali 1 */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">1 Tech Enginner</h3>
                    <span className="qualification__subtitle">
                      Peru - University
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt calendar "></i>
                      2009 - 2014
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
                {/* quali 2 */}
                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">2 Tech Enginner</h3>
                    <span className="qualification__subtitle">
                      Peru - University
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt calendar "></i>
                      2009 - 2014
                    </div>
                  </div>
                </div>
                {/* quali 3 */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">3 Tech Enginner</h3>
                    <span className="qualification__subtitle">
                      Peru - University
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt calendar "></i>
                      2009 - 2014
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
                {/* quali 4 */}
                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    {/* <span className="qualification__line"></span> */}
                  </div>

                  <div>
                    <h3 className="qualification__title">4 Tech Enginner</h3>
                    <span className="qualification__subtitle">
                      Peru - University
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt calendar "></i>
                      2009 - 2014
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    <img src={portfolio1} alt="" className="portfolio__img" />

                    <div className="portfolio__data">
                      <h3 className="portfolio__title">Modern Website</h3>
                      <p className="portfolio__description">
                        Website adaptable to all devices, with ui components and
                        animated interactions.
                      </p>
                      <a
                        href="#"
                        className="button button--flex button--small portfolio__button"
                      >
                        Demo
                        <i className="uil uil-arrow-right button__icon"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                {/* 2 */}
                <SwiperSlide>
                  <div className="portfolio__content grid">
                    <img src={portfolio2} alt="" className="portfolio__img" />

                    <div className="portfolio__data">
                      <h3 className="portfolio__title">Brand Design</h3>
                      <p className="portfolio__description">
                        Website adaptable to all devices, with ui components and
                        animated interactions.
                      </p>
                      <a
                        href="#"
                        className="button button--flex button--small portfolio__button"
                      >
                        Demo
                        <i className="uil uil-arrow-right button__icon"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                {/* 3 */}
                <SwiperSlide>
                  <div className="portfolio__content grid">
                    <img src={portfolio3} alt="" className="portfolio__img" />

                    <div className="portfolio__data">
                      <h3 className="portfolio__title">Design UX/UI</h3>
                      <p className="portfolio__description">
                        Website adaptable to all devices, with ui components and
                        animated interactions.
                      </p>
                      <a
                        href="#"
                        className="button button--flex button--small portfolio__button"
                      >
                        Demo
                        <i className="uil uil-arrow-right button__icon"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </main>

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

      <a href="#" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </>
  );
}

export default App;
