import React, {Component} from 'react';
import {Link} from "react-router-dom";
import CateList from "./catelist/index";
import dataUrl from "../../uitls/dataUrl";
import "./index.scss"

class Category extends Component {

    constructor(){
        super();
        this.state = {
            category : []
        }
    }

    componentDidMount() {
        fetch(dataUrl("category"))
            .then(res => res.json())
            .then(res => {

                this.setState({
                    category : res.data
                })
            })
    }

    render() {
        const {category} = this.state;
        return (
            <div className={"category"}>
                <ul>
                    {
                        category.length>0 && (
                            category.map((item,index) => {
                                return (
                                    <li key={index}>
                                        <Link className={"cate-con"} to={`/details/${item.title}`}>
                                            <div className={"cate-pic"}>
                                                <img src={item.cate_img} alt={item.title}/>
                                            </div>
                                            <CateList cateList={item.cate_list}/>
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

export default Category;