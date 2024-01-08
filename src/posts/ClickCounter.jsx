import React from 'react';
import Counter from './Counter';

const ClickCounter = (props) => {

    const {counter, handleChangeCounter} = props;
    return (
        <div className='text-center w-100'>
            <button className='btn btn-success' onClick={handleChangeCounter}>counter: {counter}</button>
        </div>
    );
}

export default Counter(ClickCounter, 3);
