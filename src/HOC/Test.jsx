import React from 'react';
import swal from 'sweetalert';

const Test = (props) => {
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
    return (
        <>
            {props.render(Confirm, Alert)}
        </>
    );
}

export default Test;
