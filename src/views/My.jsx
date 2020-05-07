import React, { Component } from 'react'
import Footer from "../components/Footer"
export default class Search extends Component {


    componentWillMount(){
        if(!localStorage.userName){
            this.props.history.push("/Login")
        }
    }
    outLogin(){
        localStorage.userName="";
        this.props.history.push("/")
    }
    render() {
        return (
            <div style={{width:'600px',height:'800px',background:" rgba(213,163,112,0.5)",margin:'100px auto',borderRadius:'0.4rem'}}>
              <div style={{fontSize:'36px',textAlign:'center',paddingTop:'100px'}}>
                  {"用户:"+localStorage.userName}
              </div>
              <input style={{ fontSize:'36px', border:'none',border:'1px solid #6b4128',borderRadius:'0.4rem', width: '250px', height: '60px' ,margin:' 150px 165px'}} type={"button"} value={"退出登录"}  onClick={this.outLogin.bind(this)} />

            </div>

        )   
    }
}
