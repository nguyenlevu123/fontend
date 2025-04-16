document.getElementById("transmit").addEventListener("click", function() {
    const gmail = document.getElementById("gmail").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    if (!gmail || !password || !confirm) {
        alert("Fill in the information completely.");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match.");
        return;
    }

    // Lấy dữ liệu từ localStorage (sử dụng key "users")
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra email đã tồn tại chưa
    const existed = users.some(user => user.gmail === gmail);

    if (existed) {
        alert("This email already exists.");
        return;
    }

    // Tạo user mới
    let newuser = {
        gmail: gmail,
        password: password,
    };

    // Thêm user và lưu lại
    users.push(newuser);
    localStorage.setItem("users", JSON.stringify(users));

    // Xóa input
    document.getElementById("gmail").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm").value = "";

    alert("Registration successful!");
});
