
const Backend = () => {
  return (
    <div className="skills__content md:w-auto w-[400px]">
      <h2 className="skills__title">
Backend Developer
      </h2>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
          <box-icon name='badge-check'></box-icon>

          <div>
            <h3 className="skills__name">Node</h3>
            <span className="skills__level">
    Basic
            </span>
          </div>
          </div>

          <div className="skills__data">
          <box-icon name='badge-check'></box-icon>

          <div>
            <h3 className="skills__name">Express.js</h3>
            <span className="skills__level">
              Basic
            </span>
          </div>
          </div>

          <div className="skills__data">
          <box-icon name='badge-check'></box-icon>

          <div>
            <h3 className="skills__name">MongoDB</h3>
            <span className="skills__level">
              Basic
            </span>
          </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
          <box-icon name='badge-check'></box-icon>

          <div>
            <h3 className="skills__name">Firebase</h3>
            <span className="skills__level">
Basic
            </span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;