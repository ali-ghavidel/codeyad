import React, { useEffect, useState } from 'react';
import style from '../style.module.css';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';


const Users = (props)=>{
    const [newUser, setNewUser] = useState(false);
    const [users, setUsers] = useState([]);
    const [altUsers, setAltUsers] = useState([]);
    const {Confirm, Alert} = props;
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            setUsers(res.data);
            setAltUsers(res.data);
        }).catch((err)=>{return err})
    }, []);
    
    

    // let counter = 1
    const navigator = useNavigate();

    const handleIsNewUser = () => {
        setNewUser(!newUser);
    }

    const handleSearchUser = (e) => {
        setUsers(altUsers.filter((u)=>u.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }
    const handleDeleteUser = async (id, email) => {
        
            if (await Confirm("حذف کاربر", `آیا از حذف کاربر با ایمیل ${email} مطمئن هستید؟`, "warning", ["خیر", "بله"])) {
                axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res)=>{
                    if(res.status === 200){
                        const newUsers = users.filter((v)=>v.id !== id);
                        setUsers(newUsers);
                        Alert("کاربر با موفقیت حذف شد", "success")
                    }else{
                        Alert("خطایی رخ داد", "error")
                    }
                })
              
            } else {
              Alert("درخواست توسط شما لغو شد", "info");
            }
          
    }
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو" onChange={handleSearchUser}/>
                </div>
                <div className="col-2 text-start px-0 d-flex">
                    <Link to={'/user/add'} state={{id: 2, name: "reza"}}>
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
            {users ?
            <table className="table bg-light shadow table-hover">
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
                    
                    {users.map((value,key)=>{
                        return(
                        <tr key={key}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.username}</td>
                                <td>{value.email}</td>
                                <td>
                                    <i className="fas fa-edit text-warning mx-2 pointer" onClick={()=>navigator(`/user/add/${value.id}`)}></i>
                                    <i className="fas fa-trash text-danger mx-2 pointer" onClick={()=>handleDeleteUser(value.id, value.email)}></i>
                                </td>
                            </tr> 
                        )
                    })}
                    
                    
                </tbody>
            </table>
            :
            <h1>لطفا شکیبا باشید</h1>
            }
            
        </div>
    )

}

export default Users;