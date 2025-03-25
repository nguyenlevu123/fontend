const input = prompt("Nhập vào một số nguyên: ");
const number = parseInt(input);

if (!isNaN(number)) {
    let isPrime = number > 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        console.log(`${number} là số nguyên tố.`);
    } else {
        console.log(`${number} không phải là số nguyên tố.`);
    }
} else {
    console.log("Vui lòng nhập một số nguyên hợp lệ.");
}
