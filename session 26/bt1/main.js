// const SIZE = 10;

// // Hàm kiểm tra xem đầu vào có phải số nguyên hợp lệ không
// function isValidInteger(str) {
//     return !isNaN(str) && Number.isInteger(Number(str));
// }

// function main() {
//     let arr = [];
//     console.log(`Nhập vào ${SIZE} số nguyên:`);
    
//     for (let i = 0; i < SIZE; i++) {
//         let input = prompt(`Nhập số thứ ${i + 1}:`);
        
//         if (!isValidInteger(input)) {
//             console.log("Dữ liệu không hợp lệ");
//             return;
//         }
//         arr.push(parseInt(input, 10));
//     }

//     let result = arr.filter(num => num >= 10);
//     console.log("Các số lớn hơn hoặc bằng 10:", result.length ? `[${result.join(", ")}]` : "Mảng không có phần tử nào");
// }

// main();

const size =10;
function isValidInteger(str){
    return !isNaN(str) && Number.isInteger(Number(str));
}

function main(){
    let arr=[];
    console.log(`Nhập vào ${size} số nguyên:`);

for(let i =0; i<size; i++){
    let input = prompt(`Nhap vao so thu ${i + 1}:`);

    if(!isValidInteger(input)){
        console.log("error");
        alert("error");
        return;
    }
    arr.push(parseInt(input,10));
}
let result = arr.filter(num => num >= 10);
alert("Các số lớn hơn hoặc bằng 10:", result.length ? `[${result.join(", ")}]` : "Mảng không có phần tử nào");

}
main();