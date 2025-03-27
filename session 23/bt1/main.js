const SIZE = 10;
let arr = [];

// Nhập mảng
console.log(`Nhập ${SIZE} số nguyên:`);
for (let i = 0; i < SIZE; i++) {
    let num = parseInt(prompt(`Nhập số thứ ${i + 1}:`));
    arr.push(num);
}

// Kiểm tra và hiển thị các số lớn hơn hoặc bằng 10
let result = [];
for (let num of arr) {
    if (num >= 10) {
        result.push(num);
    }
}

if (result.length > 0) {
    console.log("Các số lớn hơn hoặc bằng 10:", result.join(" "));
} else {
    console.log("Không có số nào lớn hơn hoặc bằng 10");
}


