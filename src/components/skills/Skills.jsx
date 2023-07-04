import Backend from './Backend';
import Frontend from './Frontend';
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container md:w-auto w-[370px] container cgrid">
<Frontend></Frontend>
<Backend></Backend>
      </div>
    </section>
  );
};

export default Skills;