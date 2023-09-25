import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
const tick = () => {
  
  const elem = (
    <div>
      <h1>سلام دوستان عزیز</h1>
      <h2>tims is: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  root.render(
    elem
  );
}

setInterval(()=>{
  tick();
},1000);




