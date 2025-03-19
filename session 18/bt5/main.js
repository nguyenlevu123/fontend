// Nhập số năm kinh nghiệm từ người dùng
let years = parseFloat(prompt("Nhập số năm kinh nghiệm:"));

// Kiểm tra và xếp loại nhân viên
if (years < 1) {
    console.log("Mới vào nghề");
} else if (years >= 1 && years <= 3) {
    console.log("Nhân viên có kinh nghiệm");
} else if (years >= 4 && years <= 6) {
    console.log("Chuyên viên");
} else if (years > 6) {
    console.log("Quản lý");
} else {
    console.log("Vui lòng nhập số năm hợp lệ!");
}
