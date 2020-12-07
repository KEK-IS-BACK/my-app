import React from "react";
import styles from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";
import cn from 'classnames'


const Sidebar = (props) => {

  return (
    <nav className={cn(styles.sidebar)}>
      <ul className={styles.sidebar__list}>
        <li className={styles.sidebar__item}>
          <NavLink to="/profile" activeClassName={styles.active} className={styles.sidebar__link}>Profile</NavLink>
        </li>
        <li className={styles.sidebar__item}>
          <NavLink to="/dialogs" activeClassName={styles.active} className={styles.sidebar__link}>Messages</NavLink>
        </li>
        <li className={styles.sidebar__item}>
          <NavLink to="/news" activeClassName={styles.active} className={styles.sidebar__link}>News</NavLink>
        </li>
        <li className={styles.sidebar__item}>
          <NavLink to="/music" activeClassName={styles.active} className={styles.sidebar__link}>Music</NavLink>
        </li>
        <li className={styles.sidebar__item}>
          <NavLink to="/users" activeClassName={styles.active} className={styles.sidebar__link}>Users</NavLink>
        </li>
        <li className={styles.sidebar__item}>
          <NavLink to="/settings" activeClassName={styles.active} className={styles.sidebar__link}>Settings</NavLink>
        </li>
      </ul>
      <Friends friends={props.sidebar.friends}/>
    </nav>
  );
}

export default Sidebar;