import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TasksList = () => {
  const {taskItems, setTaskItems} = useContext(TaskContext);

  const HandleSetIsDone = (id) => {
    const index = taskItems.findIndex((v)=>v.id === id);
    let cpyTaskItems = [...taskItems];
    cpyTaskItems[index].done = !cpyTaskItems[index].done;
    setTaskItems(cpyTaskItems);
    console.log(index);
  }
  const deleteTaskItems = (id) => {
    setTaskItems(taskItems.filter(v => v.id !== id));
  }

  if(taskItems.length){
    return(
      <ul className='list-group m-0 p-0 mt-2'>
        {taskItems.map((value, key) => {
          return(
            <li className={`list-group-item d-flex justify-content-between ${value.done ? "list-group-item-success" : "" }`} key={key}>
              {value.title}
              <span>
                <i className={`me-3 pointer fas ${value.done ? "fa-check text-success" : "fa-times text-warning"} transition_200 text_hover_shadow`} onClick={()=>HandleSetIsDone(value.id)}></i>
                <i className='me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow' onClick={()=>deleteTaskItems(value.id)}></i>
              </span>
            </li>
          )
        })}
        
    </ul>
    )
  }else{
    return <h4 className="text-danger text-center mt-3 mb-3">موردی برای نمایش وجود ندارد</h4>
  }
        
}
export default TasksList;