import React, { Component, createRef } from 'react';
import FComponent from './FComponent';

class ParentCompo extends Component {
    constructor () {
        super();
        this.myInput = createRef();
    }
    componentDidMount () {
        this.myInput.current.focus();
    }
    render() {
        return (
            <div>
                {/* <PureCompo /> */}
                <FComponent ref={this.myInput} />
            </div>
        );
    }
}

export default ParentCompo;
