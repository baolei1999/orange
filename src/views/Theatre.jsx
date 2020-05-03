import React, { Component } from 'react';
import store from "../store/index"
import thbao from "./theatre.module.css"
import "../assets/css/reset.css"

class theatre extends Component {
    render() {
        return (
            <div className={thbao.big}>
                <header>剧院</header>
                <main>
                    <ul style={{flex:1}}>
                        <li>
                            <div className="top">
                                {/* <img src="" alt=""/> */}
                            </div>
                        </li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </main>
                <footer></footer>
            </div>
        );
    }
    componentDidMount(){
        console.log(store.getState())
    }
}

export default theatre;