import { Fragment } from "react";
import classes from '../css/Welcome.module.css';
import Button from "../../components/js/Button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {

    const navigator = useNavigate();

    const startApplicationHandler = () => {
        navigator('./home');
    };

    return (
        <Fragment>
            <h1 className={classes.welcome_text}>Welcome</h1>
            <h2>To</h2>
            <p className={classes.application_name}>Routine</p>
            <Button text="Let's start your Routine" styles={classes.btn} onClick={startApplicationHandler}/>
        </Fragment>
        
    );
};

export default Welcome;
