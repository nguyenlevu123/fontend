let width = 20;
let height = 8;

for (let i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) {
        console.log('*'.repeat(width)); // In hàng đầu và hàng cuối toàn dấu *
    } else {
        console.log('*' + ' '.repeat(width - 2) + '*'); // In hàng giữa với khoảng trắng
    }
}
