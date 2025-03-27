let arr =[];
let n =prompt("nhap so phan tu mang");
let urr=[];

for(let i =0 ; i< n ;i++){
    let num = parseInt(prompt("nhap so thu"+(i+1)));
    arr.push(num);
    if(!isNaN(arr[i])){
        urr.push(arr[i]);
    }
}
alert("mang"+urr);
