const principal = parseFloat(prompt("Nhập số tiền ban đầu: "));
const months = parseInt(prompt("Nhập số tháng gửi: "));

if (principal > 0 && months > 0) {
    let finalAmount = principal * (1.01 ** months);
    console.log("Tiền lãi: " + (finalAmount - principal).toFixed(3));
    console.log("Tiền nhận được: " + finalAmount.toFixed(3));
} else {
    console.log("Vui lòng nhập số hợp lệ.");
}
