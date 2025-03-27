

let n =parseInt(prompt("nhap so phan tu mang"));
if(n<=0){
    console.log("error");
}else{
    let arr=[];
    let count =0;
    for(let i =0; i<n;i++){
    let num =parseInt(prompt("nhap so thu"+(i+1)));
    arr.push(num);
    if(num<0 ) count++;
}
alert("mang"+ arr );
alert("tong so nguyen am :"+count);
}