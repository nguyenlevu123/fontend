// // Nhập số từ người dùng
// const num = parseInt(prompt("Nhập số (0-999): "));

// if (num >= 0 && num <= 999) {
//     const ones = ["", "Một", "Hai", "Ba", "Bốn", "Năm", "Sáu", "Bảy", "Tám", "Chín"];
//     const teens = ["Mười", "Mười một", "Mười hai", "Mười ba", "Mười bốn", "Mười lăm", "Mười sáu", "Mười bảy", "Mười tám", "Mười chín"];
//     const tens = ["", "Mười", "Hai mươi", "Ba mươi", "Bốn mươi", "Năm mươi", "Sáu mươi", "Bảy mươi", "Tám mươi", "Chín mươi"];
    
//     let words = "";
//     let hundreds = Math.floor(num / 100);
//     let remainder = num % 100;
    
//     if (hundreds > 0) {
//         words += ones[hundreds] + " trăm";
//         if (remainder !== 0) words += " ";
//     }
    
//     if (remainder >= 10 && remainder < 20) {
//         words += teens[remainder - 10];
//     } else {
//         let tensPlace = Math.floor(remainder / 10);
//         let onesPlace = remainder % 10;
        
//         if (tensPlace > 0) words += tens[tensPlace];
//         if (tensPlace > 0 && onesPlace > 0) words += " ";
//         if (onesPlace > 0) {
//             if (tensPlace === 0 && hundreds > 0) words += "linh ";
//             if (tensPlace !== 0 && onesPlace === 5) words += "lăm";
//             else words += ones[onesPlace];
//         }
//     }
    
//     console.log(words);
// } else {
//     console.log("Số không hợp lệ.");
// }


// const num = parseInt(prompt("Nhập số (0-999): "));

// if (num >= 0 && num <= 999) {
//     const dv = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
//     let tram = Math.floor(num / 100), chuc = Math.floor((num % 100) / 10), donvi = num % 10;
//     let words = "";
    
//     if (tram > 0) words += dv[tram] + " trăm ";
//     if (chuc > 1) words += dv[chuc] + " mươi ";
//     else if (chuc === 1) words += "mười ";
//     else if (tram > 0 && donvi > 0) words += "linh ";
    
//     if (donvi > 0) {
//         if (chuc > 1 && donvi === 5) words += "lăm";
//         else words += dv[donvi];
//     }
    
//     console.log(words.trim());
// } else {
//     console.log("Số không hợp lệ.");
// }
