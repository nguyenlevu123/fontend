let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function hasEvenNumbers() {
    // Kiểm tra nếu arr không phải là một mảng
    if (!Array.isArray(arr)) {
        alert("error");
        return false;
    }

    let hasEven = false;
    console.log("Các số chẵn trong mảng:");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
            hasEven = true;
        }
    }

    return hasEven;
}

// Gọi hàm không cần tham số
console.log(hasEvenNumbers()); // true
