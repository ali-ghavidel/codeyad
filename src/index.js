import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Hello extends React.Component{
  render(){
    return(
      <h1>سلام دوستان عزیز</h1>
    );
  }
}

class Timer extends React.Component{
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

class App extends React.Component{
  render(){
    return (
      <div className='main'>
        <Hello />
        <Timer /> 
      </div>
    );
  }
}


// const tick = () => {
  root.render(
    <App />
  );
// }

// setInterval(()=>{
//   tick();
// },1000);




