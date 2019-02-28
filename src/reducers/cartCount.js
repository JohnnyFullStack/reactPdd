import shopTools from "../uitls/shopTools"
export default function cartCount(state={},action){

    const goods = action.data;
    switch (action.type) {
        case "CART_ADD":

            shopTools.addUpdata(goods);
            return shopTools.getShop();
        case "CART_DEL":

            shopTools.del(goods);
            return shopTools.getShop();
        case "GET_SHOP_SUM":

            let newState = Object.assign({},state,goods);
            return newState;
        default :

            return shopTools.getShop();
    }
}