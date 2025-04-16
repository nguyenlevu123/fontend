
function handleLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const matchedUser = users.find(user => user.gmail === email && user.password === password);

  if (matchedUser) {
    alert("Login successful!");
    // chuyển sang trang chính
    window.location.href = "index.html"; // bạn có thể thay bằng task.html nếu cần
  } else {
    alert("Invalid email or password.");
  }
}

