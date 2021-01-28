import React from "react";
import styles from './Sidebar.module.css'
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sidebar__list}>
        <SidebarItem to='/profile' value='Профиль'/>
        <SidebarItem to='/dialogs' value='Сообщения'/>
        <SidebarItem to='/news' value='Новости'/>
        <SidebarItem to='/music' value='Музыка'/>
        <SidebarItem to='/users' value='Пользователи'/>
        <SidebarItem to='/settings' value='Настройки'/>
      </ul>
    </nav>
  );
}

export default Sidebar;