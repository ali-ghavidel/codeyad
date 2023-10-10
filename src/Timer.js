import React, { Component, Fragment } from 'react';
import './style.css'

var interval;
class Timer extends Component {
  
    constructor () {
        super();
        this.state = {
          hour: 0,
          minute: 0,
          second: 0,
          isStart: false
        };
      }
      handleTimeStart = () => {
        
        if(this.state.isStart === false){
          this.setState({
            isStart: true
          });
          interval = setInterval(()=>{
            this.setState({
              second: this.state.second + 1
            });
            if(this.state.second === 59){
              this.setState({
                second: 0,
                minute: this.state.minute +1
              })
            }
            if(this.state.minute === 59) {
              this.setState({
                minute: 0,
                hour: this.state.hour +1
              })
            }
          },1000);
        }
        
      }
      handleTimeStop = () => {
        this.setState({
          isStart: false
        });
        clearInterval(interval);
      }

      handleTimeRest = () => {
        this.handleTimeStop();
        this.setState({
          hour: 0,
          minute: 0,
          second: 0
        })
      }
    
    render () {
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;
            return(
                <Fragment>
                  <h2 className="timer">
                    {`${h > 9 ? h : "0"+h} : ${m > 9 ? m : '0'+m} : ${s > 9 ? s : '0'+s}`}
                  </h2>
                  <div className='timerButtons'>
                    <button className='timerButtons_style success' onClick={this.handleTimeStart}>
                      start
                    </button>
                    <button className='timerButtons_style danger' onClick={this.handleTimeStop}>
                      stop
                    </button>
                    <button className='timerButtons_style warning' onClick={this.handleTimeRest}>
                      reset
                    </button>
                    <button className='timerButtons_style white' onClick={this.props.handleSetTitle}>
                      Test
                    </button>
                  </div>
                </Fragment>
              );
        }
        
}

export default Timer;
