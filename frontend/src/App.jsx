import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper";
import Typed from "typed.js";
import moment from "moment";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./App.css";
import me from "./assets/me.png";
import cv from "./assets/Mauricio-Cv.pdf";
import tetris from "./assets/tetris.png";
import img404 from "./assets/404.png";
import moovie from "./assets/moovie.png";
import bgEffect from "./assets/bgEffect.svg";
import InfiniteLoading from "./components/loading";
import { getPortfolioById } from "./routes";

var options = {
  strings: [
    "Frontend Developer",
    "Web Developer",
    "Mobile Developer",
    "Problem Solver",
  ],
  typeSpeed: 120,
  backSpeed: 50,
  backDelay: 1500,
  loop: true,
};

const navItems = [
  { text: "Home", icon: "estate" },
  { text: "Sobre", icon: "user" },
  { text: "Habilidades", icon: "book-alt" },
  { text: "Qualificações", icon: "laptop" },
  { text: "Projetos", icon: "scenery" },
];

const front = [
  {
    text: "Vue",
    percentage: "100%",
    img: "https://user-images.githubusercontent.com/52111341/236700567-b91a6fed-cbc1-411c-b0cf-89c7fa7caf09.svg",
  },
  {
    text: "Angular",
    percentage: "100%",
    img: "https://user-images.githubusercontent.com/52111341/236700457-0d20b1ae-ccb2-45b7-a12a-ef595138a3a2.svg",
  },
  {
    text: "ReactJs",
    percentage: "100%",
    img: "https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667",
  },
  {
    text: "TypeScript",
    percentage: "100%",
    img: "https://camo.githubusercontent.com/c04208976fe84f5bfd2111ba446acf65ff373c962ed80bbf7aa028820a5bbd79/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f747970657363726970742f747970657363726970742d706c61696e2e737667",
  },
  {
    text: "React Native",
    percentage: "100%",
    img: "https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667",
  },
];

const back = [
  {
    text: "Node",
    percentage: "65%",
    img: "https://camo.githubusercontent.com/900baefb89e187c8b32cdbb3b440d1502fe8f30a1a335cc5dc5868af0142f8b1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d6f726967696e616c2e737667",
  },
  {
    text: "MySQL",
    percentage: "60%",
    img: "https://camo.githubusercontent.com/ad7293939c16e73991b8d60763373b710bf9e96923595e8dd90fb7dee464e9ce/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6d7973716c2f6d7973716c2d6f726967696e616c2d776f72646d61726b2e737667",
  },
  {
    text: "MongoDB",
    percentage: "60%",
    img: "https://camo.githubusercontent.com/9ebde7ca22ab3f3b4bf92d2743804ab9e581e413a16cdf3626c2092e69967d80/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6d6f6e676f64622f6d6f6e676f64622d6f726967696e616c2e737667",
  },
  {
    text: "PostgreSQL",
    percentage: "60%",
    img: "https://camo.githubusercontent.com/d536b9cc0c533324368535ece721f5424f28eae3ec0e6f3847408948ecacfce6/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f706f737467726573716c2f706f737467726573716c2d6f726967696e616c2e737667",
  },
  {
    text: "Python",
    percentage: "70%",
    img: "https://camo.githubusercontent.com/43a3630f8c7313521f8202ad5de3905565d7e3b42708ca7854fec4c5d92817b3/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f707974686f6e2f707974686f6e2d706c61696e2e737667",
  },
];
const design = [
  {
    text: "UX/UI",
    percentage: "70%",
    img: "https://www.ux-ui.net/ux/uploads/2017/03/ux-ui-logo.svg",
  },
  {
    text: "Figma",
    percentage: "70%",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    text: "Sketch",
    percentage: "50%",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg",
  },
  {
    text: "Adobe XD",
    percentage: "50%",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
  },
  {
    text: "Photoshop",
    percentage: "55%",
    img: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
  },
];

const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

