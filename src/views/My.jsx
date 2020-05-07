import React, { Component } from 'react'

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
            <div>
              <div>
                  {"用户:"+localStorage.userName}
              </div>
              <input type={"button"} value={"退出登录"}  onClick={this.outLogin.bind(this)} />

            </div>
        )
    }
}
