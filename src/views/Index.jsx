import React, { Component } from 'react';
import index from "./index.module.css"
import axios from "axios"
class Index extends Component {


    constructor() {
        super();
        this.state = {
          page:1,
          list:[]
        }
      }

      async getNewsList(){
        // this.state.page++;
        // this.btn.value="加载中……"
    
        const {data}= await axios.get("/cheng/home/index/getClassifyHome",{
          params:{
            page:this.state.page
          }
        })
        console.log(data.data)
        // this.setState({
        //   list:[
        //     ...this.state.list,
        //     ...data.data.list
    
        //   ]
        // })
      }
     
       async componentDidMount(){
       this.getNewsList()
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
                   <div className={index.listChildren}>
                       <a>1</a>
                   </div>
                   <div>
                       <a>1</a>
                   </div>
                   <div>
                       <a>1</a>
                   </div>
                   <div>
                       <a>1</a>
                   </div>
                </div>

            
            
            </div>
        );
    }
}

export default Index;