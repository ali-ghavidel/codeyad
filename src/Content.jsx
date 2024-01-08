import React, { useContext } from 'react';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import style from './style.module.css'
import Todos from './todos/Todos';
import Users from './users/Users';
import Error404 from './Error404';
import { MainContext } from './context/MainContext';
import { Route, Routes } from 'react-router-dom';
import AddUser from './users/AddUser';
import Test from './HOC/Test';


const Content = ()=>{
    const {showMenu, setShowMenu} = useContext(MainContext);
    // const [isUser,setIsUser] = useState(false);
    const handleShowMenu = (event) => {
        event.stopPropagation();
        setShowMenu(!showMenu);
    }
    return (
        <div className={style.content_section} onClick={()=>setShowMenu(false)} style={!showMenu ? {} : {width: "calc(100% - 250px)"}} >
            <i className={`${style.menu_button} fas ${!showMenu ? "fa-bars" : "fa-times" } text-dark m-2 pointer`} onClick={handleShowMenu}></i>
            <Routes>
                {/* <Route path='/user' element={ isUser ? <Users/> : <Navigate replace to="/gallery" />} /> */}
                <Route path='/' element={<Test render={(Confirm, Alert)=><Users Confirm={Confirm} Alert={Alert}/>} />} />
                <Route path='/user' element={<Test render={(Confirm, Alert)=><Users Confirm={Confirm} Alert={Alert}/>} />} />
                <Route path='/user/add' element={<AddUser/>} >
                    {/* <Route path=':userId' element={<EditDesc/>} /> */}
                    <Route path=':userId' />
                </Route>
                <Route path='/post' element={<Posts/>} />
                <Route path='/gallery' element={<Gallery/>} />
                <Route path='/todo' element={<Todos/>} />
                <Route path='*' element={<Error404 />} />
            </Routes>

        </div>
    )

}

export default Content;