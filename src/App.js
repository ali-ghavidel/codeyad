import React, { useEffect, useState } from 'react';
import Hello from './Hello';
import Timer from './Timer';
import './style.css';

const App = () => {
    const [title, setTitle] = useState('welcome to my project')
    const [isLight, setIsLight] = useState(false);
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
            <Timer isLight={isLight} handleSetIsLight={handleSetIsLight} /> 
        </div>
    );

}

export default App;
