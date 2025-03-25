let n = 8;

// Mẫu a - Tam giác vuông ngược trái
console.log("Mẫu a:");
for (let i = n; i > 0; i--) {
    console.log('*'.repeat(i));
}
console.log("\n");

// Mẫu b - Tam giác vuông trái dưới
console.log("Mẫu b:");
for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
}
console.log("\n");

// Mẫu c - Tam giác vuông phải dưới
console.log("Mẫu c:");
for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(i));
}
console.log("\n");

// Mẫu d - Tam giác vuông ngược phải
console.log("Mẫu d:");
for (let i = n; i > 0; i--) {
    console.log(' '.repeat(n - i) + '*'.repeat(i));
}
