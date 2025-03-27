let n = parseInt(prompt("Nhập số phần tử của mảng: "));
let arr = [];

if (n < 0) {
    console.log("Số lượng phần tử không được âm");
} else if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
    for (let i = 0; i < n; i++) {
        arr.push(prompt(`Nhập phần tử thứ ${i + 1}: `));
    }
    console.log("n =", n);
    console.log(arr);
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && arr[i].trim() !== "") {
            sum += parseFloat(arr[i]);
        }
    } 
    console.log(sum === 0 ? "Không có phần tử nào là số" : sum);
}
