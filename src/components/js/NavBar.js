import { NavLink } from "react-router-dom";
import classes from "../css/NavBar.module.css";

const NavBar = () => {
    const decorateText = {
        color: 'red'
    }
  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        <li className={classes.list_item}>
          <NavLink to="/office" style={({isActive}) => isActive ? decorateText : undefined}>Office</NavLink>
        </li>
        <li className={classes.list_item}>
          <NavLink to="/problems" style={({isActive}) => isActive ? decorateText : undefined}>Problems</NavLink>
        </li>
        <li className={classes.list_item}>
          <NavLink to="/learning" style={({isActive}) => isActive ? decorateText : undefined}>Learning</NavLink>
        </li>
        <li className={classes.list_item}>
          <NavLink to="/notes" style={({isActive}) => isActive ? decorateText : undefined}>Notes</NavLink>
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
