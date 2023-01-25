import { NavLink } from "react-router-dom";
import classes from "../css/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        <li className={classes.list_item}>
          <NavLink to="/office">Office</NavLink>
        </li>
        <li className={classes.list_item}>
          <NavLink to="/problems">Problems</NavLink>
        </li>
        <li className={classes.list_item}>
          <NavLink to="/learning">Learning</NavLink>
        </li>
        <li className={classes.list_item}>
          <NavLink to="/notes">Notes</NavLink>
        </li>
      </ul>
      <div className={classes.search_box}>
        <label>Search</label>
        <input type="text" />
      </div>
    </nav>
  );
};

export default NavBar;
