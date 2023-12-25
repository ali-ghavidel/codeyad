import React, { Fragment, useContext, useState } from 'react';
import { TaskContext } from './TaskContext';
import './style.css';

const TopForm = () => {
    const [task, setTask] = useState("");
    const {taskItems, setTaskItems} = useContext(TaskContext);
    const [isHidden, setIsHidden] = useState(false);
    const handleChangeTask = (event) => {
        setTask(event.target.value);
    }

    const handleSetTask = (event) => {
        event.preventDefault();
        if(task.length){
            setTaskItems([...taskItems, {id: taskItems.length+1, title: task, done: false}]);
            setTask("");
            setIsHidden(false);
        }else{
            setIsHidden(true);
        }
        
    }
    return(
        <Fragment>
            <h4 className='text-center text-info text-shadow'>پروژه لیست کارها</h4>
            <form onSubmit={handleSetTask}>
                <div className='form-group d-flex'>
                <label htmlFor='textInput' className={`${isHidden ? "" : "hidden"} text-danger `}>لطفا مقداری را وارد کنید</label>
                <input type='text'name='textInput' className='form-control' value={task} onChange={handleChangeTask}/>
                <button type='submit' className='btn btn-success me-1'>ثبت</button>
               
                </div>
            </form>
        </Fragment>  
    )
     
}
export default TopForm;