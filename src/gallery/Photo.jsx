import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const Photo = () => {
    const {state} = useLocation();
    return (
        <div className={`p-3 d-flex flex-column align-items-center justify-content-center`}>
            <h4 className='mt-1'>عنوان تصویر: {state.title}</h4>
            <img className='rounded img-fluid' src={state.url} alt='...'  />
            <Link to={`/gallery/album/${state.albumId}`}>
                <button className='btn btn-info mt-2 text-light' >آلبوم تصویر: {state.albumTitle}</button>
            </Link>
        </div>
        
    );
}

export default Photo;
