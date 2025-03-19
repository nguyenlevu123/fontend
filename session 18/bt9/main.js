// Nhập giờ, phút, giây từ người dùng
const h = parseInt(prompt("Nhập giờ (0-23): "));
const m = parseInt(prompt("Nhập phút (0-59): "));
const s = parseInt(prompt("Nhập giây (0-59): "));

if (h >= 0 && h < 24 && m >= 0 && m < 60 && s >= 0 && s < 60) {
    const period = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;
    console.log(`${hour12}:${m}:${s} ${period}`);
} else {
    console.log("Dữ liệu không hợp lệ.");
}
