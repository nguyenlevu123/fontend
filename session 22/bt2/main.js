
let numbers = [2, 5, 7, 4, 1, 8, 6];
let userInput = Number(prompt("Nhập một số:"));
if (numbers.includes(userInput)) {
   alert("Bingo");
} else {
    alert("Chúc bạn may mắn lần sau");
}
