import React, { useState } from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import { MainContext } from './context/MainContext';

const App = ()=>{
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <MainContext.Provider value={{showMenu, setShowMenu}}>
                <Sidebar/>
                <Content/>
            </MainContext.Provider>    
        </div>
    ) 
}


export default App;
