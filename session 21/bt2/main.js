let numbers = [];
let countEven = 0;
let countOdd = 0;

for (let i = 0; i < 5; i++) {
    let input = prompt(`Nhập số nguyên thứ ${i + 1}: `);
    let number = parseInt(input, 10);
    
    if (!isNaN(number)) {
        numbers.push(number);
        if (number % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    } else {
        alert("Vui lòng nhập một số nguyên hợp lệ.");
        i--; // Yêu cầu nhập lại nếu nhập sai
    }
}

alert(`Số lượng số chẵn: ${countEven}\nSố lượng số lẻ: ${countOdd}`);
