let str = "";

function main() {
    while (true) {
        let choice = parseInt(prompt(
            "MENU:\n" +
            "1. Nhập chuỗi\n" +
            "2. Hiển thị chuỗi\n" +
            "3. Tính độ dài của chuỗi\n" +
            "4. Đếm số lần xuất hiện của một ký tự\n" +
            "5. Kiểm tra chuỗi có đối xứng không\n" +
            "6. Chuyển đổi chuỗi thành chữ in hoa ký tự đầu tiên của từ\n" +
            "7. Thoát\n" +
            "Nhập lựa chọn (1-7):"
        ));

        switch (choice) {
            case 1: 
                str = prompt("Nhập chuỗi:");
                if (str === null || str === "") {
                    alert("Chuỗi không được để trống!");
                    str = "";
                } else {
                    alert("Chuỗi đã được nhập thành công!");
                }
                break;

            case 2: 
                if (str === "") {
                    alert("Chuỗi trống! Vui lòng nhập chuỗi trước.");
                } else {
                    alert("Chuỗi hiện tại: " + str);
                }
                break;

            case 3: 
                if (str === "") {
                    alert("Chuỗi trống! Vui lòng nhập chuỗi trước.");
                } else {
                    let length = 0;
                    while (str[length] !== undefined) {
                        length++;
                    }
                    alert("Độ dài của chuỗi: " + length);
                }
                break;

            case 4: 
                if (str === "") {
                    alert("Chuỗi trống! Vui lòng nhập chuỗi trước.");
                } else {
                    let char = prompt("Nhập ký tự cần đếm:");
                    if (char === null || char.length !== 1) {
                        alert("Vui lòng nhập đúng một ký tự!");
                    } else {
                        let count = 0;
                        for (let i = 0; i < str.length; i++) {
                            if (str[i] === char) {
                                count++;
                            }
                        }
                        alert(`Số lần xuất hiện của ký tự '${char}': ${count}`);
                    }
                }
                break;

            case 5: 
                if (str === "") {
                    alert("Chuỗi trống! Vui lòng nhập chuỗi trước.");
                } else {
                    let isPalindrome = true;
                    let len = 0;
                    while (str[len] !== undefined) {
                        len++;
                    }
                    for (let i = 0; i < len / 2; i++) {
                        if (str[i] !== str[len - 1 - i]) {
                            isPalindrome = false;
                            break;
                        }
                    }
                    if (isPalindrome) {
                        alert("Chuỗi là chuỗi đối xứng!");
                    } else {
                        alert("Chuỗi không đối xứng!");
                    }
                }
                break;

            case 6: 
                if (str === "") {
                    alert("Chuỗi trống! Vui lòng nhập chuỗi trước.");
                } else {
                    let result = "";
                    let len = 0;
                    while (str[len] !== undefined) {
                        len++;
                    }
                    let capitalizeNext = true;
                    for (let i = 0; i < len; i++) {
                        if (capitalizeNext && str[i] !== " ") {
                            let charCode = str.charCodeAt(i);
                            if (charCode >= 97 && charCode <= 122) { // a-z
                                result += String.fromCharCode(charCode - 32); // Chuyển thành in hoa
                            } else {
                                result += str[i];
                            }
                            capitalizeNext = false;
                        } else {
                            result += str[i];
                            if (str[i] === " ") {
                                capitalizeNext = true;
                            }
                        }
                    }
                    str = result;
                    alert("Chuỗi sau khi chuyển đổi: " + str);
                }
                break;

            case 7: 
                alert("Thoát chương trình!");
                return;

            default:
                alert("Lựa chọn không hợp lệ! Vui lòng chọn từ 1-7.");
        }
    }
}
main();