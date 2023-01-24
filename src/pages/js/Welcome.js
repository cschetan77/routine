import { Fragment } from "react";
import Image from "../../components/js/Image";

import classes from '../css/Welcome.module.css';

import WELCOME_RIGHT_BOTTOM_IMAGE from '../../assets/images/welcome_1.jpg';
import WELCOME_TOP_LEFT_IMAGE  from '../../assets/images/welcome_top_left.jpg';
import Button from "../../components/js/Button";

//const WELCOME_RIGHT_BOTTOM_IMAGE = "./welcome_1.jpg";

const Welcome = () => {

    const startApplicationHandler = () => {

    };

    return (
        <Fragment>
            <h1 className={classes.welcome_text}>Welcome</h1>
            <h2>To</h2>
            <p className={classes.application_name}>Routine</p>
            <Button text="Let's start your Routine" styles={classes.btn} onClick={startApplicationHandler}/>
            <Image src={WELCOME_TOP_LEFT_IMAGE} alt="Welcome top left image" styles={classes.img_top_left} />
            <Image src={WELCOME_RIGHT_BOTTOM_IMAGE} alt="Welcome bottom right image" styles={classes.img_right_bottom} />
            <p className={classes.sub_text}>An Application for Engineers by Engineers</p>
        </Fragment>
        
    );
};

export default Welcome;
