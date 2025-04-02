function menu() {
    while (true) {
        alert("\nChọn một chức năng:\n" +
            "\n 1. Cộng hai số" +
            "\n 2. Trừ hai số" +
            "\n 3. Nhân hai số" +
            "\n 4. Chia hai số" +
            "\n 5. Thoát");

        let choice = prompt("Nhập lựa chọn của bạn (1-5): ");

        if (choice === '5') {
            alert("Thoát chương trình.");
            break;
        }

        if (['1', '2', '3', '4'].includes(choice)) {
            let num1 = parseFloat(prompt("Nhập số thứ nhất: "));
            let num2 = parseFloat(prompt("Nhập số thứ hai: "));

            if (isNaN(num1) || isNaN(num2)) {
                alert("Lỗi: Vui lòng nhập số hợp lệ.");
                continue;
            }

            switch (choice) {
                case '1':
                    alert(`Kết quả: ${num1} + ${num2} = ${num1 + num2}`);
                    break;
                case '2':
                    alert(`Kết quả: ${num1} - ${num2} = ${num1 - num2}`);
                    break;
                case '3':
                    alert(`Kết quả: ${num1} * ${num2} = ${num1 * num2}`);
                    break;
                case '4':
                    if (num2 === 0) {
                        alert("Lỗi: Không thể chia cho 0.");
                    } else {
                        alert(`Kết quả: ${num1} / ${num2} = ${num1 / num2}`);
                    }
                    break;
            }
        } else {
            alert("Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 5.");
        }
    }
}

menu();
