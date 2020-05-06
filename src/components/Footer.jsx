import React, { Component } from 'react';
import fobao from "./footer.module.css"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,

} from "react-router-dom"
class Footer extends Component {
    render() {
        return (
            <nav>
                <div className={fobao.foo}>
                    <NavLink exact to={"/"}>
                        <span>
                            首页
                            <img src={require("../assets/img/index.png")} alt="" />
                        </span>
                    </NavLink>
                    <NavLink exact to={"/theatre"}>
                        <span>
                            剧院
                            <img src={require("../assets/img/theatre.png")} alt="" />
                        </span>
                    </NavLink>
                    <NavLink exact to={"search"}>
                        <span>
                            票夹
                        <img src={require("../assets/img/piao.png")} alt="" />
                        </span>
                    </NavLink>
                    <NavLink exact to={"my"}>
                        <span>
                            我的
                        <img src={require("../assets/img/my.png")} alt="" />
                        </span>
                    </NavLink>

                </div>
            </nav>
        );
    }
}

export default Footer;