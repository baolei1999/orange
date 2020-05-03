import React, { Component } from 'react';
import index from "./index.module.css"
import axios from "axios"
class Index extends Component {


    constructor() {
        super();
        this.state = {
            page: 1,
            navList: [],
            recommendList:[]
        }
    }

    async getNavList() {
        const { data } = await axios.get("/cheng/home/index/getClassifyHome", {
            params: {
                page: this.state.page
            }
        })
        // console.log(data.data.classify_list)
        this.setState({
            navList: data.data.classify_list
        })
       
    }
    async getRecommend(){
        const {data} =await axios.get("/cheng/Show/Search/getShowList")
        console.log(data.data.list)
        this.setState({
            recommendList:data.data.list
        })
    
    }
    async componentDidMount() {
        this.getNavList()
        this.getRecommend()
    }

    render() {
        return (
            <div>
                <header className={index.linHeader}>
                    <div className={index.headerLocation} >
                        <strong >
                            <img src="../assets/img/1.png"></img>
                        </strong>
                        全国</div>
                    <div>
                        <input type={"text"} />
                    </div>
                    <div className={index.headerLocation}>
                        <img src="../assets/img/2.png"></img>
                    </div>
                </header>
                <div className={index.banner}>
                    <div className={index.bannerContent}></div>
                </div>
                <div className={index.list}>
                    {
                        this.state.navList.map(v => (
                            <div className={index.listChildren} key={v.id}>
                                <a href={v.url} className={index.listMao}>
                                    <img className={index.listImg} src={v.pic} />
                                    <span className={index.listWrod}>{v.name}</span>
                                </a>
                            </div>
                        ))

                    }



                </div>

                <section className={index.vipAhead}>
                    <a>
                        <div></div>
                    </a>
                </section>

                <div className={index.advertion}>
                    <a href="https://m.juooo.com/plus/index">
                        <img src="https://image.juooo.com/group1/M00/03/96/rAoKmV6W4RyAdkouAAJa2-GtD74165.png" />
                    </a>
                </div>

                <div className={index.hotAction}>
                    <div>
                        <p>热门演出</p>
                    </div>
                </div>


                <div className={index.Recommend}>
                    <h3>为你推荐</h3>
                    {
                        this.state.recommendList.map(v=>(
                            <div key={v.schedular_id} className={index.recommendList}>
                               <a >
                                    <img style={{width:"340px" ,height:"462px"}}src={v.pic} />   
                                </a>
                                <div>
                                    <img src={v.method_icon}/>
                                    <span>
                                        {v.name}
                                    </span>
                                    <p>
                                      {  v.start_show_time}
                                    </p>
                                    <p>
                                      ￥{  v.min_price}起
                                    </p>
                                    <div>
                                        {
                                            v.support_desc.map(v=>(
                                                <div key={v}>
                                                    <span>{v}</span>
                                                    

                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Index;
