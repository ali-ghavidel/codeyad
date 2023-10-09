import React, { Component } from 'react';
import Hello from './Hello';
import Timer from './Timer';
import './style.css';

class App extends Component {
    constructor () {
        super();

        this.state = {
            title: 'its a timer'
        }
    }
    
    render() {
        return (
            <div className='main'>
                <Hello title={this.title} />
                <Timer /> 
            </div>
        );
    }
}

export default App;
