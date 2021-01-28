import styles from "../Sidebar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type PropsType = {
  to: string
  value: string
}

const SidebarItem: React.FC<PropsType> = props => {
  const {to, value} = props

  return (
    <li className={styles.sidebar__item}>
      <NavLink to={to} activeClassName={styles.active} className={styles.sidebar__link}>{value}</NavLink>
    </li>
  )
}
export default SidebarItem