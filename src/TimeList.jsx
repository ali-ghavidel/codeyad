import React from 'react';
import Item from './Item';
const TimeList = (props) => {
    return (
        <div className='timeList'>
            {props.children.map((value, key) => {
                return (
                    <Item key={key}>
                        {value}
                    </Item>
                )
            })}
        </div>
    );
}

export default TimeList;
