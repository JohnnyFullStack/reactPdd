import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import ShopTools from "../../../uitls/shopTools"
import "./index.scss"

import {connect} from "react-redux";

@connect(
    state => ({shop:state}),
    {}
)

class Foot extends Component {
    render() {
        const num = this.props.shop.cartCount.data;
        return (
            <div className={"foot"}>
                <ul>
                    <li>
                        <NavLink exact activeClassName={"active"} to={"/"}>
                            <span className={"icon iconfont icon-shouye"}></span>
                            <span className={"text"}>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/map"}>
                            <span className={"icon iconfont icon-ditu"}></span>
                            <span className={"text"}>地图</span>
                        </NavLink>
                    </li>
                    <li className={"cart"}>
                        <NavLink to={"/cart"}>
                            <span className={"icon iconfont icon-gouwuche"}></span>
                            <span className={"num"}>{num || ShopTools.getShopSum()}</span>
                            <span className={"text"}>购物车</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/my"}>
                            <span className={"icon iconfont icon-iconfuzhi"}></span>
                            <span className={"text"}>我的</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Foot;