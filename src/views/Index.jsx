import React, { Component } from 'react';
import index from "./index.module.css"

class Index extends Component {
    render() {
        return (
            <div>
                <header className={index.linHeader}>
                    <div className={index.headerLocation} >全国</div>
                    <div>
                        <input  type={"text"}  />
                    </div>
                    <div className={index.headerLocation}>日历</div>
                </header>
                <div className={index.banner}>
                    <div className={index.bannerContent}></div>
                </div>
            </div>
        );
    }
}

export default Index;