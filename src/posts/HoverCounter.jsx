import React from 'react';
import Counter from './Counter';

const HoverCounter = (props) => {

    const {counter, handleChangeCounter, name} = props
    return (
        <div className='text-center w-100 mt-4'>
            <button className='btn btn-info' onMouseEnter={handleChangeCounter}>name: {name} - counter: {counter}</button>
        </div>
    );
}

export default Counter(HoverCounter, 5);
