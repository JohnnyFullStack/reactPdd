import React, {Component} from 'react';
import PageTitle from "../comment/pagetitle/index"
import dataUrl from "../../uitls/dataUrl";
import "./index.scss"

import {connect} from "react-redux";
import {cartAdd} from "../../actions/cart";

@connect(
    state => ({goods : state}),
    {
        cartAdd
    }
)

class Goods extends Component {
    constructor(){
        super();
        this.state = {
            id : "",
            img : "",
            price : "",
            disPrice : "",
            title : "",
            text : "",
            num : 0
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        fetch(dataUrl("goods",id))
            .then(res => res.json())
            .then(res => {
                this.setState({
                    id : res.goods_id,
                    img : res.list_img,
                    price : res.price,
                    title : res.title,
                    text : res.text
                });
            })
    }

    handleAddShop = ()=>{
        let num = this.state.num;

        if(num >= 20) return;
        num++;

        this.setState({num});
    }

    handleDelShop = ()=>{
        let num = this.state.num;

        if(num <=0) return;
        num--;

        this.setState({num});
    }

    handleAddShopToCArt = ()=>{
        let {num,id} = this.state;
        let {cartAdd} = this.props;

        cartAdd({id,num})
    }

    handleShopBuy = ()=>{
        const {num,id} = this.state;
        const {cartAdd} = this.props;

        this.props.history.push("/cart");

        if(num !== 0){
            cartAdd({id,num})
        }
    }

    render() {
        const {img,price,text,title,num} = this.state;
        return (
            <div className={"goods bg"}>
                <PageTitle title={title}/>
                <div className={"container"}>
                    <div className={"info"}>
                        <img src={img && img} alt={title}/>
                        <p>
                            {text && text}
                        </p>
                        <div className={"money"}>
                            <span className="price">￥{price && price}</span>
                            <span className="express">快递 : 包邮</span>
                        </div>
                    </div>
                    <div className="add-to">
                        <p>购买数量</p>
                        <div className="number">
                            <span onClick={this.handleDelShop}>-</span>
                            <span>{num}</span>
                            <span onClick={this.handleAddShop}>+</span>
                        </div>
                    </div>
                    <div className="shopping">
                        <span className={"cart-buy"} onClick={this.handleAddShopToCArt}>加入购物车</span>
                        <span className={"shop-buy"} onClick={this.handleShopBuy}>立即购买</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Goods;