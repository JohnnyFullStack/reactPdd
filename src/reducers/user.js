
export default function location(state={},action){

    const user = action.data;

    switch (action.type) {
        case "LOCATION":

            let location = Object.assign({},state,user);
            return location;
        default:
            return {location:"请前往地图页面获取用户的地理位置"};
    }
}