import React, {Component} from 'react';
import "./index.scss"

class DetailInfo extends Component {
    render() {
        const {img,title,text} = this.props;
        return (
            <div className={"info"}>
                <img src={img && img} alt={title}/>
                <div className={"info-con"}>
                    <h4>{title && title}</h4>
                    <div className={"info-text"}>
                        {text && text}
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailInfo;