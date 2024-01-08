import React, { useContext } from 'react';

import style from './style.module.css';
import { MainContext } from './context/MainContext';
import {NavLink } from 'react-router-dom';

const Sidebar = ()=>{

    const {showMenu, setShowMenu} = useContext(MainContext);
    
    const handleCloseMobile = () => {
        setShowMenu(false);
    }
    return (
        <div className={`${style.sidebar_section} bg-secondary`} style={!showMenu ? {right: '-100%'} : {}}>
            <i className={`${style.menu_button__close} fas fa-times text-light m-2 pointer`} onClick={handleCloseMobile}></i>
            <ul className={`${style.sidebar_list} m-0 p-0`}>
                <li className={style.sidebar_avatar}>
                    <img src="/assets/images/user2.jpg" alt="" />
                </li>
                <NavLink to={"/user"} className={({isActive})=>{ return isActive ? "active_nav" : ""}} onClick={handleCloseMobile}>
                    <li>
                        {/* <a href="/">کاربران</a> */}
                        کاربران
                    </li>
                </NavLink>
                <NavLink to="/post" className={({isActive})=>{ return isActive ? "active_nav" : ""}} onClick={handleCloseMobile}>
                    <li>
                        پست ها
                    </li>
                </NavLink>
                <NavLink to="/gallery" className={({isActive})=>{ return isActive ? "active_nav" : ""}} onClick={handleCloseMobile}>
                    <li>
                        گالری
                    </li>
                </NavLink>
                <NavLink to="/todo" className={({isActive})=>{ return isActive ? "active_nav" : ""}} onClick={handleCloseMobile}>
                    <li>
                        کارها
                    </li>
                </NavLink>
            </ul>
        </div>
    )

}

export default Sidebar;