import { useState } from "react";
import "./qualification.css"

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (i) => {
    setToggleState(i)
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div
          className="qualification__tabs">
          <div
           className={toggleState === 1 
           ? "qualification__active qualification__button button-flex"
          : " qualification__button button-flex"}
          onClick={()=> toggleTab(1)}
          >
            <div className="workNow">
            <i className="qualification__icon">
            <box-icon type='solid' name='graduation'></box-icon>
            </i>
            Education
            </div>
          </div>

          <div
            className={toggleState === 2 
            ? "qualification__active qualification__button button-flex" 
            : " qualification__button button-flex about__icon"}
            onClick={()=> toggleTab(2)}
            >
              <div className="workNow">

              <i className=" qualification__icon">
            <box-icon name='briefcase-alt'></box-icon>
              </i>
            Course
              </div>
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active":"qualification__content"}>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Grapic Design</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}


<div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSC (GPA-5)</h3>
                <span className="qualification__subtitle">JDM Govt. High School</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2022
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
                <h3 className="qualification__title">MERN Development</h3>
                <span className="qualification__subtitle">Programing Hero</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">HSC (science)</h3>
                <span className="qualification__subtitle">Hazi Corop Ali Govt. College</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
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
                <h3 className="qualification__title">Facebook Ads</h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
              
            </div>

          </div>

          <div className={toggleState === 2?"qualification__content qualification__content-active" : "qualification__content"}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSC (GPA-5)</h3>
                <span className="qualification__subtitle">JDM Govt. High School</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2022
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
                <h3 className="qualification__title">MERN Development</h3>
                <span className="qualification__subtitle">Programing Hero</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">HSC (science)</h3>
                <span className="qualification__subtitle">Hazi Corop Ali Govt. College</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
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
                <h3 className="qualification__title">Facebook Ads</h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;