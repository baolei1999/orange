import React, { Component } from 'react';
import store from "../store/index"
class theatre extends Component {
    render() {
        return (
            <div>
                00dd
            </div>
        );
    }
    componentDidMount(){
        console.log(store.getState())
    }
}

export default theatre;