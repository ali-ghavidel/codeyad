import React, { useCallback, useEffect, useState } from 'react';
import style from '../style.module.css'
import { getUserPosts } from '../services/PostServices';
import { useNavigate, useParams } from 'react-router-dom';
import MyPagination from '../pagination/MyPagination';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const UserPosts = ()=>{

    let counter = 0;
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [user, setUser] = useState({});
    const {userId} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
            getUserPosts(userId, setPosts, page, setTotal, setUser);
    },[page,userId,setPosts]);

    const handleChangePage = useCallback((page)=> {
        setPage(page);
    },[])
   
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">{`پست های ${user.name}`}</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو"/>
                </div>
                <div className="col-2 text-start px-0 d-flex">
                    <button className="btn btn-success mx-1" onClick={()=>navigate('/post')}>
                        <i className="fas fa-back text-light"></i> بازگشت به پست ها
                    </button>
                   
                </div>
            </div>
            {posts.length > 0 ?
            <>
                <Table className="table bg-light shadow">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>عنوان</th>
                            <th>توضیحات</th>
                            <th>نویسنده</th>
                            <th>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* <Paginate posts={posts} /> */}
                        {posts.map((post, key)=>{
                            
                            return(
                                <tr key={key}>
                                    <td>{++counter}</td>
                                    <td>{post.title.length > 31 ? post.title.substr(0,30)+"..." : post.title}</td>
                                    <td>{post.body.substr(0,50)}...</td>
                                    <td>{user.name}</td>
                                    <td>
                                        <i className="fas fa-edit text-warning mx-2 pointer" ></i>
                                        <i className="fas fa-trash text-danger mx-2 pointer" ></i>
                                    </td>
                                </tr> 
                            )
                        })}
                    </tbody>
            </Table>
            <MyPagination total={total} current={page} onChangePage={handleChangePage} />
            </>
            :
            <h3>لطفا شکیبا باشید</h3>
            }
            
            
        </div>
    )

}

export default UserPosts;