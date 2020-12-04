import React from "react";
import styles from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";


const Sidebar = (props) => {

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <NavLink to="/profile" activeClassName={styles.active} className={styles.nav__link}>Profile</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink to="/dialogs" activeClassName={styles.active} className={styles.nav__link}>Messages</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink to="/news" activeClassName={styles.active} className={styles.nav__link}>News</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink to="/music" activeClassName={styles.active} className={styles.nav__link}>Music</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink to="/users" activeClassName={styles.active} className={styles.nav__link}>Users</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink to="/settings" activeClassName={styles.active} className={styles.nav__link}>Settings</NavLink>
        </li>
      </ul>
      <Friends friends={props.sidebar.friends}/>
    </nav>
  );
}

export default Sidebar;