import React, {Component} from 'react';
import "./index.scss"

class My extends Component {
    render() {
        return (
            <div className={"my bg"}>
                <div className={"my-head"}>
                    <div className={"user"}>
                        <img src={require("../../static/img/avatar.png")} alt=""/>
                        <div className={"name"}>登录/注册</div>
                    </div>
                </div>
                <div className={"order"}>
                    <div className={"order-top"}>
                        <span className={"my-order"}>我的订单</span>
                        <span className={"whole-order"}>全部订单 <span className={"prev iconfont icon-youjiantou"}></span>    </span>
                    </div>
                    <ul className={"service"}>
                        <li>
                            <i className={"iconfont icon-weibiaoti2fuzhi04"}></i>
                            <span>待付款</span>
                        </li>
                        <li>
                            <i className={"iconfont icon-daifahuo"}></i>
                            <span>待发货</span>
                        </li>
                        <li>
                            <i className={"iconfont icon-icon--"}></i>
                            <span>退换修</span>
                        </li>
                    </ul>
                </div>
                <div className={"other"}>
                    <ul>
                        <li>
                            <div className={"item"}>
                                <img src={require("../../static/img/member.png")} alt=""/>
                                <span className={"text borer-bottom"}>
                                    会员中心
                                    <span className={"prev iconfont icon-youjiantou"}></span>
                                </span>
                            </div>
                            <div className={"item"}>
                                <img src={require("../../static/img/dis.png")} alt=""/>
                                <span className={"text"}>
                                    我的优惠
                                    <span className={"prev iconfont icon-youjiantou"}></span>
                                </span>
                            </div>
                        </li>

                        <li>
                            <div className={"item"}>
                                <img src={require("../../static/img/service.png")} alt=""/>
                                <span className={"text borer-bottom"}>
                                    服务中心
                                    <span className={"prev iconfont icon-youjiantou"}></span>
                                </span>
                            </div>
                            <div className={"item"}>
                                <img src={require("../../static/img/home.png")} alt=""/>
                                <span className={"text"}>
                                    拼多多之家
                                    <span className={"prev iconfont icon-youjiantou"}></span>
                                </span>
                            </div>
                        </li>

                        <li>
                            <div className={"item"}>
                                <img src={require("../../static/img/fcode.png")} alt=""/>
                                <span className={"text"}>
                                    f码通道
                                    <span className={"prev iconfont icon-youjiantou"}></span>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className={"item"}>
                                <img src={require("../../static/img/set.png")} alt=""/>
                                <span className={"text"}>
                                    设置
                                    <span className={"prev iconfont icon-youjiantou"}></span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default My;