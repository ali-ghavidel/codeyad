import React, { useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from '../style.module.css';
import { addNewTodo, getAllUsers2, getTodoInfo } from '../services/TodoServices';
import swal from 'sweetalert';
import { init, reducer } from './TodoReducer';
const AddTodos = () => {
    const {todoId} = useParams();
    // const [users, setUsers] = useState([]);
    // const [todo, setTodo] = useState({
    //     userId: 0,
    //     title: "",
    //     completed: false
    // })
    // const [completed, setCompleted] = useState(false);
    const [data, dispatch] =useReducer(reducer, init)
    const navigate = useNavigate();
    useEffect(()=>{
        getAllUsers2(dispatch);
        if(todoId){
            getTodoInfo(dispatch, todoId);
        }
    },[todoId])
    const handleChangeStatus = () => {
        // dispatch("changeInput", what)
        // setCompleted(!completed);
        // setTodo({...todo, completed: !completed});
        dispatch({act: "changeInput", what: "completed", with: !data.todo.completed})
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if( data.todo.title.length > 0 && data.todo.userId !==0){
            addNewTodo(data.todo);
        } else {
            swal('باید فیلدهای کاربر و عنوان پر شده باشد!', {
                icon: "error",
              });
        }
        
    }
   
    const handleChangeInputs = (e,prop) => {
        dispatch({act: "changeInput", what: prop, with: e.target.value})
    }
    
    return (                 
            <div className={style.newPost}>
                <form className="form-group" onSubmit={handleSubmitForm}>
                    <div className="mb-3">
                        <p>متقاضی:</p>
                        {todoId ?
                        <p>{data.users.map((u)=>u.id === data.todo.userId ? u.name : "")}</p>
                        : 
                        <select className="form-select" defaultValue={0} onChange={(e)=>handleChangeInputs(e,"userId")}>
                            <option value={0}>انتخاب کاربر</option>
                            {data.users.map((user, key)=>{ return <option key={key} value={user.id} >{user.name}</option>})}
                        </select>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor='formtitle' className={`form-label ${style.label}`} >عنوان</label>
                        <input type="text" id='formtitle' value={data.todo.title} onChange={(e)=>handleChangeInputs(e,"title")} className='form-control form-control-lg' />
                        {/* <textarea id='formtitle' value={post.title} onChange={handleChangePostTitle} className='form-control' rows={2} ></textarea> */}
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor='body' className={`form-label ${style.label}`} >وضعیت</label> */}
                        <div className="form-check form-switch" style={{position: "absolute"}}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onClick={handleChangeStatus}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">وضعیت: </label>
                        {data.todo.completed ? <span className='text-success'>انجام شده</span> : <span className='text-danger'>انجام نشده</span>}
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
