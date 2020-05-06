import React, { Component } from 'react';
import fobao from "./footer.module.css"

class Footer extends Component {
    render() {
        return (
            <div className={fobao.foo}>
                <span>
                    首页
                    <img src={require("../assets/img/index.png")} alt=""/>
                </span>
                <span>
                    剧院
                    <img src={require("../assets/img/theatre.png")} alt=""/>
                </span>
                <span>
                    票夹
                    <img src={require("../assets/img/piao.png")} alt=""/>
                </span>
                <span>
                    我的
                    <img src={require("../assets/img/my.png")} alt=""/>
                </span>
            </div>
        );
    }
}

export default Footer;