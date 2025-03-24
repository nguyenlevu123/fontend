let N = parseInt(prompt("Nhập một số nguyên dương N:"));

// Kiểm tra nếu N là số hợp lệ
if (isNaN(N) || N <= 0) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
    let sum = 0;
    
    // Sử dụng vòng lặp for để tính tổng từ 1 đến N
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    
    console.log(`Tổng các số từ 1 đến ${N} là: ${sum}`);
}