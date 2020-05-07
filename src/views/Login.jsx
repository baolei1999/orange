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
            e.target.value = "";
            this.props.history.go(-2);
        } else {

        }
    }




    render() {
        return (
            <div style={{width:'600px',height:'800px',background:" rgba(213,163,112,0.5)",margin:'100px auto',borderRadius:'0.4rem'}}>
               <div style={{fontSize:'36px',textAlign:'center',paddingTop:'100px'}}>请登录</div>
               <input onKeyUp={this.login.bind(this)} style={{ border:'none',border:'1px solid #6b4128',borderRadius:'0.4rem', width: '500px', height: '80px' ,margin:' 50px 45px',fontSize:'30px'}} type="text" />
               <div><img style={{margin:'80px 135px'}} src={require('../assets/img/login_logo.4a43235.png')} alt=""/></div>
            </div>
        )
    }
}
