
let number = prompt("Nhập một dãy số:");
if (isNaN(number)) {
    alert("Error: Dãy số không hợp lệ");
} else { 
    let numberArray = number.split("").map(Number);
    let maxNumber = Math.max(...numberArray);
    console.log(`${maxNumber} là số lớn nhất trong dãy số`);
    alert(`${maxNumber} là số lớn nhất trong dãy số`);
}