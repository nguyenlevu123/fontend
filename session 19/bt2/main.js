
const input = prompt("nhap ky tu: ");

if(input.length===1 && ((input >= 'a' && input<= 'z')||(input >='A' && input <='Z'))){
    alert(`ky tu ${input} la chu cai`);
}else{
    alert("ko phai chu cai");
}