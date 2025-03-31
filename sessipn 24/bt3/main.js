let arr = [];

function main() {
    while (true) {
        let choice = parseInt(prompt(
            "MENU:\n" +
            "1. Nhập mảng số nguyên\n" +
            "2. Hiển thị mảng\n" +
            "3. Tìm phần tử lớn nhất và chỉ số\n" +
            "4. Tính tổng và trung bình cộng các số dương trong máng\n" +
            "5. Đảo ngược mảng\n" +
            "6. Kiểm tra mảng đối xứng\n" +
            "7. Thoát\n" 
        ));

        switch (choice) {
            case 1:
                inputArray();
                break;
            case 2:
                displayArray();
                break;
            case 3:
                findMaxAndIndex();
                break;
            case 4:
                sumAndAveragePositive();
                break;
            case 5:
                reverseArray();
                break;
            case 6:
                checkSymmetry();
                break;
            case 7:
                alert("Thoát chương trình!");
                return;
                alert("Lựa chọn không hợp lệ! Vui lòng chọn từ 1-7.");
        }
    }
}

function inputArray() {
    arr = []; 
    let n = parseInt(prompt("Nhập số phần tử của mảng:"));
    if (isNaN(n) || n <= 0) {
        alert("Số phần tử phải là số nguyên dương!");
        return;
    }
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
        if (isNaN(num)) {
            alert("Vui lòng nhập số nguyên!");
            return;
        }
        arr.push(num);
    }
    alert("Đã nhập mảng thành công!");
}

function displayArray() {
    if (arr.length === 0) {
        alert("Mảng rỗng! Vui lòng nhập mảng trước.");
    } else {
        alert("Mảng: " + arr.join(", "));
    }
}

function findMaxAndIndex() {
    if (arr.length === 0) {
        alert("Mảng rỗng! Vui lòng nhập mảng trước.");
        return;
    }
    let max = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    alert(`Phần tử lớn nhất: ${max}\nChỉ số: ${index}`);
}

function sumAndAveragePositive() {
    if (arr.length === 0) {
        alert("Mảng rỗng! Vui lòng nhập mảng trước.");
        return;
    }
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
            count++;
        }
    }
    if (count === 0) {
        alert("Không có số dương trong mảng!");
    } else {
        let avg = sum / count;
        alert(`Tổng các số dương: ${sum}\nTrung bình cộng: ${avg}`);
    }
}

function reverseArray() {
    if (arr.length === 0) {
        alert("Mảng rỗng! Vui lòng nhập mảng trước.");
        return;
    }
    arr.reverse();
    alert("Mảng sau khi đảo ngược: " + arr.join(", "));
}
function checkSymmetry() {
    if (arr.length === 0) {
        alert("Mảng rỗng! Vui lòng nhập mảng trước.");
        return;
    }
    let isSymmetric = true;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            isSymmetric = false;
            break;
        }
    }
    if (isSymmetric) {
        alert("Mảng đối xứng!");
    } else {
        alert("Mảng không đối xứng!");
    }
}
main();