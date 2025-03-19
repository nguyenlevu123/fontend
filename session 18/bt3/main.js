let username = prompt("Enter your username:");

if (username === "ADMIN") {
    let password = prompt("Enter your password:");
    if (password === "TheMaster") {
        alert("Welcome");
    } else if (password === "" || password === null) {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else if (username === "" || username === null) {
    alert("Cancelled");
} else {
    alert("I Don’t know you");
}
