function TaoMonAn(ten, gia, moTa) {
    return { ten, gia, moTa };
  }

  function TaoDanhMuc(tenDanhMuc) {
    return { tenDanhMuc, danhSachMon: [] };
  }
function isTaoDanhMuc() {
let tenDM =prompt("Nhập tên danh mục: ");
if(tenDM){
    menu.push(TaoDanhMuc(tenDM));
    alert("Đã thêm danh mục.");
}

}
  let menu = [];

  function hienThiMenu() {
    console.clear();
    if (menu.length === 0) {
      console.log("Chưa có danh mục nào.");
    } else {
      menu.forEach(danhMuc => {
        console.log("Danh mục:", danhMuc.tenDanhMuc);
        if (danhMuc.danhSachMon.length === 0) {
          console.log("  (Không có món ăn)");
        } else {
          danhMuc.danhSachMon.forEach(mon => {
            console.log("  -", mon.ten, "-", mon.gia + "đ");
            console.log("    Mô tả:", mon.moTa);
          });
        }
      });
    }
  }

  function chayUngDung() {
    while (true) {
      let luaChon = prompt(
        "=== QUẢN LÝ MENU NHÀ HÀNG ===\n" +
        "1. Thêm danh mục\n" +
        "2. Thêm món ăn vào danh mục\n" +
        "3. Xóa món ăn\n" +
        "4. Cập nhật món ăn\n" +
        "5. Hiển thị toàn bộ menu\n" +
        "6. Tìm kiếm món ăn\n" +
        "0. Thoát\n" +
        "Nhập lựa chọn:"
      );

      if (luaChon === null || luaChon === "0") {
        alert("Tạm biệt!");
        break;
      }

      switch (luaChon) {
        case "1": {
            isTaoDanhMuc();
            break;
          }
        
        case "2": {
          if (menu.length === 0) {
            alert("Chưa có danh mục nào.");
            break;
          }
          let danhSachTen = menu.map((dm, i) => `${i + 1}. ${dm.tenDanhMuc}`).join("\n");
          let chonDM = parseInt(prompt("Chọn danh mục:\n" + danhSachTen)) - 1;
          if (chonDM >= 0 && chonDM < menu.length) {
            let ten = prompt("Tên món ăn:");
            let gia = parseFloat(prompt("Giá món:"));
            let moTa = prompt("Mô tả món:");
            menu[chonDM].danhSachMon.push(TaoMonAn(ten, gia, moTa));
            alert("Đã thêm món ăn.");
          } else {
            alert("Danh mục không hợp lệ.");
          }
          break;
        }

        case "3": {
          let tenXoa = prompt("Nhập tên món cần xóa:");
          let daXoa = false;
          for (let dm of menu) {
            let i = dm.danhSachMon.findIndex(m => m.ten === tenXoa);
            if (i !== -1) {
              dm.danhSachMon.splice(i, 1);
              daXoa = true;
              break;
            }
          }
          alert(daXoa ? "Đã xóa món." : "Không tìm thấy món.");
          break;
        }

        case "4": {
          let tenCu = prompt("Nhập tên món cần cập nhật:");
          let tim = null;
          for (let dm of menu) {
            let mon = dm.danhSachMon.find(m => m.ten === tenCu);
            if (mon) {
              tim = mon;
              break;
            }
          }
          if (tim) {
            tim.ten = prompt("Tên mới:", tim.ten);
            tim.gia = parseFloat(prompt("Giá mới:", tim.gia));
            tim.moTa = prompt("Mô tả mới:", tim.moTa);
            alert("Đã cập nhật món.");
          } else {
            alert("Không tìm thấy món.");
          }
          break;
        }

        case "5": {
          hienThiMenu();
          alert("Kiểm tra menu trong console (F12).");
          break;
        }

        case "6": {
            let tuKhoa = prompt("Nhập từ khóa tìm món:");
            let ketQua = [];
            
            for (let dm of menu) {
              for (let mon of dm.danhSachMon) {
                if (mon.ten.toLowerCase() === tuKhoa.toLowerCase()) { // <-- thay ở đây
                  ketQua.push(`${mon.ten} (${dm.tenDanhMuc}) - ${mon.gia}đ\n${mon.moTa}`);
                }
              }
            }
            
            alert(ketQua.length > 0 ? ketQua.join("\n\n") : "Không tìm thấy món.");
            break;
        }
      }
    }
  }

  chayUngDung();









