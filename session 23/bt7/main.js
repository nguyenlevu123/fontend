let n = parseInt(prompt('Nhập số lượng phần tử của mảng: '));
let arr = [];

if (n <= 0) {
    console.log('Mảng không có phần tử');
} else {
    for (let i = 0; i < n; i++) {
        arr.push(parseFloat(prompt(`Nhập phần tử thứ ${i + 1}: `)));
    }

    console.log('Mảng:', arr);

    // Sắp xếp mảng theo thứ tự giảm dần
    arr.sort((a, b) => b - a);

    // Tìm số lớn thứ hai
    let secondLargest = null;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            secondLargest = arr[i];
            break;
        }
    }

    if (secondLargest !== null) {
        console.log('Số lớn thứ hai trong mảng là:', secondLargest);
    } else {
        console.log('Mảng không có số lớn thứ hai.');
    }
}
