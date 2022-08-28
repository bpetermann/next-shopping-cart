import styles from './Categories.module.css';
import Link from 'next/link';

const Categories = ({ selectCategory, category }) => {
  return (
    <div className={styles.container}>
      <div className={styles['link-position']}>
        <Link href='/products'>
          <button
            className={
              styles[
                category === 'Shoes' ? 'category-link-active' : 'category-link'
              ]
            }
            onClick={() => selectCategory('Shoes')}
          >
            Shoes
          </button>
        </Link>
        <Link href='/products'>
          <button
            className={
              styles[
                category === 'Bags' ? 'category-link-active' : 'category-link'
              ]
            }
            onClick={() => selectCategory('Bags')}
          >
            Bags
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
