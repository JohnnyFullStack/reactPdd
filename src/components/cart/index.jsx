import React, {Component} from 'react';
import PageTitle from "../comment/pagetitle/index"
import shopTools from "../../uitls/shopTools";
import dataUrl from "../../uitls/dataUrl"
import "./index.scss"

import LozyLoad from "react-lazyload";
import {connect} from "react-redux";
import {cartAdd,cartDel,getShopSum} from "../../actions/cart";

@connect(
    state => ({goods : state}),
    {cartAdd,cartDel,getShopSum}
)

class Cart extends Component {
    constructor(){
        super();

        this.state = {
            goods : [],
            price : "",
            count : ""
        }
    }
    componentDidMount(){
        const shop = shopTools.getShop();
        const goods = this.state.goods;

        Object.keys(shop).forEach((item,index) => {

            fetch(dataUrl("goods",item))
                .then(res => res.json())
                .then(data => {
                    Object.assign(data,{num:shop[item]});
                    goods.push(data);
                    this.setState({goods});
                })
        });
        this.getResult();
    }

    handleAddShop = (i)=> {

        const goods = this.state.goods;
        const {cartAdd} = this.props;
        const id = goods[i].goods_id;

        if(goods[i].num >= 20) return;
        goods[i].num ++;
        this.setState({goods});
        cartAdd({
            id,
            num : 1
        });
        this.getResult();
    }

    handleRediceShop = (i)=>{

        const goods = this.state.goods;
        const {cartAdd} = this.props;
        const id = goods[i].goods_id;

        if(goods[i].num <= 0) return;
        goods[i].num --;
        this.setState({goods});
        cartAdd({
            id ,
            num : -1
        });
        this.getResult();
    }

    handleDelShop = (i)=>{
        const {goods} = this.state;
        const {cartDel} = this.props;
        const id = goods[i].goods_id;


        cartDel(id);
        goods.splice(i,1);
        this.setState({goods});
    };

    getResult = ()=>{

        let timer = setTimeout(() => {
            clearTimeout(timer);
            this.totalPrice();
        },200)
    }

    totalPrice = ()=>{
        const goods = this.state.goods;
        const {getShopSum} = this.props;
        let price = 0;
        let count = 0;

        for(let key in goods){

            price += goods[key].num * goods[key].price;
            count += goods[key].num;
        }

        this.setState({price,count});
        getShopSum({data:count});
    }
    render() {
        const {goods,price,count} = this.state;
        return (
            <div className={"cart bg"}>
                <PageTitle title={"购物车"}/>
                <div className="cart-list">
                    <ul>
                        {
                            goods.length>0 && (
                                goods.map((item,index) => {
                                    return (
                                        <li key={index}>
                                            <div className="item-top">
                                                <LozyLoad height={200}>
                                                    <img src={item.list_img} alt={item.title}/>
                                                </LozyLoad>
                                                <p>
                                                    {item.text}
                                                </p>
                                            </div>
                                            <div className="item-bot">
                                                <span className="price">￥{item.price}</span>
                                                <div className="add-red">
                                                    <span onClick={()=>(this.handleRediceShop(index))}>-</span>
                                                    <span>{item.num}</span>
                                                    <span onClick={()=>(this.handleAddShop(index))}>+</span>
                                                </div>
                                                <span className="del" onClick={()=>{this.handleDelShop(index)}}>删除</span>
                                            </div>
                                        </li>
                                    )
                                })
                            )
                        }
                    </ul>
                </div>
                <div className="settle">
                    <div className="set-left">
                        <p className="price">总计: <span>￥{price}元</span></p>
                        <span className="dis-money">优惠：￥0元</span>
                    </div>
                    <div className="set-right">
                        去结算
                        <span>({count}件)</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;