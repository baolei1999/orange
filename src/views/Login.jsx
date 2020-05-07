import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:[]
        };
    }

    login(e) {
        if (e.keyCode === 13 && e.target.value != "") {
            const userName = e.target.value;
            localStorage.userName = userName;
            alert("欢迎" + e.target.value + "来到聚成");
            e.target.value = "";
            this.props.history.go(-1);
        } else {

        }
    }




    render() {
        return (
            <div>
                请登录
 
               <input onKeyUp={this.login.bind(this)} style={{ width: '500px', height: '100px' }} type="text" />
            </div>
        )
    }
}
