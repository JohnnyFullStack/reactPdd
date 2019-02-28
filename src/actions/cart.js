export function cartAdd(data){

    return ({
        type : "CART_ADD",
        data
    })
}

export function cartDel(data){

    return ({
        type : "CART_DEL",
        data
    })
}

export function getShopSum(data){

    return ({
        type : "GET_SHOP_SUM",
        data
    })
}