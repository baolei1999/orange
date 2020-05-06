import React, { Component } from 'react';
import index from "./index.module.css"
import axios from "axios"
import Swiper from 'swiper'
import Footer from "../components/Footer"
class Index extends Component {


    constructor() {
        super();
        this.state = {
            page: 0,
            navList: [],
            recommendList: [],
            discountList: []
        }
    }

    async getNavList() {
        const { data } = await axios.get("/cheng/home/index/getClassifyHome")
        // console.log(data.data.classify_list)
        this.setState({
            navList: data.data.classify_list
        })

    }
    async getDiscountList() {
        const { data } = await axios.get("/cheng/home/index/getHotsRecommendList")
        console.log(data.data.hots_show_list)
        this.setState({
            discountList: data.data.hots_show_list
        })
    }
    async getRecommend() {
        this.state.page++
        const { data } = await axios.get("/cheng/Show/Search/getShowList", {
            params: {
                page: this.state.page
            }
        })
        // console.log(data.data.list)
        this.setState({
            recommendList: [
                ...this.state.recommendList,
                ...data.data.list

            ]
        })
    }s
    async componentDidMount() {
        this.getNavList()
        this.getRecommend()
        this.getDiscountList()


        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
                waitForTransition: false,
            },
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
        })



    }

    render() {
        return (
            <div className={index.lin}>
                <header className={index.linHeader}>
                    <div className={index.headerLocation} >
                        <strong style={{ float: "left" }}>
                            <img src={require("../assets/img/1.png")}></img>
                        </strong>
                        <span className={index.hraderLocal}>全国</span>
                    </div>
                    <div>
                        <input type={"text"} className={index.linInput} />
                    </div>
                    <div className={index.headerLocation}>
                        <img src={require("../assets/img/2.png")}></img>
                    </div>
                </header>
                <main className={index.linMain}>
                <div className='banner' >
                    <div className='swiper-container' >
                        <div className='swiper-wrapper ' style={{ width: "12400px" }}>
                            <div className='swiper-slide' style={{ float: "left", }}>
                                <img style={{ display:'block' , margin:"0 auto"}} src="https://image.juooo.com/group1/M00/03/94/rAoKmV59ZUyAfU1aAAESuLTnTAw739.png" />
                            </div>
                            <div className='swiper-slide' style={{ float: "left" }}>
                                <img style={{ display:'block' , margin:"0 auto"}} src="https://image.juooo.com/group1/M00/03/6D/rAoKmV4B3DeAAheBAAE8k0yWnNo649.png" />
                            </div>
                            <div className='swiper-slide' style={{ float: "left" }}>
                                <img style={{ display:'block' , margin:"0 auto"}} src="https://image.juooo.com/group1/M00/03/6D/rAoKmV4B3CmARboCAACCt7TZJ7k095.png" />
                            </div>
                            <div className='swiper-slide' style={{ float: "left" }}>
                                <img style={{ display:'block' , margin:"0 auto"}} src="https://image.juooo.com/group1/M00/03/6D/rAoKmV4B29-AdwTZAAB-i9-En8E765.png" />
                            </div>
                            <div  className='swiper-slide' style={{ float: "left" }}>
                                <img style={{ display:'block' , margin:"0 auto"}} src="https://image.juooo.com/group1/M00/04/17/rAoKNV4B2zOADywIAACKVI3TINE298.png" />
                            </div>
                            <div className='swiper-slide' style={{ float: "left" }}>
                                <img style={{ display:'block' , margin:"0 auto"}} src="https://image.juooo.com/group1/M00/04/40/rAoKNV6W4PKACOg2AAEj0bMT7bw022.png" />
                            </div>
                            <div className='swiper-slide' style={{ float: "left" }}>
                                <img style={{ display:'block' , margin:"0 auto"}} src="https://image.juooo.com/group1/M00/04/3E/rAoKNV6ClgWAOtm_AAEhpdmQomE538.jpg" />
                            </div>

                        </div>

                    </div>

                </div>

                <div className={index.list} style={{ height: "550px" }}>
                    {
                        this.state.navList.map(v => (
                            <div className={index.listChildren} key={v.id}>
                                <a href={v.url} className={index.listMao}>
                                    <img className={index.listImg} style={{ width: "x" }} src={v.pic} />
                                    <span className={index.listWrod}>{v.name}</span>
                                </a>
                            </div>
                        ))

                    }

                </div>

                <section className={index.vipAhead}>
                    <a>
                        <div style={{ overflow: 'hidden', width: "600px", margin: "0 auto", borderBottom: "solid 1px rgba(213,163,112,0.5)" }}>
                            <p className={index.discount}>
                                <img src={require("../assets/img/lin3.png")} alt="" />
                                <span>会员折扣价</span>
                            </p>
                            <p className={index.discount} style={{ marginLeft: "250px", marginTop: '20px', }}>99/每年</p>
                        </div>
                        <div className='banner' >
                            <div className='swiper-container' >
                                <div className='swiper-wrapper ' style={{ width: "3000px" }}>
                                    <div className='swiper-slide' style={{ float: "left", width: '110px', height: '150px', margin: '30px' }}>
                                        <p className={index.vipList}><img style={{ width: '110px', height: '150px' }} src="https://image.juooo.com/group1/M00/03/38/rAoKmV2_wuuAQ3PKAAC-dYecJHk485.jpg" /></p>
                                        <p className={index.vipList}>【小橙堡】经典亲子童话剧《胡桃夹子》-固安站</p>
                                        <br />
                                        <p style={{ color: 'red', margin: '50px', paddingLeft: '100px' }}>5 折起</p>
                                    </div>
                                    <div className='swiper-slide' style={{ float: "left", width: '110px', height: '150px', marginTop: '30px' }}>
                                        <p className={index.vipList}><img style={{ width: '110px', height: '150px' }} src="https://image.juooo.com/group1/M00/03/38/rAoKmV2_wIuAWsXBAADPA6clalw098.jpg" /></p>
                                        <p className={index.vipList}>【小橙堡】经典亲子童话剧《胡桃夹子》-固安站</p>
                                        <br />
                                        <p style={{ color: 'red', margin: '50px', paddingLeft: '100px' }}>5 折起</p>


                                    </div>
                                    <div className='swiper-slide' style={{ float: "left", width: '110px', height: '150px', marginTop: '30px' }}>
                                        <p className={index.vipList}><img style={{ width: '110px', height: '150px' }} src="https://image.juooo.com/group1/M00/03/D5/rAoKNV2m0miATupUAACePEfinjA021.jpg" /></p>
                                        <p className={index.vipList}>【小橙堡】经典亲子童话剧《胡桃夹子》-固安站</p>
                                        <br />
                                        <p style={{ color: 'red', margin: '50px', paddingLeft: '100px' }}>5 折起</p>

                                    </div>



                                </div>

                            </div>
                        </div>

                    </a>
                </section>

                <div className={index.advertion}>
                    <div  style={{margin:"0 auto"}}>
                        <a href="https://m.juooo.com/plus/index">
                        <img   style={{ display:'block' , margin:"0 auto"}} src="https://image.juooo.com/group1/M00/03/96/rAoKmV6W4RyAdkouAAJa2-GtD74165.png" />
                    </a>
                    </div>
                </div>

                <div className={index.hotAction}>
                    <div>
                        <p>热门演出</p>
                        <div className="swiper-container">
                            <div className="swiper-wrapper" style={{width:'5000px'}}>
                                {
                                    this.state.discountList.map((v,index)=>(
                                      <div key={index}  className="swiper-slide" style={{width:'201px',float:'left',margin:'20px 8px'}}>
                                          <div className={index.hotBook}>
                                              <img style={{width:"200px"}} src={v.pic} alt=""/>
                                          </div>
                                          {v.show_name}
                                      </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>


                <div className={index.Recommend}>
                    <h3>为你推荐</h3>
                    {
                        this.state.recommendList.map(v => (
                            <div key={v.schedular_id} className={index.recommendList}>
                                <a >
                                    <img style={{ width: "340px", height: "462px" }} src={v.pic} />
                                </a>
                                <div>
                                    <img src={v.method_icon} />
                                    <span>
                                        {v.name}
                                    </span>
                                    <p>
                                        {v.start_show_time}
                                    </p>
                                    <p>
                                        ￥{v.min_price}起
                                    </p>
                                    <div>
                                        {
                                            v.support_desc.map(v => (
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
                    <input type={"button"} value={"加载更多"} onClick={this.getRecommend.bind(this)} />
                </div>

                </main>

                <Footer></Footer>



            </div>
        );
    }
}

export default Index;
