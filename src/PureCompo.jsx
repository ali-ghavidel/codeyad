// import React, { Component, PureComponent } from 'react';

// class PureCompo extends PureComponent {
//     render() {
//         console.log("----puer----");
//         return (
//             <div>
//                 {"esme man hast : " + this.props.name}
//             </div>
//         );
//     }
// }

// export default PureCompo;

import React, { memo } from 'react';

const PureCompo = (props) => {
    console.log("----puer----");
    return (
        <div>
            {"esme man hast : " + props.name}
        </div>
    );
}

export default memo(PureCompo);
