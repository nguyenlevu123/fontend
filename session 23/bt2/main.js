let arr = [];
const SIZE = 10;

// Nhập mảng từ người dùng, đảm bảo các số là duy nhất
console.log(`Nhập ${SIZE} số nguyên khác nhau:`);
while (arr.length < SIZE) {
    let num = parseInt(prompt(`Nhập số thứ ${arr.length + 1}:`));
    if (!isNaN(num) && !arr.includes(num)) {
        arr.push(num);
    } else {
        console.log("Số không hợp lệ hoặc đã tồn tại, vui lòng nhập số khác.");
    }
}

if (arr.length > 0) {
    // Tìm giá trị lớn nhất và vị trí của nó
    let maxVal = Math.max(...arr);
    let maxIndex = arr.indexOf(maxVal);
    
    // Hiển thị kết quả
    console.log(`Số lớn nhất: ${maxVal}`);
    console.log(`Vị trí: ${maxIndex}`);
} else {
    console.log("Không có số lớn nhất");
}
