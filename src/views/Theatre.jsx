import React, { Component } from 'react';
import store from "../store/index"
import thbao from "./theatre.module.css"
class theatre extends Component {
    render() {
        return (
            <div className={thbao.big}>
                <header>剧院</header>
                <main></main>
                <footer></footer>
            </div>
        );
    }
    componentDidMount(){
        console.log(store.getState())
    }
}

export default theatre;