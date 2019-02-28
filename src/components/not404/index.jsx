import React, {Component} from 'react';
import Head from "../comment/head/index"
import "./index.scss"

class Not404 extends Component {
    render() {
        return (
            <div className={"not"}>
                <Head/>
                <p>
                    抱歉，你访问的当前页面不存在
                </p>
            </div>
        );
    }
}

export default Not404;