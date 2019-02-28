import React, {Component} from 'react';
import DetailInfo from "./detailinfo/index"
import DetailList from "./detaillist/index"
import PageTitle from "../comment/pagetitle/index"
import dataUrl from "../../uitls/dataUrl";
import "./index.scss";
import LazyLoad from "react-lazyload";

class Details extends Component {

    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){
        const name = this.props.match.params.name;
        fetch(dataUrl("detail",name))
            .then(res => res.json())
            .then(res => {
                this.setState({...res})
            })
    }
    render() {
        const {cate_img,cate_text,cate_title,list} = this.state;
        return (
            <div className={"details"}>
                <PageTitle title={cate_title}/>
                <LazyLoad height={200}>
                    <DetailInfo
                        img={cate_img}
                        title={cate_title}
                        text={cate_text}
                    />
                </LazyLoad>
                <LazyLoad height={200}>
                    <DetailList
                        list={list}
                    />
                </LazyLoad>
            </div>
        );
    }
}

export default Details;