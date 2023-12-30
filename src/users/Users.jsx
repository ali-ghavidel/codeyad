import React, { useContext, useState } from 'react';
import { UsersContext } from '../context/MainContext';
import NewUserQuick from './NewUserQuick';
import style from '../style.module.css';
import { Link } from 'react-router-dom';

const Users = ()=>{
    const usersContext = useContext(UsersContext);
    const [newUser, setNewUser] = useState(false);
    // let counter = 1

    const handleIsNewUser = () => {
        setNewUser(!newUser);
    }
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو"/>
                </div>
                <div className="col-2 text-start px-0 d-flex">
                    <Link to={'/add'}>
                    <button className="btn btn-success mx-1">
                        <i className="fas fa-plus text-light"></i> افزودن کاربر جدید
                    </button>
                    </Link>
                    {!newUser ?
                        <button className="btn btn-success" onClick={handleIsNewUser}>
                            <i className="fas fa-plus text-light"></i> افزودن سریع کاربر جدید
                        </button>
                        :
                        <button className="btn btn-danger" onClick={handleIsNewUser}>
                            <i className="fas fa-times text-light"></i> بستن
                        </button>
                    }
                    
                </div>
            </div>
            <table className="table bg-light shadow">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>نام</th>
                        <th>نام کاربری</th>
                        <th>ایمیل</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {usersContext.users.map((value,key)=>{
                        return(
                           <tr key={key}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.username}</td>
                                <td>{value.email}</td>
                                <td>
                                    <i className="fas fa-edit text-warning mx-2 pointer"></i>
                                    <i className="fas fa-trash text-danger mx-2 pointer"></i>
                                </td>
                            </tr> 
                        )
                    })}
                    {newUser ? <NewUserQuick /> : ""}
                    
                </tbody>
            </table>
        </div>
    )

}

export default Users;