import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyPagination from '../pagination/MyPagination';
// import style from '../style.module.css';

const Photos = ({photos, mainPhotos, current, setPage, total}) => {
    useEffect(()=>{
        setPage(1);
    },[setPage, photos])
    const onChangePage = useCallback((current)=>{
        setPage(current);
    },[setPage])
    return (
        <div className="container">
            <div className='row h-100 equal-height-row d-flex flex-wrap'>
        {photos.map((photo, key)=>{
            return(
                <div className="col-4 p-1"  key={key}>
                    <div className='card p-0'>
                        <img src={photo.thumbnailUrl} className="card-img-top w-100" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{photo.title.substr(0,30)}...</h5>
                            <Link to={`/gallery/photo/${photo.id}`} state={photo} >
                            <button className="btn btn-primary">تصویر کامل</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
        <MyPagination total={total / 10} current={current} onChangePage={onChangePage} />
       </div>
    );
}

export default Photos;
