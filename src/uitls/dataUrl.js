const url = "http://112.74.167.31:6002/api/";
export default function(name,key){

    if(key === undefined && name){
        return url + name;
    }else if(name && key){
        return url + name + "/" + key;
    }
}