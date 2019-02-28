import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./index.scss"

import {connect} from "react-redux";
@connect(
    state => ({user:state}),
    {}
)

class Head extends Component {
    constructor(){
        super();
        this.state = {
            location : ""
        }
    }
    componentDidMount(){

        this.setState({
            location : this.props.user.user.location
        })
    }
    render() {
        return (
            <div className={"head"}>
                <div className={"recommend"}>
                    <img src={require("../../../static/img/logo.png")} alt=""/>
                    <span>0.1元包邮抢16包清风面巾纸</span>
                    <Link className={"goods-buy"} to={"/details/家居百货"}>前往购买</Link>
                </div>
                <div className={"location"}>
                    配送地址: {this.state.location}
                </div>
            </div>
        );
    }
}

export default Head;