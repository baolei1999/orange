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
                <header className={sebao.head}>
                    <div className={sebao.search}>
                        <img src={require("../assets/img/search.png")} alt=""/>
                        <input type="text" placeholder="搜索热门演出" />
                    </div>
                    <input type="button" className={sebao.btn} value="取消"/>
                </header>
                <main className={sebao.mai}>{
                    this.state.list.map(v=>(
                        <div key={v.schedular_id} className={sebao.small}>
                            <img width="339" height="463" src={v.pic} alt=""/>
                            <span className={sebao.city}>{v.city_name}</span>
                            <div className={sebao.bottom}>
                                <div className={sebao.one}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{v.name}
                                </div>
                                <img width="67" height="34" src={require("../assets/img/zhuban.png")} alt=""/>
                                <span>{v.start_show_time}</span>
                                <div><span className={sebao.price}>￥{v.min_price}</span>起</div>
                                <a href="#">电子票</a>
                                <a href="#">可选座</a>
                            </div>
                        </div>
                    ))
                    }
                    <span className={sebao.more}>没有更多了</span>
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
