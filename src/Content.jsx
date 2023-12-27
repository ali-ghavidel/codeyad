import React, { useContext } from 'react';

import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import style from './style.module.css'
import Todos from './todos/Todos';
import Users from './users/Users';
import { MainContext } from './context/MainContext';

const Content = ()=>{
    const {showMenu, setShowMenu} = useContext(MainContext);

    const handleShowMenu = (event) => {
        event.stopPropagation();
        setShowMenu(!showMenu);
        console.log(showMenu);
    }
    return (
        <div className={style.content_section} onClick={()=>setShowMenu(false)} style={!showMenu ? {} : {width: "calc(100% - 250px)"}} >
            
            <i className={`${style.menu_button} fas ${!showMenu ? "fa-bars" : "fa-times" } text-dark m-2 pointer`} onClick={handleShowMenu}></i>
            <Users/>
            <Posts/>
            <Gallery/>
            <Todos/>
        </div>
    )

}

export default Content;