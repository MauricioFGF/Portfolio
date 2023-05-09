import { useState, useEffect } from "react";
import { getPortfolioById } from "./routes";
import Typed from "typed.js";
import bgEffect from "./assets/bgEffect.svg";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Qualifications from "./components/Qualifications";
import InfiniteLoading from "./components/Loading";
import "./App.css";

let options = {
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

const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

function App() {
  const [portfolioData, setPortfolio] = useState({});
  const [loading, setLoading] = useState(true);

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

  const globalCalled = async () => {
    scrollHeader();
    scrollUp();
    colorById();
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
      <NavBar />

      {loading ? (
        <div className="infinite__loading">
          <div className="loading__container">
            <InfiniteLoading />
            <h1>Carregando</h1>
          </div>
        </div>
      ) : (
        <main className="main">
          <Home data={portfolioData.home} />
          <About data={portfolioData.about} />
          <Skills data={portfolioData.skills} />
          <Qualifications data={portfolioData.qualifications} />
          <Projects data={portfolioData.projects} />
        </main>
      )}

      <Footer />

      <a href="#" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </>
  );
}

export default App;
