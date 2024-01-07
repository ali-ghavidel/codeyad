import React, { useContext, useEffect, useState } from 'react';
import style from '../style.module.css';
import { UsersContext } from '../context/MainContext';
import { useNavigate, useParams } from 'react-router-dom';
import { getByPostIdService, setNewPostService, updatePostService } from '../services/PostServices';
import swal from 'sweetalert';

const AddPost = () => {
    const { currentUser } = useContext(UsersContext);
    const [post, setPost] = useState({
        userId: currentUser.id,
        title: "",
        body: ""
    })
    const navigate = useNavigate();
    const {postId} = useParams();
    
    useEffect(()=>{
        if(postId){
            getByPostIdService(postId, setPost);
        }
    },[postId]);
   
    const handleChangePostTitle = (e) => {
        setPost({...post, title: e.target.value});
    }
    const handleChangePostBody = (e) => {
        setPost({...post, body: e.target.value});
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(post.title.length){
            if(postId){
                updatePostService(post, currentUser.id);
            }else{
                setNewPostService(post,currentUser.id);
            }
            
        }else{
            swal({
                title: "اخطار",
                text: "امکان ثبت پست بدون عنوان وجود ندارد",
                icon: "error",
              })
        }
    }
    return (
        <div className={style.newPost}>
            <form className="form-group" onSubmit={handleSubmitForm}>
                <div className="mb-3">
                    <p>نویسنده:</p>
                    <p>{currentUser.name}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor='formtitle' className={`form-label ${style.label}`} >عنوان</label>
                    <input type="text" id='formtitle' value={post.title} onChange={handleChangePostTitle} className='form-control form-control-lg' />
                    {/* <textarea id='formtitle' value={post.title} onChange={handleChangePostTitle} className='form-control' rows={2} ></textarea> */}
                </div>
                <div className="mb-3">
                    <label htmlFor='body' className={`form-label ${style.label}`} >شرح</label>
                    <textarea id='body' value={post.body} onChange={handleChangePostBody} className='form-control' rows={10} ></textarea>
                </div>
                <div className="mb-3">
                    <button className='btn btn-success mx-1' type='submit'>ثبت</button>
                    <button className='btn btn-danger' onClick={()=>navigate('/post')}>بازگشت</button>
                </div>
            </form>
        </div>
    );
}

export default AddPost;
