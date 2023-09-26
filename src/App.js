import React, { Component } from 'react';
import Hello from './Hello';
import Timer from './Timer';
import './style.css';

class App extends Component {
    render() {
        return (
            <div className='main'>
                <Hello />
                <Timer /> 
            </div>
        );
    }
}

export default App;
