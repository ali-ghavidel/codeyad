import React, { useState } from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import { MainContext, UsersContext } from './context/MainContext';
import {BrowserRouter} from 'react-router-dom';
// import { UsersContext } from './context/UsersContext';
const App = ()=>{
    const [showMenu, setShowMenu] = useState(false);
    const [users, setUsers] = useState([{
        id: 1,
        name: "ali",
        username: "alix",
        email: "alix@mail.com",
    },
    {
        id: 2,
        name: "reza",
        username: "rezax",
        email: "rezax@mail.com",
    }])
    return (
        <div>
            <BrowserRouter>
                <MainContext.Provider value={{showMenu, setShowMenu}}>
                    <UsersContext.Provider value={{users: users, setUsers: setUsers}}>
                        <Sidebar/>
                        <Content/>
                    </UsersContext.Provider>
                </MainContext.Provider>
            </BrowserRouter>
        </div>
    ) 
}


export default App;
