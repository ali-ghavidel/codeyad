import React, { useState } from 'react';
import swal from 'sweetalert';

const AlertPopups = (MainComponent) => {
   const NewComponent = (props) => {
    const Confirm = (title = "", text, icon, buttons) => {
        return swal({
            title: title,
            text: text,
            icon: icon,
            buttons: buttons,
            dangerMode: true,
          })
    }
    const Alert = (message, icon) => {
        return swal(message, {
            icon: icon,
            buttons: "حله"
        });
    }
    const Test = () => {
        const [test, setTest] = useState(20);
        const handleSetTest = () => {
            setTest(test + 1)
        }
        return ( <div onClick={handleSetTest}>{test}</div>)
    }
    return ( <MainComponent {...props} Confirm={Confirm} Alert={Alert} Test={Test} />)
   }
   return NewComponent;
}

export default AlertPopups;
