let number = parseFloat(prompt("nhap so: "));
if(!isNaN(number)){
    if(number % 2 ==0){
        console.log(number +"la so chan");
    }else{
        console.log(number + "la so le");
    }
}else{
    console.log(erorr);
}