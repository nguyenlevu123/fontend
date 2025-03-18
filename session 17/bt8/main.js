// Nhập hai ngày từ người dùng
let date1 = prompt("Nhập ngày đầu tiên (YYYY-MM-DD):");
let date2 = prompt("Nhập ngày thứ hai (YYYY-MM-DD):");

// Chuyển đổi chuỗi ngày thành đối tượng Date
let d1 = new Date(date1);
let d2 = new Date(date2);

// Tính số ngày chênh lệch
let time = Math.abs(d2 - d1); // Lấy giá trị tuyệt đối của sự khác biệt thời gian
let day = time / (1000 * 3600 * 24); // Chuyển đổi từ milliseconds sang ngày

console.log("Độ lệch là" + day + "ngày.");
