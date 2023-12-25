import React, { Fragment, useContext, useState } from 'react';
import { TaskContext } from './TaskContext';

const TopForm = () => {
    const [task, setTask] = useState("");
    const {taskItems, setTaskItems} = useContext(TaskContext);

    const handleChangeTask = (event) => {
        setTask(event.target.value);
    }

    const handleSetTask = (event) => {
        event.preventDefault();
        setTaskItems([...taskItems, {id: Math.random, title: task, done: false}]);
        setTask("");
    }
    return(
        <Fragment>
            <h4 className='text-center text-info text-shadow'>پروژه لیست کارها</h4>
            <form onSubmit={handleSetTask}>
                <div className='form-group d-flex'>
                <input type='text' className='form-control' value={task} onChange={handleChangeTask}/>
                <button type='submit' className='btn btn-success me-1'>ثبت</button>
                </div>
            </form>
        </Fragment>  
    )
     
}
export default TopForm;