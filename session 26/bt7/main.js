function arrays(){
    let arr =[];
    for(let i =0 ; i< 10 ; i++){
        let input= prompt(`Nhập số nguyên thứ ${i + 1}:`);
        if(!input || isNaN(input)|| !Number.isInteger(Number(input))){
            alert("error");
            return;
        }
        arr.push(Number(input));
    }
    let skt =arr.map(num => num **2).filter(num => num % 2 === 0);
    alert("cac so chan: " + (skt.length ? skt.join(","): "khong có so chăn"));
}
arrays();