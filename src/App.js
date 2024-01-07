import React, { useState } from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import { MainContext, UsersContext } from './context/MainContext';
import {BrowserRouter} from 'react-router-dom';
import Portal from './Portal';





const App = ()=>{
    const [showMenu, setShowMenu] = useState(false);
    const [currentUser, setCurrentUser] = useState({
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
            lat: "-37.3159",
            lng: "81.1496"
            }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
            }
        }
    );
    
   
    
    return (
        <div>
            <BrowserRouter>
                <MainContext.Provider value={{showMenu, setShowMenu}}>
                    <UsersContext.Provider value={{currentUser, setCurrentUser}}>
                        <Portal/>
                        <Sidebar/>
                        <Content/>
                    </UsersContext.Provider>
                </MainContext.Provider>
            </BrowserRouter>
        </div>
    ) 
}


export default App;
