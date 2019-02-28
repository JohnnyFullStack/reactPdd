import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Swiper from "swiper";
import dataUrl from "../../uitls/dataUrl"
import "./index.scss";


class Banner extends Component {

    constructor(){
        super();
        this.state = {
            banner : []
        }
    }

    swiperFn = ()=>{
        new Swiper("swiper-container",{
            autoplay : true,
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }

    componentDidMount(){

        fetch(dataUrl("banner"))
            .then(res => res.json())
            .then(res => {
                this.setState({
                    banner : res
                });
            });
        this.swiperFn();
    }

    render() {
        const {banner} = this.state;
        return (
            <div className={"banner swiper-container"}>
                <ul className="swiper-wrapper">
                    {
                        banner.length && banner.map((item,index) =>{
                            return (
                                <li
                                    key={index}
                                    className="swiper-slide"
                                >
                                    <Link to={`/details/${item.title}`}>
                                        <img src={item.img} alt={item.title}/>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="swiper-pagination"></div>
            </div>
        );
    }
}

export default Banner;