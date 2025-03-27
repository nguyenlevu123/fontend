let arr = [];
let n = parseInt(prompt("Nhập số phần tử mảng: "));
let total = 0;  // Biến để lưu tổng các ký tự là số

for (let i = 0; i < n; i++) {
    let input = prompt("Nhập ký tự thứ " + (i + 1));
    arr.push(input);
    
    // Chuyển đổi phần tử sang số và kiểm tra nếu nó là số hợp lệ
    let num = Number(input);
    if (!isNaN(num)) {
        total += num;  // Cộng vào tổng nếu là số hợp lệ
    }
}

alert("Mảng các ký tự: " + arr);
alert("Tổng các ký tự là số: " + total);
