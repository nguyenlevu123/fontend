// Viết chương trình yêu cầu người dùng nhập vào 3 số a, b, c, giải phương trình bậc 2 : ax^2 + bx + c = 0 và in kết quả ra màn hình.


let a = parseFloat(prompt("Nhập số a"));
let b = parseFloat(prompt("Nhập số b"));
let c = parseFloat(prompt("Nhập số c"));
let delta = b * b - 4 * a * c;
if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            alert("Phương trình có vô số nghiệm");
        } else {
            alert("Phương trình vô nghiệm");
        }
    } else {
        let x = -c / b;
        alert("Phương trình có nghiệm duy nhất x = " + x);
    }
}

else {
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("Phương trình có 2 nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert("Phương trình có nghiệm kép: x = " + x);
    } else {
        alert("Phương trình vô nghiệm");
    }
}