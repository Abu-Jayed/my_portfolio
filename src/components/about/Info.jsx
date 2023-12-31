import 'boxicons'

const Info = () => {
  return (
    <div className="about__info w-[400px] md:w-auto cgrid">
      <div className="about__box">
        <i className="about__icon">
        <box-icon name='award'></box-icon>
        </i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Not Yet</span>
      </div>

      <div className="about__box">
        <i className="about__icon">
        <box-icon name='briefcase-alt'></box-icon>
        </i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">27+ Projects</span>
      </div>

      <div className="about__box">
        <i className="about__icon">
      <box-icon name='support'></box-icon>
        </i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>

    </div>
  );
};

export default Info;