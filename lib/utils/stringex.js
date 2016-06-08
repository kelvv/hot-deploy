`use strict`

String.prototype.GetNameWithoutSuff  = function()  
{  
    let str =this.toString();
    var nameRegex = /([^/\\]+)\.[a-zA-Z]+$/;  
    let match =str.match(nameRegex);
    if(!match||match.length===0){
        return '';
    }
    return match[1];
}  

String.prototype.GetName  = function()  
{  
    let str =this.toString();
    var nameRegex = /[^/\\]+\.[a-zA-Z]+$/; 
    let match =str.match(nameRegex);
    if(!match||match.length===0){
        return '';
    }
    return match[0];
}  