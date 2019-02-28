import React, {Component} from 'react';
import "./index.scss";

class PageTitle extends Component {

    handleClick = ()=>{

        window.history.go(-1);
    }

    render() {
        const title = this.props.title;
        return (
            <div className={"title"}>
                <i className={"iconfont icon-zuojiantou"} onClick={this.handleClick}></i>
                {title && title}
            </div>
        );
    }
}

export default PageTitle;