
function  vv(arr){
    if(!Array.isArray(arr)){
        return "error";

    }
    return arr.filter(str => typeof str === "string" && str.length > 5);
}
alert(vv(["apple", "banana", "cat", "elephant", "dog"])); 
alert(vv([]));
console.log(vv("abc"));