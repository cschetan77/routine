import { NavLink } from "react-router-dom";
import classes from '../css/Home.module.css';

const Home = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.navigation}>
                <ul className={classes.list}>
                    <li className={classes.list_item}>
                        <NavLink to='/office'>Office</NavLink>
                    </li>
                    <li className={classes.list_item}>
                        <NavLink to='/problems'>Problems</NavLink>
                    </li>
                    <li className={classes.list_item}>
                        <NavLink to='/learning'>Learning</NavLink>
                    </li>
                    <li className={classes.list_item}>
                        <NavLink to='/notes'>Notes</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Home;
