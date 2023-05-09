import { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./index.css";

function Qualifications(data) {
  const [qualification, setQualification] = useState("education");

  const changeQualification = (value) => {
    setQualification(value);
  };

  return (
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
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">Brasil - Insole</span>
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
                <span className="qualification__subtitle">Brasil - CITI</span>
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
  );
}

Qualifications.propTypes = {
  data: PropTypes.object,
};

Qualifications.defaultProps = {
  data: {},
};

export default Qualifications;
