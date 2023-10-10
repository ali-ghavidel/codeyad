import React, { useState } from 'react';
import Hello from './Hello';
import Timer from './Timer';
import './style.css';

// class App extends Component {
//     constructor () {
//         super();

//         this.state = {
//             title: 'its a timer'
//         }
//     }
    
//     render() {
//         return (
//             <div className='main'>
//                 <Hello title={this.title} />
//                 <Timer /> 
//             </div>
//         );
//     }
// }

const App = () => {
    const [title, setTtitle] = useState('its a timer');
    const handleSetTitle = () => {
        setTtitle('welcome to my project');
    }
    return (
        <div className='main'>
            <Hello title={title} />
            <Timer handleSetTitle={handleSetTitle} /> 
        </div>
    );

}

export default App;
