let matrix = [];
function main() {
    while (true) {
        let choice = parseInt(prompt(
            "MENU:\n" +
            "1. Nhập mảng 2 chiều\n" +
            "2. Hiển thị mảng 2 chiều\n" +
            "3. Tính tổng các phần tử trong mảng\n" +
            "4. Tính tổng đường chéo chính\n" +
            "5. Tính tổng đường chéo phụ\n" +
            "6. Tính trung bình cộng các phần tử trong một hàng hoặc cột\n" +
            "7. Thoát\n" +
            "Nhập lựa chọn (1-7):"
        ));

        switch (choice) {
            case 1: 
                matrix = []; 
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
                            matrix = []; 
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
                if (matrix.length !== matrix[0].length) {
                    alert("Mảng không phải ma trận vuông! Không có đường chéo chính.");
                    break;
                }
                let mainDiagonalSum = 0;
                for (let i = 0; i < matrix.length; i++) {
                    mainDiagonalSum += matrix[i][i];
                }
                alert(`Tổng đường chéo chính: ${mainDiagonalSum}`);
                break;

            case 5: 
                if (matrix.length === 0) {
                    alert("Mảng rỗng! Vui lòng nhập mảng trước.");
                    break;
                }
                if (matrix.length !== matrix[0].length) {
                    alert("Mảng không phải ma trận vuông! Không có đường chéo phụ.");
                    break;
                }
                let secondaryDiagonalSum = 0;
                for (let i = 0; i < matrix.length; i++) {
                    secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
                }
                alert(`Tổng đường chéo phụ: ${secondaryDiagonalSum}`);
                break;

            case 6: 
                if (matrix.length === 0) {
                    alert("Mảng rỗng! Vui lòng nhập mảng trước.");
                    break;
                }
                let type = prompt("Chọn tính trung bình theo:\n1. Hàng\n2. Cột\nNhập 1 hoặc 2:");
                if (type === '1') { 
                    let rowIdx = parseInt(prompt("Nhập số hàng muốn tính trung bình (0 đến " + (matrix.length - 1) + "):"));
                    if (isNaN(rowIdx) || rowIdx < 0 || rowIdx >= matrix.length) {
                        alert("Hàng không hợp lệ!");
                        break;
                    }
                    let rowSum = 0;
                    for (let j = 0; j < matrix[rowIdx].length; j++) {
                        rowSum += matrix[rowIdx][j];
                    }
                    let rowAvg = rowSum / matrix[rowIdx].length;
                    alert(`Trung bình cộng hàng ${rowIdx}: ${rowAvg}`);
                } else if (type === '2') { 
                    let colIdx = parseInt(prompt("Nhập số cột muốn tính trung bình (0 đến " + (matrix[0].length - 1) + "):"));
                    if (isNaN(colIdx) || colIdx < 0 || colIdx >= matrix[0].length) {
                        alert("Cột không hợp lệ!");
                        break;
                    }
                    let colSum = 0;
                    for (let i = 0; i < matrix.length; i++) {
                        colSum += matrix[i][colIdx];
                    }
                    let colAvg = colSum / matrix.length;
                    alert(`Trung bình cộng cột ${colIdx}: ${colAvg}`);
                } else {
                    alert("Lựa chọn không hợp lệ! Chọn 1 hoặc 2.");
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