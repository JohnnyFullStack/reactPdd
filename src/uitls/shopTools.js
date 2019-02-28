const shopTools = {};

let shop = JSON.parse(window.localStorage.getItem("shopInfo") || "{}");

shopTools.addUpdata = function(goods){

    if(shop[goods.id]){
        shop[goods.id] += goods.num;
    }else{
        shop[goods.id] = goods.num
    }
    this.saveShop(shop);
};

shopTools.saveShop = function(goods){

    window.localStorage.setItem("shopInfo",JSON.stringify(goods));
};

shopTools.getShop = function(){

    return JSON.parse(window.localStorage.getItem("shopInfo") || "{}");
};

shopTools.del = function(id){

    delete shop[id];
    this.saveShop(shop);
};

shopTools.getShopSum = function(){
    let sum = 0;
    for(let key in shop){

        sum += shop[key];
    }

    return sum;
};


export default shopTools;