function chanle() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        let input = prompt(`Nhập số nguyên thứ ${i + 1}:`);
        if (!input || isNaN(input) || !Number.isInteger(Number(input))) {
            alert("Dữ liệu không hợp lệ");
            return;
        }
        arr.push(Number(input));
    }
    let chan = arr.filter(num => num % 2 === 0).join(" ") || "Không có số chẵn";
    let le = arr.filter(num => num % 2 !== 0).join(" ") || "Không có số lẻ";
    alert(`Số chẵn: ${chan}`);
    alert(`Số lẻ: ${le}`);
}
chanle();
