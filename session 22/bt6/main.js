let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

let inputNumber = parseInt(prompt("Nhập một số nguyên:"));
let count = 0;
for (let num of numbers) {
    if (num === inputNumber) {
        count++;
    }
}
if (count > 0) {
    alert(`Số ${inputNumber} xuất hiện ${count} lần trong mảng`);
} else {
    alert(`Số ${inputNumber} không tồn tại trong mảng`);
}
