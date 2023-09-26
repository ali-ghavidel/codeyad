import React, { Component } from 'react';
import './style.css'

class Timer extends Component {
    constructor () {
        super();
        this.state = {
          time: new Date().toLocaleTimeString(),
        };
      }
      render () {
        setInterval(()=>{
          this.setState({
            time: new Date().toLocaleTimeString()
          });
        },1000);
        return(
          <h2 className="timer">
            tims is: {this.state.time}
          </h2>
        );
      }
}

export default Timer;
