import React, { useEffect, useState } from 'react';
import style from '../style.module.css'
import { Link, useParams } from 'react-router-dom';
import { getAlbumsService, getPhotosService } from '../services/GalleryService';
import Album from './Album';
import Photos from './Photos';


const Gallery = ()=>{

    // albumId ...........
    const {albumId} = useParams();
    //  states ...........
    const [albums, setAlbums] = useState([]);
    const [mainAlbums, setMainAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [mainPhotos, setMainPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    // API
    useEffect(()=>{
        albumId ? getPhotosService(setPhotos, setMainPhotos, page, albumId, setTotal) : getAlbumsService(setAlbums,setMainAlbums, page) ;
    },[albumId, page, setPhotos])
        return (
            <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
                <h4 className="text-center">مدیریت گالری ها</h4>
                <h4 className="text-center">{albumId ? "تصاویر آلبوم " : "آلبوم ها"}</h4>
                {albumId ? 
                <div className='d-flex justify-content-end'>
                    <Link to={'/gallery'}>
                        <button className='btn btn-warning'>بازگشت <i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                    </Link>
                </div>
                :
                ""}
                {albumId ? <Photos photos={photos} mainPhotos={mainPhotos} current={page} setPage={setPage} total={total} /> : <Album albums={albums} mainAlbums={mainAlbums} current={page} setPage={setPage} /> }
            </div>
        )
    

}

export default Gallery;