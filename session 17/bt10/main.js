function isPerfectSquare(n) {
    let sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt);
}

function checkPerfectSquare(n) {
    return isPerfectSquare(n) 
        ? n + " là số chính phương"
        : n + " không phải số chính phương";
}

// Nhập số từ người dùng
let number = parseInt(prompt("Nhập một số: "));
console.log(checkPerfectSquare(number));
