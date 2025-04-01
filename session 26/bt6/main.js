function formatDates() {
    let input = prompt("Nhập danh sách ngày (YYYY-MM-DD):");
    if (!input) {
        alert("Mảng không có phần tử nào");
        return;
    }
    let arr = input.split(",").map(date => date.trim());
    if (!arr.every(date => /^\d{4}-\d{2}-\d{2}$/.test(date))) {
        alert("Dữ liệu không hợp lệ");
        return;
    }
    let formattedDates = arr.map(date => {
        let [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    });
    alert("Chuỗi ngày sau khi chuyển đổi: " + formattedDates.join(", "));
}
formatDates();
