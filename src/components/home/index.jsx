import React, {Component} from 'react';
import Head from "../comment/head"
import Banner from "../banner";
import Category from "../category";
import LazyLoad from "react-lazyload";

class Home extends Component {
    render() {
        return (
            <div className={"home content"}>
                <Head/>
                <LazyLoad height={200}>
                    <Banner/>
                </LazyLoad>
                <LazyLoad height={200}>
                    <Category/>
                </LazyLoad>
            </div>
        );
    }
}

export default Home;