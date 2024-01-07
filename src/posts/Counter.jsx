import React, { useState } from 'react';

const Counter = (MainComponent) => {
    const [counter, setCounter] = useState(0);
    const handleChangeCounter = () => {
        setCounter(counter+ 1);
    }
    const NewComponent = () => {
        return <MainComponent counter={counter} handleChangeCounter={handleChangeCounter} />
    }
    return NewComponent;
}

export default Counter;
