import React, { Component } from 'react'
import sebao from "./search.module.css"

export default class Search extends Component {
    render() {
        return (
            <div className={sebao.big}>
                <header>
                    <div className={sebao.search}>
                        <img src={require("../assets/img/search.png")} alt=""/>
                        <input type="text" placeholder="搜索热门演出" />
                    </div>
                    <input type="button" className={sebao.btn} value="取消"/>
                </header>
                <main></main>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.location.state)
    }
}
