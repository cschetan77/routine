import classes from '../css/Button.module.css';

const Button = ({ text, styles = "", onClick }) => {
    return (
        <button type="button" className={`${classes.btn} ${styles}`} onClick={onClick}>{text}</button>
    );
};

export default Button;
