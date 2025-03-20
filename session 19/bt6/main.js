const a = parseFloat(prompt("Nhập a:"));
const b = parseFloat(prompt("Nhập b:"));
const c = parseFloat(prompt("Nhập c:"));

if (isNaN(a) || isNaN(b) || isNaN(c)) alert("Vui lòng nhập số hợp lệ.");
else if (a === 0) alert(b === 0 ? (c === 0 ? "Vô số nghiệm" : "Vô nghiệm") : `Nghiệm: x = ${(-c / b).toFixed(2)}`);
else {
    const delta = b * b - 4 * a * c;
    alert(delta < 0 ? "Vô nghiệm" : delta === 0 ? `Nghiệm kép: x = ${(-b / (2 * a)).toFixed(2)}` :
        `Nghiệm x1 = ${((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2)}, x2 = ${((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2)}`);
}
