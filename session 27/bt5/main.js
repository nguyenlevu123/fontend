function chunkArray(array, size) {
    if (!Array.isArray(array) || typeof size !== 'number' || size <= 0) {
        return "dữ liệu không hợp lệ";
    }
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

// Ví dụ sử dụng
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1,2,3], [4,5,6], [7,8]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1,2], [3,4], [5,6], [7,8]]
console.log(chunkArray("abc", 3)); // "dữ liệu không hợp lệ"

// function chunkArray(array, size) {
//     if (!Array.isArray(array) || typeof size !== 'number' || size <= 0) {
//         return "dữ liệu không hợp lệ";
//     }
//     let result = [];
//     while (array.length) {
//         result.push(array.splice(0, size));
//     }
//     return result;
// }

// // Ví dụ sử dụng
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1,2,3], [4,5,6], [7,8]]
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1,2], [3,4], [5,6], [7,8]]
// console.log(chunkArray("abc", 3)); // "dữ liệu không hợp lệ"
