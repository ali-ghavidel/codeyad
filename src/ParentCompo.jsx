import React, { Component } from 'react';
import PureCompo from './PureCompo';

class ParentCompo extends Component {
    constructor () {
        super();
        this.state = {
            name: "ali"
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({name: "ali"});
        }, 1000);
        
    }
    render() {
        console.log("-----parent-------");
        return (
            <div>
                <PureCompo name={this.state.name} />
            </div>
        );
    }
}

export default ParentCompo;
