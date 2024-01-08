import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCommentsOfPost } from '../services/CommentService';
import style from '../style.module.css'

const Comments = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);
    const [mainComments, setMainComments] = useState([]);

    useEffect(()=>{
        getCommentsOfPost(postId, setComments, setMainComments);
    },[postId])

    const handleSearchInput = (e) => {
        setComments(mainComments.filter((c)=>c.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کامنت ها</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو" onChange={handleSearchInput}/>
                </div>
                <div className="col-2 text-start px-0 d-flex">
                    <Link to={'/post'}>
                        <button className="btn btn-info text-light  mx-1">
                        بازگشت <i className="fas fa-arrow-left text-light"></i>
                        </button>
                    </Link>
                </div>
            </div>
            <table className='table bg-light shadow hovered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>آی دی پست</th>
                        <th>نام</th>
                        <th>ایمیل</th>
                        <th>متن</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((comment, key)=>{
                    return (
                        <tr key={key}>
                            <td>{comment.id}</td>
                            <td>{comment.postId}</td>
                            <td>{comment.name}</td>
                            <td>{comment.email}</td>
                            <td>{comment.body}</td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Comments;
