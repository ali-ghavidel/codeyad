import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

class Hello extends React.Component{
  render(){
    return(
      <h1>سلام دوستان عزیز</h1>
    );
  }
}

class Timer extends React.Component{
  render () {
    return(
      <h2>
        tims is: {new Date().toLocaleTimeString()}
      </h2>
    );
  }
}

class App extends React.Component{
  render(){
    return (
      <div>
        <Hello />
        <Timer /> 
      </div>
    );
  }
}


const tick = () => {
  root.render(
    <App />
  );
}

setInterval(()=>{
  tick();
},1000);




