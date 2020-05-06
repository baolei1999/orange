import React, { Component } from 'react';
import store from "../store/index"
import thbao from "./theatre.module.css"
import "../assets/css/reset.css"
import axios from "axios"
import Footer from "../components/Footer"
import {NavLink} from "react-router-dom"

class theatre extends Component {
    constructor(props){
        super(props)
        this.state={
            theatre_list:[]
        }
    }
    render() {
        const theatre_list=[]
        this.state.theatre_list.find(v=>{
            if(v.showList.length>0){
                theatre_list.push(v)
            }
        })
        console.log(theatre_list)
        return (
            <div className={thbao.big}>
                <header>剧院</header>
                <main>
                    <ul>
                        {
                            theatre_list.map(v=>(
                                <li key={v.id}>
                                    <div className={thbao.top}>
                                        <img className={thbao.one} height="100" width="100" src={v.pic} alt=""/>
                                        <span>{v.name}</span><br/>
                                        <span>{v.count+"场在售演出"}</span>
                                        <img className={thbao.two} src={require("../assets/img/more.png")} alt=""/>
                                    </div>
                                    <div className={thbao.bottom}>
                                        <div className={thbao.boxx}>
                                            {
                                                v.showList.map(v1=>( 
                                                    <div className={thbao.small} key={v1.id}>
                                                        <div className={thbao.one}>
                                                            <div className="show-data">{v1.show_time}</div>
                                                            <span></span>
                                                        </div>
                                                        <div className={thbao.two}>
                                                            <img src={v1.pic} width="214" height="292" alt=""/>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            
                                            <div className={thbao.small}>
                                                <div className={thbao.more}><NavLink to={{pathname:"/search",state:{show_list_url:v.show_list_url}}}>查看更多>></NavLink></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </main>
                <Footer></Footer>
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