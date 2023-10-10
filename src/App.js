import React, { useEffect, useState } from 'react';
import Hello from './Hello';
import Timer from './Timer';

import './style.css';

const App = () => {
    const [title, setTitle] = useState('welcome to my project')
    const [isLight, setIsLight] = useState(false);
    const [timeArr, setTimeArr] = useState(['00:06:35', '00:30:06']);
    useEffect(() => {
        //componentDidMout , if array filled + componentDidUpdate
        console.log('useEffect');
        //componentDidUnmount
        return () => {

        }
    },[isLight]);
    const handleSetIsLight = () => {
        setIsLight(!isLight);
    }
    return (
        <div className={`${isLight ? "main-light" : "main-dark"}`}>
            <Hello title={title} />
            <Timer isLight={isLight} handleSetIsLight={handleSetIsLight} timeArr={timeArr} setTimeArr={setTimeArr} />
           
        </div>
    );

}

export default App;
