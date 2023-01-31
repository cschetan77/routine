import classes from "../css/Card.module.css";
const Card = ({ title, size = undefined, children }) => {

  return (
    <div className={classes.card_container}>
      <p className={`${classes.title}`}>{title}</p>
      {children}
    </div>
  );
};

export default Card;
