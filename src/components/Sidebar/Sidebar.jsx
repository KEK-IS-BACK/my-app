import React from "react";
import styles from './Sidebar.module.css'
import cn from 'classnames'
import SidebarItem from "./SidebarItem/SidebarItem";


const Sidebar = props => {

  return (
    <nav className={cn(styles.sidebar)}>
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