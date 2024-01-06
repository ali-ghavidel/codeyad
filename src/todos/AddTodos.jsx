import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from '../style.module.css';
import { addNewTodo, getAllUsers, getTodoInfo } from '../services/TodoServices';
import swal from 'sweetalert';
const AddTodos = () => {
    const {todoId} = useParams();
    const [users, setUsers] = useState([]);
    const [todo, setTodo] = useState({
        userId: 0,
        title: "",
        completed: false
    })
    const [completed, setCompleted] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        getAllUsers(setUsers);
        if(todoId){
            getTodoInfo(setTodo, todoId);
        }
    },[todoId])
    const handleChangeStatus = () => {
        setCompleted(!completed);
        setTodo({...todo, completed: !completed});
       
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if( todo.title.length > 0 && todo.userId !==0){
            addNewTodo(todo);
        } else {
            swal('باید فیلدهای کاربر و عنوان پر شده باشد!', {
                icon: "error",
              });
        }
        
    }
    const handleChangeTodoTitle = (e) => {
        setTodo({...todo, title: e.target.value});
    }
    const handleChangeSelect = (e) => {
        setTodo({...todo, userId: e.target.value});
    }
    
    return (                 
            <div className={style.newPost}>
                <form className="form-group" onSubmit={handleSubmitForm}>
                    <div className="mb-3">
                        <p>متقاضی:</p>
                        {todoId ?
                        <p>{users.map((u)=>u.id === todo.userId ? u.name : "")}</p>
                        : 
                        <select className="form-select" defaultValue={0} onChange={handleChangeSelect}>
                            <option value={0}>انتخاب کاربر</option>
                            {users.map((user, key)=>{ return <option key={key} value={user.id} >{user.name}</option>})}
                        </select>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor='formtitle' className={`form-label ${style.label}`} >عنوان</label>
                        <input type="text" id='formtitle' value={todo.title} onChange={handleChangeTodoTitle} className='form-control form-control-lg' />
                        {/* <textarea id='formtitle' value={post.title} onChange={handleChangePostTitle} className='form-control' rows={2} ></textarea> */}
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor='body' className={`form-label ${style.label}`} >وضعیت</label> */}
                        <div className="form-check form-switch" style={{position: "absolute"}}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onClick={handleChangeStatus}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">وضعیت: </label>
                        {completed ? <span className='text-success'>انجام شده</span> : <span className='text-danger'>انجام نشده</span>}
                        </div>
                    </div>
                    <div className='mt-5'>
                        
                    </div>
                    <div className="mb-3">
                        <button className='btn btn-success mx-1' type='submit'>{todoId ? "بروزرسانی" : "ثبت"}</button>
                        <button className='btn btn-danger' onClick={()=>navigate('/todo')}>بازگشت</button>
                    </div>
                </form>
            </div>
    );
}

export default AddTodos;
