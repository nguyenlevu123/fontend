let a = Number(prompt('Nhập số a:'));
let b = Number(prompt('Nhập số b:'));
let c = Number(prompt('Nhập số c:'));

let s;

s = (a > b && a > c) ? a + 'là số lớn nhất' : (b > a && b > c) ? b + 'là số lớn nhất' : (c > a && c > b) ? c + 'là số lớn nhất' : "bruhbruh";
document.writeln(a + ' là số lớn nhất')
document.writeln(b + ' là số lớn nhất')
document.writeln(c + ' là số lsớn nhất')  