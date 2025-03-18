let number = prompt("Nhập một số:");
number = parseFloat(number);  // Chuyển đổi chuỗi nhập vào thành số thực


    // Sử dụng toLocaleString để định dạng số theo kiểu tiền tệ VNĐ
    let money = number.toLocaleString();  
    console.log(money + "VNĐ");

