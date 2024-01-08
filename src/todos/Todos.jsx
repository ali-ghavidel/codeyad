import React, { useCallback, useEffect, useState } from 'react';
import style from '../style.module.css'
import { Link } from 'react-router-dom';
import MyPagination from '../pagination/MyPagination';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import swal from 'sweetalert';
import { deleteTodoService, getAllUsers, getUserTodosService } from '../services/TodoServices';

const Todos = ()=>{

    const [users, setUsers] = useState([]);
    const [id,setId] = useState(0);
    const [todos, setTodos] = useState([]);
    const [mainTodos, setMainTodos] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        id ? getUserTodosService(id, setTodos, setMainTodos, page, setTotal) :  getAllUsers(setUsers)
    },[id, page]);
    
    const handleChangePage = useCallback((page)=> {
        setPage(page);
    },[])

    const handleDeleteTodo = (id, title) => {
        swal({
            title: "مطمئنید؟",
            text: "شما این کار را حذف خواهید کرد!",
            icon: "warning",
            dangerMode: true,
            buttons: ["خیر", "بله"]
          })
          .then((willDelete) => {
            if (willDelete) {
              deleteTodoService(id, title);
              setTodos(mainTodos.filter((t)=> t.id !== id));
            } else {
              swal("موردی حذف نشد");
            }
          });
        }
    const handleSearchInput = (e) => {
        setTodos(mainTodos.filter((t)=> t.title.toLowerCase().includes(e.target.value.toLowerCase()) ));
    }
    const handleChangeSelect = (e) =>{
        setId(e.target.value);
    }
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کار ها</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو" onChange={handleSearchInput} />
                </div>
                <div className="col-2 text-start px-0 d-flex">
                   
                   <Link to={'/todo/add'}>
                    <button className="btn btn-success mx-1">
                        <i className="fas fa-plus text-light"></i> افزودن کار جدید
                    </button>
                    </Link>
                   
                </div>
            </div>
            <select className="form-select" defaultValue={0} onChange={handleChangeSelect}>
                    <option value={0}>انتخاب کاربر</option>
                    {users.map((user, key)=>{ return <option key={key} value={user.id} >{user.name}</option>})}
            </select>
            <Table className="table bg-light shadow mt-4">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>عنوان</th>
                            <th>وضعیت</th>
                            <th>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* <Paginate posts={posts} /> */}
                        {todos.map((todo, key)=>{
                            return(
                                <tr key={key}>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed ? <i className="fa fa-check text-success" aria-hidden="true"></i> : <i className="fa fa-times text-danger" aria-hidden="true"></i>}</td>
                                    <td>
                                        <Link to={`/todo/add/${todo.id}`}><i className="fas fa-edit text-warning mx-2 pointer" ></i></Link>
                                        <i className="fas fa-trash text-danger mx-2 pointer" onClick={()=>handleDeleteTodo(todo.id, todo.title)} ></i>
                                    </td>
                                </tr> 
                            )
                        })}
                    </tbody>
            </Table>
            <MyPagination total={total.length / 10} current={page} onChangePage={handleChangePage} />
            
        </div>
    )

}

export default Todos;