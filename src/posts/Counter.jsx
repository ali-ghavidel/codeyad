import React, { useState } from 'react';

const Counter = (MainComponent, number) => {
    const NewComponent = (props) => {
        const [counter, setCounter] = useState(0);
        const handleChangeCounter = () => {
        setCounter(counter+ number);
    }
        return <MainComponent {...props} counter={counter} handleChangeCounter={handleChangeCounter} />
    }
    return NewComponent;
}

export default Counter;
