import React, { useCallback, useContext, useEffect, useState } from 'react';
import style from '../style.module.css'
import { deletePostService, getAllPostsService } from '../services/PostServices';
import { Link, useParams } from 'react-router-dom';
import MyPagination from '../pagination/MyPagination';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UsersContext } from '../context/MainContext';
import Loading from '../services/Loading';
import swal from 'sweetalert';
const Posts = ()=>{

    const [mainPosts, setMainPosts] = useState([]);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const {userId} = useParams();
    const {currentUser} = useContext(UsersContext);
    
    useEffect(()=>{
            getAllPostsService(setPosts, setMainPosts, page, setTotal);
    },[page,userId,setPosts]);

    const handleChangePage = useCallback((page)=> {
        setPage(page);
    },[])

    const handleDeletePost = (id, title) => {
        swal({
            title: "مطمئنید؟",
            text: "شما این پست را حذف خواهید کرد!",
            icon: "warning",
            dangerMode: true,
            buttons: ["خیر", "بله"]
          })
          .then((willDelete) => {
            if (willDelete) {
              deletePostService(id, title);
              setPosts(mainPosts.filter((p)=> p.id !== id));
            } else {
              swal("موردی حذف نشد");
            }
          });
        
    }
    const handleSearchInput = (e) => {
        setPosts(mainPosts.filter((v)=> v.title.toLowerCase().includes(e.target.value.toLowerCase()) ));
    }
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت پست ها</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو" onChange={handleSearchInput}/>
                </div>
                <div className="col-2 text-start px-0 d-flex">
                   
                   <Link to={'/post/add'}>
                    <button className="btn btn-success mx-1">
                        <i className="fas fa-plus text-light"></i> افزودن پست جدید
                    </button>
                    </Link>
                   
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
                                    <td>{post.id}</td>
                                    <td>{post.title.length > 31 ? post.title.substr(0,30)+"..." : post.title}</td>
                                    <td>{post.body.substr(0,50)}...</td>
                                    <td><Link to={`/user/add/${post.userId}`}>{post.author}</Link></td>
                                    <td>
                                        {currentUser.id === post.userId ?
                                        <Link to={`/post/add/${post.id}`}>
                                        <i className="fas fa-edit text-warning mx-2 pointer" ></i>
                                        </Link>
                                        :
                                        <i className="fas fa-edit text-warning mx-2 cursor-not-allowed" ></i>
                                        }
                                        <i className="fas fa-trash text-danger mx-2 pointer" onClick={()=>handleDeletePost(post.id, post.title)} ></i>
                                    </td>
                                </tr> 
                            )
                        })}
                    </tbody>
            </Table>
            <MyPagination total={total} current={page} onChangePage={handleChangePage} />
            </>
            :
            <Loading />
            
            }
            
            
        </div>
    )

}

export default Posts;