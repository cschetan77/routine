import { Fragment } from "react";
import Image from "../../components/Image";

import classes from '../css/Welcome.module.css';

import WELCOME_RIGHT_BOTTOM_IMAGE from '../../assets/images/welcome_1.jpg';
import WELCOME_TOP_LEFT_IMAGE  from '../../assets/images/welcome_top_left.jpg';

//const WELCOME_RIGHT_BOTTOM_IMAGE = "./welcome_1.jpg";

const Welcome = () => {
    return (
        <Fragment>
            <h1 className={classes.welcome_text}>Welcome</h1>
            <p className={classes.application_name}>Routie Application</p>
            <p className={classes.sub_text}>An Application for Engineers by Engineers</p>
            <Image src={WELCOME_TOP_LEFT_IMAGE} alt="Welcome top left image" styles={classes.img_top_left} />
            <Image src={WELCOME_RIGHT_BOTTOM_IMAGE} alt="Welcome bottom right image" styles={classes.img_right_bottom} />
        </Fragment>
        
    );
};

export default Welcome;
