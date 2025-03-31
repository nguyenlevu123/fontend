let matrix = [];
function main() {
    while (true) {
        let choice = parseInt(prompt(
            "MENU:\n" +
            "1. Nhập mảng 2 chiều\n" +
            "2. Hiển thị mảng 2 chiều\n" +
            "3. Tính tổng các phần tử trong mảng\n" +
            "4. Tìm phần tử lớn nhất và chỉ số\n" +
            "5. Tính trung bình cộng các phần tử của một hàng\n" +
            "6. Đảo ngược các hàng trong mảng\n" +
            "7. Thoát\n" +
            "Nhập lựa chọn (1-7):"
        ));

        switch (choice) {
            case 1:
                matrix = []; // Reset mảng
                let rows = parseInt(prompt("Nhập số hàng của mảng:"));
                let cols = parseInt(prompt("Nhập số cột của mảng:"));
                if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
                    alert("Số hàng và cột phải là số nguyên dương!");
                    break;
                }
                for (let i = 0; i < rows; i++) {
                    let row = [];
                    for (let j = 0; j < cols; j++) {
                        let num = parseInt(prompt(`Nhập phần tử [${i}][${j}]:`));
                        if (isNaN(num)) {
                            alert("Vui lòng nhập số nguyên!");
                            matrix = []; // Reset nếu nhập sai
                            break;
                        }
                        row.push(num);
                    }
                    if (row.length === cols) { 
                        matrix.push(row);
                    }
                }
                if (matrix.length === rows) {
                    alert("Đã nhập mảng 2 chiều thành công!");
                }
                break;

            case 2: 
                if (matrix.length === 0) {
                    alert("Mảng rỗng! Vui lòng nhập mảng trước.");
                    break;
                }
                let displayResult = "Mảng 2 chiều:\n";
                for (let i = 0; i < matrix.length; i++) {
                    let rowStr = "";
                    for (let j = 0; j < matrix[i].length; j++) {
                        rowStr += matrix[i][j] + " ";
                    }
                    displayResult += rowStr + "\n";
                }
                alert(displayResult);
                break;

            case 3: 
                if (matrix.length === 0) {
                    alert("Mảng rỗng! Vui lòng nhập mảng trước.");
                    break;
                }
                let sum = 0;
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        sum += matrix[i][j];
                    }
                }
                alert(`Tổng các phần tử trong mảng: ${sum}`);
                break;

            case 4: 
                if (matrix.length === 0) {
                    alert("Mảng rỗng! Vui lòng nhập mảng trước.");
                    break;
                }
                let max = matrix[0][0];
                let maxRow = 0;
                let maxCol = 0;
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        if (matrix[i][j] > max) {
                            max = matrix[i][j];
                            maxRow = i;
                            maxCol = j;
                        }
                    }
                }
                alert(`Phần tử lớn nhất: ${max}\nChỉ số: [${maxRow}][${maxCol}]`);
                break;

            case 5: 
                if (matrix.length === 0) {
                    alert("Mảng rỗng! Vui lòng nhập mảng trước.");
                    break;
                }
                let rowAvg = parseInt(prompt("Nhập số hàng muốn tính trung bình (0 đến " + (matrix.length - 1) + "):"));
                if (isNaN(rowAvg) || rowAvg < 0 || rowAvg >= matrix.length) {
                    alert("Hàng không hợp lệ!");
                    break;
                }
                let rowSum = 0;
                for (let j = 0; j < matrix[rowAvg].length; j++) {
                    rowSum += matrix[rowAvg][j];
                }
                let avg = rowSum / matrix[rowAvg].length;
                alert(`Trung bình cộng hàng ${rowAvg}: ${avg}`);
                break;

            case 6:
                if (matrix.length === 0) {
                    alert("Mảng rỗng! Vui lòng nhập mảng trước.");
                    break;
                }
                let tempMatrix = [];
                for (let i = matrix.length - 1; i >= 0; i--) {
                    let tempRow = [];
                    for (let j = 0; j < matrix[i].length; j++) {
                        tempRow.push(matrix[i][j]);
                    }
                    tempMatrix.push(tempRow);
                }
                matrix = tempMatrix;
                let reverseResult = "Mảng sau khi đảo ngược các hàng:\n";
                for (let i = 0; i < matrix.length; i++) {
                    let rowStr = "";
                    for (let j = 0; j < matrix[i].length; j++) {
                        rowStr += matrix[i][j] + " ";
                    }
                    reverseResult += rowStr + "\n";
                }
                alert(reverseResult);
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