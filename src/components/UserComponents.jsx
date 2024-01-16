import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers} from '../redux/user/userAction';

const UserComponents = () => {

    const {loading, data, error} = useSelector(state=>state);
    const dispatch = useDispatch();
    
    const handleGetUser = () => {
        dispatch(getUsers());
    }
    return (
        <div>
            <div className='text-center mt-5'>
                <button className='btn btn-success' onClick={handleGetUser}>دریافت کاربران</button>
            </div>
            {loading ? (
                <div className='text-center text-secondary mt-5'>
                    <div className='spinner-border' role='status'>
                        <span className='visually-hidden'>Loading ...</span>
                    </div>
                </div>
            ) : data.length > 0 ? (
                <ul className='text-center'>
                    {data.map((u, key)=>{
                        return <li key={key}>{u.username}</li>
                    })}
                </ul>
            ) : error ? (
                <h4 className='text-center text-danger mt-5'>{error}</h4>
            ) : (
                <h4 className='text-center text-dark mt-5'>کاربران را دریافت کنید</h4>
            )}
        </div>
    );
}

export default UserComponents;
