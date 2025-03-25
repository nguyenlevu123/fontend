let numbers = [];
let sumOdd = 0;

for (let i = 0; i < 5; i++) {
    let input = prompt(`Nhập số nguyên thứ ${i + 1}: `);
    let number = parseInt(input, 10);
    
    if (!isNaN(number)) {
        numbers.push(number);
        if (number % 2 !== 0) {
            sumOdd += number;
        }
    } else {
        alert("Vui lòng nhập một số nguyên hợp lệ.");
        i--; // Yêu cầu nhập lại nếu nhập sai
    }
}

alert(`Tổng các số lẻ trong dãy đã nhập là: ${sumOdd}`);
