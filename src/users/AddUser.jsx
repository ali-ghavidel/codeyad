import React, { useEffect, useState } from 'react';


import style from '../style.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { addUserService, getUserByIdService, updateUserService } from '../services/UserServices';

const AddUser = ()=>{

    const [newUser, setNewUser] = useState({
        name: "",
        username: "",
        email: "",
        address: {
        street: "",
        suite: "",
        city: "",
        zipcode: ""
        }
    })
    const {userId} = useParams();
    // console.log(params.userId);
    const navigate = useNavigate();

    // const {state} = useLocation();
    // console.log(state);

    

    useEffect(() => {
         if(userId){
            getUserByIdService(setNewUser, userId);
        }
    }, [userId]);

   
    const handleAddUser = (e)=> {
        e.preventDefault();
        if(!userId){
            addUserService(newUser);
        }else{
            updateUserService(userId, newUser);
        }
    }

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
            <h4 className="text-center text-primary">
               {userId ? "ویرایش کاربر" : "افزودن کاربر"}
            </h4>
            <div className="row justify-content-center mt-5 ">
                <form onSubmit={handleAddUser} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div className="mb-3">
                        <label className="form-label">نام و نام خانوادگی</label>
                        <input type="text" className="form-control" value={newUser.name} onChange={(e)=>setNewUser({...newUser, name: e.target.value })}/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">نام کاربری</label>
                        <input type="text" className="form-control" value={newUser.username} onChange={(e)=>setNewUser({...newUser, username: e.target.value })}/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">ایمیل</label>
                        <input type="email" className="form-control" value={newUser.email} onChange={(e)=>setNewUser({...newUser, email: e.target.value })}/>
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label">آدرس</label>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="شهر" value={newUser.address.city} onChange={(e)=>setNewUser({...newUser, address:{...newUser.address, city: e.target.value} })}/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="خیابان" value={newUser.address.street} onChange={(e)=>setNewUser({...newUser, address: {...newUser.address, street: e.target.value}})}/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="ادامه آدرس" value={newUser.address.suite} onChange={(e)=>setNewUser({...newUser, address: {...newUser.address, suite: e.target.value}})}/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="کد پستی" value={newUser.address.zipcode} onChange={(e)=>setNewUser({...newUser, address: {...newUser.address, zipcode: e.target.value}})}/>
                        </div>
                    </div>
                    
                    <div className="col-12 text-start">
                        <button type="button" className="btn btn-danger ms-2" onClick={()=>{navigate(-1)}}>بازگشت</button>
                        <button type="submit" className="btn btn-primary" >
                            {userId ? "ویرایش" : "افزودن"}
                        </button>
                    </div>
                </form>
            </div>
            {/* <Outlet /> */}
        </div>
    )
}

export default AddUser;