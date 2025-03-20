const rate = 23000; // Tỷ giá 1 USD = 23,000 VND
const amount = parseFloat(prompt("Nhập số tiền:"));
const type = prompt("Nhập loại tiền tệ (VND hoặc USD):").toUpperCase();

if (!isNaN(amount) && amount >= 0) {
    if (type === "VND") {
        alert(`${amount} VND = ${(amount / rate).toFixed(2)} USD`);
    } else if (type === "USD") {
        alert(`${amount} USD = ${(amount * rate).toLocaleString()} VND`);
    } else {
        alert("Loại tiền tệ không hợp lệ.");
    }
} else {
    alert("Vui lòng nhập số tiền hợp lệ.");
}
