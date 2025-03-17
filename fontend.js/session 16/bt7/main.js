var math = parseFloat(prompt("Nhập điểm môn Toán:"));
var physics = parseFloat(prompt("Nhập điểm môn Vật lý:"));
var chemistry = parseFloat(prompt("Nhập điểm môn Hóa học:"));
var average = (math + physics + chemistry) / 3;

alert("Điểm trung bình của bạn là: " + average.toFixed(2));