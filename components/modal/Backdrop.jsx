import classes from './Backdrop.module.css';

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

export default Backdrop;
