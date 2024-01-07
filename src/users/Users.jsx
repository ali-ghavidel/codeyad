import React, { useEffect, useState } from 'react';
import NewUserQuick from './NewUserQuick';
import style from '../style.module.css';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

const Users = ()=>{
    const [newUser, setNewUser] = useState(false);
    const [users, setUsers] = useState([]);
    const [altUsers, setAltUsers] = useState([]);

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
    const handleDeleteUser = (id, email) => {
        swal({
            title: "حذف کاربر",
            text: `آیا از حذف کاربر با ایمیل ${email} مطمئن هستید؟`,
            icon: "warning",
            buttons: ["خیر", "بله"],
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res)=>{
                    if(res.status === 200){
                        const newUsers = users.filter((v)=>v.id !== id);
                        setUsers(newUsers);
                        swal("کاربر با موفقیت حذف شد", {
                            icon: "success",
                            buttons: "حله"
                        });
                    }else{
                        swal("خطایی رخ داد", {
                            icon: "error",
                            buttons: "حله"
                        });
                    }
                })
              
            } else {
              swal("درخواست توسط شما لغو شد", {
                buttons: "حله"
              });
            }
          });
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
                    {newUser ? <NewUserQuick /> : ""}
                    
                </tbody>
            </table>
            :
            <h1>لطفا شکیبا باشید</h1>
            }
            
        </div>
    )

}

export default Users;