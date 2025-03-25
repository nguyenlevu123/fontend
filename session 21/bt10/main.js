const n = parseInt(prompt("Nhập vào số nguyên n: "), 10);
if (!isNaN(n) && n > 0) {
    let primes = [];
    for (let num = 2; primes.length < n; num++) {
        if (!primes.some(p => num % p === 0 && p * p <= num)) {
            primes.push(num);
        }
    }
    console.log(`Danh sách ${n} số nguyên tố đầu tiên:`, primes);
} else {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
}
