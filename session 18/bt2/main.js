let toan = parseFloat(prompt("nhap diem taon: "));
let van = parseFloat(prompt("nhap diem van: "));
let anh = parseFloat(prompt("nhap diem anh: "));

let diemTB = (toan + van + anh) / 3;

let rank;
if(diemTB >= 8){
    rank = "gioi";
}else if(diemTB>= 6.5 && diemTB<=7.9){
    rank ="kha";

}else if(diemTB>= 5.0 && diemTB<=6.4){
rank="trung binh";

}else{
    rank ="ngu";
}

console.log("hoc luc cua ban la" + rank );