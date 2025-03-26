let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

console.log("Mảng ban đầu:", numbers);

// Sắp xếp mảng theo thứ tự tăng dần
numbers.sort((a, b) => a - b);

console.log("Mảng sau khi sắp xếp:", numbers);
alert("Mảng sau khi sắp xếp: " + numbers.join(", "));
    