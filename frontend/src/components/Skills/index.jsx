import { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./index.css";

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

function Skills(data) {
  const [accordion, setAccordion] = useState("front");

  const changeAccordion = (value) => {
    let accordionValue = value;
    if (value === accordion) accordionValue = "";
    setAccordion(accordionValue);
  };

  const getYearsExperience = () => {
    const oldDate = moment("05/08/2021").format("DD/MM/YYYY");
    const diff = moment().diff(oldDate);
    const years = moment.duration(diff).asYears();
    return Math.round(years);
  };

  return (
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
                    <h3 className="skills__name">
                      <img
                        src={item.img}
                        className="skills__img"
                        width="25rem"
                      ></img>
                      {item.text}
                    </h3>
                    <span className="skills__number">{item.percentage}</span>
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
                    <span className="skills__number">{item.percentage}</span>
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
                    <span className="skills__number">{item.percentage}</span>
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
  );
}

Skills.propTypes = {
  data: PropTypes.object,
};

Skills.defaultProps = {
  data: {},
};

export default Skills;
