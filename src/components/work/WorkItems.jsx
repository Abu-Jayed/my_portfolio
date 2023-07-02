
const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
<img src={item.image} className="work__img" alt="" />
<h3 className="work__title">{item.title}</h3>
<a href="#" className="work__button work__button-icon">
  Demo <box-icon name='right-arrow-alt'></box-icon>
</a>
    </div>
  );
};

export default WorkItems;