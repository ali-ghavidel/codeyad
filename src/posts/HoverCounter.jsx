import React from 'react';
import Counter from './Counter';

const HoverCounter = (props) => {

    const {counter, handleChangeCounter} = props
    return (
        <div className='text-center w-100 mt-4'>
            <button className='btn btn-info' onMouseEnter={handleChangeCounter}>counter: {counter}</button>
        </div>
    );
}

export default Counter(HoverCounter);
