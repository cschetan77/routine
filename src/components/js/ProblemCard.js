import classes from '../css/ProblemCard.module.css';

const ProblemCard = ({ title="", id="", statement="", solved=""}) => {
    return (
        <div className={classes.problem_container}>
            <div className={classes.problem_title}>
                <h2>{title}</h2>
                <h3>{id}</h3>
            </div>
            <div className={classes.problem_statement}>
                <p>{statement}</p>
            </div>
            <div className={classes.problem_completion}>
                <input type="radio"  name="solved" value="solved"/>
                <label>Solved</label>
            </div>
        </div>
    );
};

export default ProblemCard;
