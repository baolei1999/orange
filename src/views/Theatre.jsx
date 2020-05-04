import React, { Component } from 'react';
import store from "../store/index"
import thbao from "./theatre.module.css"
import "../assets/css/reset.css"
import axios from "axios"
import lunbo1 from "../components/lunbo1"

class theatre extends Component {
    constructor(props){
        super(props)
        this.state={
            theatre_list:[]
        }
    }
    render() {
        return (
            <div className={thbao.big}>
                <header>剧院</header>
                <main>
                    <ul>
                        {
                            this.state.theatre_list.map(v=>(
                                <li key={v.id}>
                                    <div className={thbao.top}>
                                        <img className={thbao.one} height="100" width="100" src={v.pic} alt=""/>
                                        <span>{v.name}</span><br/>
                                        <span>{v.count+"场在售演出"}</span>
                                        <img className={thbao.two} src={require("../assets/img/more.png")} alt=""/>
                                    </div>
                                    <div className={thbao.bottom}>
                                        {/* <lunbo1></lunbo1> */}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </main>
                <footer></footer>
            </div>
        );
    }
    async componentDidMount(){
        console.log(store.getState())
        const {data}= await axios.get("/cheng//theatre/index/getTheatreList?page=1&version=6.1.1&referer=2")
        // console.log(data.data.theatre_list)
        this.setState({
            theatre_list:data.data.theatre_list
        })
        console.log(this.state.theatre_list)
    }
}

export default theatre;