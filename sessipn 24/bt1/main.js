let array=[];
function inputarray(){
    let inout =prompt("Nhap so phan tu cua mang: ")
array= inputarray.split(",").map(array);
}

function displayArray() {
    console.log("Mảng hiện tại:", array);
}

function findMinMax() {
    if (array.length === 0) {
        console.log("Mảng rỗng!");
    } else {
       
        let max = Math.max(...array);
        console.log(`Phần tử lớn nhất: ${max}`);
    }
 
}

function sumArray() {
    let sum = array.reduce((acc, num) => acc + num, 0);
    console.log("Tổng các phần tử trong mảng:", sum);
    alert("Tổng các phần tử trong mảng là: " + sum);
}

function count1(arr, value) {
    let count = 0;
    arr.forEach(item => {
        if (item === value) count++;
    });
    return count;
}

console.log(count1(array, 1)); // Output: 4

function numbersotr(){
    array.sort(function(a, b){return a-b});
    console.log("Mảng sau khi sắp xếp tăng dần:", array);
    alert("Mảng sau khi sắp xếp tăng dần la: " + array);
}
do 
{
    choice = parseInt(prompt(`Chon chuc nang:
    1. Nhap chuoi chuoi vao mang
    2. Hien thi mang
    3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
    4. Tính tổng các phần tử trong mảng
    5. Tìm số lần xuất hiện của một phần tử trong mảng
    6. Sắp xếp mảng tăng dần
    7. Thoat`))

    switch (choice) 
    {
        case 1:
           inputarray();
            break
        
        case 2:
        displayArray();     
            break
        
        case 3:
        findMinMax();
        break

        case 4:        
        sumArray();
            break
        
        case 5:

        count1(array, 1); // Tìm số lần xuất hiện của số 1 trong mảng
        alert("So lan xuat hien cua so 1 trong mang la: " + count1(array, 1))

            break
        
        case 6:

        numbersotr();
            break

        //  \s: Đại diện cho khoảng trắng (space, tab, xuống dòng \n...).//  +: Nghĩa là một hoặc nhiều lần.

        //  \s+: Khớp với một hoặc nhiều khoảng trắng liên tiếp
            
        case 7:
            
        alert("Thoat chuong trinh!")
        
        break
    
    default:
        
        alert("Lua chon khong hop le, vui long chon lai!")
        
        break
}

} while (choice !== 7);