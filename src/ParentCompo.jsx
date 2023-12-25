import React, { Component, createRef } from 'react';
import PureCompo from './PureCompo';

class ParentCompo extends Component {
    constructor () {
        super();
        this.myComponent = createRef();
    }
    handleChangeNameParent = () => {
        this.myComponent.current.handleChangeName();
    }
    render() {
        console.log(this.myComponent);
        return (
            <div>
                <PureCompo ref={this.myComponent} />
                <button className='btn btn-success' onClick={this.handleChangeNameParent}>save</button>
            </div>
        );
    }
}

export default ParentCompo;
