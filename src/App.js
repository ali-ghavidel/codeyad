import React, { useState } from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import { MainContext } from './context/MainContext';
import {BrowserRouter} from 'react-router-dom';
const App = ()=>{
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <BrowserRouter>
                <MainContext.Provider value={{showMenu, setShowMenu}}>
                    <Sidebar/>
                    <Content/>
                </MainContext.Provider>
            </BrowserRouter>
        </div>
    ) 
}


export default App;
