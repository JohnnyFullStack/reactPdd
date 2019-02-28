import React, {Component} from 'react';
import "./index.scss"

class CateList extends Component {
    render() {
        const {cateList} = this.props;
        return (
            <div className={"cate-list"}>
                <ul>
                    {
                        cateList.length && (
                            cateList.map((item,index) => {
                                return (
                                    <li key={index}>
                                        <img src={item.list_img} alt={item.title}/>
                                        <p className={"describe"}>
                                            {item.text}
                                        </p>
                                        <div className={"price"}>
                                            <span>￥{item.price}</span>
                                            <span className={"dis-price"}>￥{item.dis_price}</span>
                                        </div>
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

export default CateList;