let array=[];
function inputarray(){
    let inout =parseInt(prompt("Nhap so phan tu cua mang: "))
array= inputarray.split(",").map(array);
}

function displayArray() {
    console.log("Mảng hiện tại:", array);
}

function findMinMax() {
   let chan;
   let le;
   for(let i = 0; i<array.length; i++){
    if(array[i] %2 ==0){
        chan++;
    }else{
        le++;
    }
   }
   console.log("Số phần tử chan trong mảng:", chan);    
    console.log("Số phần tử le trong mảng:", le);
     alert("Số phần tử chan trong mảng là: " + chan + "\n" + "Số phần tử le trong mảng là: " + le);
 
}

// function sumArray() {
//     let sum = array.reduce((acc, num) => acc + num, 0);
//     console.log("Tổng các phần tử trong mảng:", sum);
//     alert("Tổng các phần tử trong mảng là: " + sum);
// }
function averageArray(array) {
    // Tính tổng các phần tử trong mảng
    let sum = array.reduce((acc, num) => acc + num, 0);
    
    // Tính trung bình cộng
    let average = sum / array.length;
    
    console.log("Trung bình cộng của mảng:", average);
}


// function count1(arr, value) {
//     let count = 0;
//     arr.forEach(item => {
//         if (item === value) count++;
//     });
//     return count;
// }

function deleteItem() { 
    let value = parseInt(prompt("Nhập giá trị cần xóa: "));
    if (isNaN(value)) {
        alert("Vui lòng nhập một giá trị hợp lệ!");
        return;
    }
    let index = array.indexOf(value);
    
    if (index !== -1) {
        array.splice(index, 1);
        console.log("Mảng sau khi xóa:", array);
        alert("Mảng sau khi xóa là: " + array);
    } else {
        alert("Giá trị không tồn tại trong mảng!");
    }
}


console.log(count1(array, 1)); // Output: 4

function secondLargest(array) {  
    array.sort((a, b) => b - a);
    if (array.length >= 2) {
        return array[1];
    } else {
        return null; 
    }
}


console.log(secondLargest(array));  // Kết quả: 45

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
        averageArray();
            break
        
        case 5:

        deleteItem

            break
        
        case 6:

        secondLargest();
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