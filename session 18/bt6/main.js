// Nhập một năm từ người dùng
const year = parseInt(prompt("Nhập một năm: "), 10);

if (!isNaN(year)) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} là năm nhuận.`);
    } else {
        console.log(`${year} không phải là năm nhuận.`);
    }
} else {
    console.log("Vui lòng nhập một số hợp lệ.");
}
