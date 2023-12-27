import React, { useContext } from 'react';

import style from './style.module.css';
import { MainContext } from './context/MainContext';

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
                <li>
                    <a href="/">کاربران</a>
                </li>
                <li>
                    <a href="/">پست ها</a>
                </li>
                <li>
                    <a href="/">گالری</a>
                </li>
                <li>
                    <a href="/">کارها</a>
                </li>
            </ul>
        </div>
    )

}

export default Sidebar;