import React, { Component } from 'react'
import sebao from "./search.module.css"
import axios from "axios"

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
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
                <main>{
                    this.state.list.map(v=>(
                        <div key={v.schedular_id} className={sebao.small}></div>
                    ))
                    }
                </main>
            </div>
        )
    }
    async componentDidMount(){
        console.log(this.props.location.state.vid)
        const {data}=await axios(`/cheng/Show/Search/getShowList?venue_id=${this.props.location.state.vid}`)
        console.log(data.data.list)
        this.setState({
            list:data.data.list
        })
    }
}
