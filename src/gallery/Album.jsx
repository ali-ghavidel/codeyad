import React, { useCallback } from 'react';
import MyPagination from '../pagination/MyPagination';
import { Link } from 'react-router-dom';
// import style from '../style.module.css';


const Album = ({ albums, mainAlbums, current, setPage }) => {
    
    const onChangePage = useCallback((current)=>{
        setPage(current);
    },[setPage])
    return (
        <>
            <table className="table bg-light shadow">
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            نام آلبوم
                        </th>
                        <th>
                            صاحب آلبوم
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map((a, key)=>{
                        return (
                            <tr key={key}>
                                <td>
                                    {a.id}
                                </td>
                                <td>
                                    <Link to={`/gallery/album/${a.id}`}>
                                    {a.title}
                                    </Link>
                                </td>
                                <td>
                                    {a.author}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <MyPagination total={mainAlbums.length} current={current} onChangePage={onChangePage} />
        </>
    );
}

export default Album;
