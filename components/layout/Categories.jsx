import classes from './Categories.module.css';

const Categories = ({ selectCategory, category }) => {
  return (
    <div className={classes.container}>
      <div className={classes['link-position']}>
        <button
          className={
            classes[
              category === 'Shoes' ? 'category-link-active' : 'category-link'
            ]
          }
          onClick={() => selectCategory('Shoes')}
        >
          Shoes
        </button>
        <button
          className={
            classes[
              category === 'Bags' ? 'category-link-active' : 'category-link'
            ]
          }
          onClick={() => selectCategory('Bags')}
        >
          Bags
        </button>
      </div>
    </div>
  );
};

export default Categories;
