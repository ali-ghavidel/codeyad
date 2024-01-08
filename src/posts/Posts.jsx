import React from 'react';
import style from '../style.module.css'
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

const Posts = ()=>{

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت پست ها</h4>
            <ClickCounter  />
            <HoverCounter name="ali" />
        </div>
    )

}

export default Posts;