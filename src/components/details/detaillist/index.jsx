import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./index.scss"

class DetailList extends Component {
    constructor(){
        super();
        this.state = {
            list : []
        }
    }
    componentWillReceiveProps(nextProps){

        this.setState({list:nextProps.list});
    }
    render() {
        const {list} = this.state;
        return (
            <div className={"list"}>
                <ul className={"fl"}>
                    {
                        list && (
                            list.map((item,index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/goods/${item.goods_id}`}>
                                            <img src={item.list_img} alt={item.title}/>
                                            <p>
                                                {item.text}
                                            </p>
                                            <div className="price">
                                                <span>￥{item.price}</span>
                                                <span className="dis-price">￥{item.dis_price}</span>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default DetailList;