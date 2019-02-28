import React, {Component} from 'react';
import "./index.scss"


import {connect} from "react-redux";
import {getUserLocation} from "../../actions/user";
@connect(
    state => ({user:state}),
    {getUserLocation}
)

class Atlas extends Component {
    componentDidMount(){
        const that = this;
        const {BMap,BMAP_STATUS_SUCCESS} = window;
        let map = new BMap.Map("container");
        let geoc = new BMap.Geocoder();
        let point = new BMap.Point(113.04077335,23.69846855);
        map.centerAndZoom(point,12);

        let geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() === BMAP_STATUS_SUCCESS){
                let mk = new BMap.Marker(r.point);
                let pt = r.point;
                map.addOverlay(mk);
                map.panTo(pt);
                // console.log('您的位置：'+r.point.lng+','+r.point.lat);
                geoc.getLocation(pt, function(rs){
                    let addComp = rs.addressComponents;
                    // console.log(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
                    const location = addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;
                    that.props.getUserLocation({location})
                });
            }
            else {
                console.log('failed'+this.getStatus());
            }
        },{enableHighAccuracy: true});
    }
    render() {

        return (
            <div className={"atlas"} id={"container"}>

            </div>
        );
    }
}

export default Atlas;