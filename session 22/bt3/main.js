let userInput = prompt("Nhập dãy số:");
if (isNaN(userInput)) {
    alert("error");
} else {
    let numberArray = userInput.split("").reverse().join(""); 
    alert(numberArray);
}
// split(""): Chuyển chuỗi thành mảng ký tự.

// reverse(): Đảo ngược thứ tự các phần tử trong mảng.

// join(""): Ghép các phần tử trong mảng thành chuỗi.