function App() {
  const [accordion, setAccordion] = useState("front");
  const [qualification, setQualification] = useState("education");
  const [portfolioData, setPortfolio] = useState({});
  const [loading, setLoading] = useState(true);

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
    const sections = document?.querySelectorAll("section[id]");
    const scrollY = window.scrollY;
    sections?.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          ?.classList.add("active-link");
      } else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          ?.classList.remove("active-link");
      }
    });
  };

  const selectorTheme = () => {
    const themeButton = document.getElementById("theme-button");
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");
    if (selectedTheme && themeButton) {
      document?.body?.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton?.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
        iconTheme
      );
    }
  };

  const scrollHeader = () => {
    const nav = document?.getElementById("header");
    if (window.scrollY >= 80) nav?.classList?.add("scroll-header");
    else nav?.classList?.remove("scroll-header");
  };

  const scrollUp = () => {
    const scrollTop = document?.getElementById("scroll-up");
    if (window.scrollY >= 560) scrollTop?.classList?.add("show-scroll");
    else scrollTop?.classList?.remove("show-scroll");
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
      setLoading(true);
      const response = await getPortfolioById(id);
      setPortfolio(response);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const globalCalled = async () => {
    scrollHeader();
    scrollUp();
    colorById();
  };

  useEffect(() => {
    selectorTheme();
    getPortfolio(1);
  }, []);

  useEffect(() => {
    if (!loading) {
      new Typed("#home_write", options);
      window.addEventListener("scroll", globalCalled);
    }
  }, [loading]);

  return (
    <>
      <img src={bgEffect} className="bg__effect" alt="" />
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

      {loading ? (
        <div className="infinite__loading">
          <div className="loading__container">
            <InfiniteLoading />
            <h1>Carregando</h1>
          </div>
        </div>
      ) : (
        <main className="main">
          <section className="home section" id="home">
            <div className="home__container container grid">
              <div className="home__content grid">
                <div className="home__social animate__animated animate__backInDown animate__slower">
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

                <div className="home__img home__blob animate__animated animate__fadeInRight animate__slow">
                  <div className="liquid-blob"></div>
                </div>

                <div className="home__data animate__animated animate__fadeInLeft animate__faster">
                  <h1 className="home__title">
                    {portfolioData?.home?.title || "Olá, sou Mauricio"}
                  </h1>
                  <span className="home__subtitle" id="home_write" />
                  <p className="home__description">
                    {portfolioData?.home?.description ||
                      "Experiência de alto nível em desenvolvimento web e mobile, produzindo trabalhos de qualidade."}
                  </p>
                  <a
                    className="button button--flex"
                    href="mailto:ferreiramauricio441@gmail.com"
                  >
                    <span className="span-button">Contato</span>
                    <div className="liquid"></div>
                    <i className="uil uil-message button__icon span-button"></i>
                  </a>
                </div>
              </div>

              <div className="home__scroll animate__animated animate__fadeInLeft animated__slower">
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
                  {portfolioData?.about?.text ||
                    "Desenvolvedor Front-End com sólida habilidade na resolução de problemas, desenvolvimento e prototipação de software. Busco continuamente compartilhar e adquirir novos conhecimentos, criar novas relações e impactar o mundo positivamente através da tecnologia."}
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
                    <span className="span-button">Download CV</span>
                    <div className="liquid"></div>
                    <i className="uil uil-download-alt button__icon span-button "></i>
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
                      <h1 className="skills__titles">
                        Desenvolvedor front-end
                      </h1>
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
                          <h3 className="skills__name">
                            <img
                              src={item.img}
                              className="skills__img"
                              width="25rem"
                            ></img>
                            {item.text}
                          </h3>
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
                          <h3 className="skills__name">
                            <img
                              src={item.img}
                              className="skills__img"
                              width="25rem"
                            ></img>
                            {item.text}
                          </h3>
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
                          <h3 className="skills__name">
                            <img
                              src={item.img}
                              className="skills__img"
                              width="25rem"
                            ></img>
                            {item.text}
                          </h3>
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
                        Descomplica - Ciência da Computação
                      </h3>
                      <span className="qualification__subtitle">
                        Brasil - Universidade
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt calendar "></i>
                        2023 - Atualmente
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
                      {/* <span className="qualification__line"></span> */}
                    </div>

                    <div>
                      <h3 className="qualification__title">
                        UFPE - Sistemas de Informação
                      </h3>
                      <span className="qualification__subtitle">
                        Brasil - Universidade
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt calendar "></i>
                        2019 - 2023
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
                      <h3 className="qualification__title">
                        Frontend Developer
                      </h3>
                      <span className="qualification__subtitle">
                        Brasil - Insole
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt calendar "></i>
                        09/2021 - Atualmente
                      </div>
                    </div>

                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                  </div>

                  {/* quali 3 */}
                  <div className="qualification__data">
                    <div></div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>

                    <div>
                      <h3 className="qualification__title">
                        Trainee Full Stack Developer
                      </h3>
                      <span className="qualification__subtitle">
                        Brasil - Imagine Apps
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt calendar "></i>
                        08/2021 - 09/2021
                      </div>
                    </div>
                  </div>

                  <div className="qualification__data">
                    <div>
                      <h3 className="qualification__title">Web Developer</h3>
                      <span className="qualification__subtitle">
                        Brasil - CITI
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt calendar "></i>
                        06/2021 - 07/2021
                      </div>
                    </div>
                    <div>
                      <span className="qualification__rounder"></span>
                      {/* <span className="qualification__line"></span> */}
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
                      <img src={tetris} alt="" className="portfolio__img" />

                      <div className="portfolio__data">
                        <h3 className="portfolio__title">Tetris</h3>
                        <p className="portfolio__description">
                          Explorando o título que fez sucesso nos anos 90,
                          tetris tem por objetivo montar um quebra-cabeça
                          encaixando peças de diferentes formatos capazes de
                          girar sobre o próprio eixo em apenas quatro posições
                          diferentes.
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
                          Website responsivo que trás informações sobre os
                          principais filmes da atualidade, como também antigos
                          títulos aclamados pela mídia.
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
        </main>
      )}

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
