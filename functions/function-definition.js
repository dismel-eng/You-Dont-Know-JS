//Defining Javascript function

//Print the name and value of each property of object. This function returns undefined
function printprops(object){
    var str = '';

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            str += key + ' : ' + object[key] + '\n';
        }
    }
    return str;
}

//Compute the distance between Cartesian points (x1,y1) and (x2,y2)
function distance(x1,y1,x2,y2){
    var dx = x1 - x2;
    var dy = y1 - y2;
    return Math.sqrt(dx*dx + dy*dy);
}

//A recursive function(one that call itself) that computes factorials
//Recall that x! is the product of x and all positive integers less than it
function factorial(x){
    if(x <= 1) return 1;
    return x * factorial(x - 1); 
}
