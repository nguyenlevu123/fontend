function numberint() {
    let arr = []; 
    for (let i = 0; i < 10; i++) {
        let input = prompt(`Nhập số nguyên thứ ${i + 1}:`);
        if (!input) {
            alert("Mảng không có dữ liệu");
            return;
        }
        let num = Number(input.trim());
        if (!Number.isInteger(num)) {
            alert("Dữ liệu không hợp lệ");
            return;
        }
        arr.push(num); 
    }
    let max = Math.max(...arr);
    let index = arr.indexOf(max);
    alert(`max: ${max}`);
    alert(`index: ${index}`);
}
numberint();
