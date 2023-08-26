function checkStatus(res){
    if(res.status >= 200 && res.status < 300){
        return res;
    }else{
        console.log("___________");
    }

}
function parsoJson(res){
    return res.json();
}

export function apiRequest(url,options){
    return fetch(url,options).then(checkStatus).then(parsoJson)
}