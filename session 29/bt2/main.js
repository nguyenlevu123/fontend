let oj={

};




function main(){
    let choice=0;
    do {
        choice = Number(prompt(
            "MENU QUẢN LÝ SẢN PHẨM:\n" +
            "1. Thêm sản phẩm\n" +
            "2. Hiển thị tất cả sản phẩm\n" +
            "3. Hiển thị chi tiết sản phẩm theo ID\n" +
            "4. Cập nhật sản phẩm theo ID\n" +
            "5. Xóa sản phẩm theo ID\n" +
            "6. Lọc sản phẩm theo khoảng giá\n" +
            "7. Thoát\n" +
            "Nhập lựa chọn của bạn:"
        ));
        switch(choice){
            case 1:
                add();
                break;

            case 2:
                show();
                break;

            case 3:
                showbyid();
                break;

            case 4:
                upinfor();
                break;

            case 5:
                dele();
                break;
            
            case 6:
                locsp();
                break

            case 7:
                alert("mais bayyy!");

                default:
                    alert("nhap j vay ba:");
            
        }
    
    
    }while(choice!=7);
}

function add(){
    let id=""
       do{
        id=prompt("nhap vao id cho tung san pham: ");
       }while(oj.hasOwnProperty(id));

        let name=prompt("nhap vao ten cho loai san pham:");

        let price=0

        
        do{
            price=Number(prompt("nhap vao gia tien cua san pham: "));
        }while(isNaN(price))

        let category=prompt("danh muc cua san pham la");

        let quantity=parseInt(prompt("so luong san pham o trong kho la: "));

        oj[id]={name, price, category, quantity};
        alert("them thanh cong!");
}

function show(){
    let output=""
    for(let id in oj){
        output+= ("id: "+id+" name: "+oj[id].name+" price: "+oj[id].price+" category: "+oj[id].category+" quantity: "+oj[id].quantity+"\n");
    }
    alert("danh sach san pham \n"+output);
}


function showbyid(){
    let shearchid=prompt("nhap vao id cho san pham ban muon xem chi tiet: ");
   
    if(oj.hasOwnProperty(shearchid)){
       alert("thong tin san pham theo id: \n"+"id: "+shearchid+" name: "+oj[shearchid].name+" price: "+oj[shearchid].price+" catagory: "+oj[shearchid].category+" quantity: "+oj[shearchid].quantity);
    }else{
        alert("khong ton tai id do!");
    }
}


    function upinfor(){
        let upid=prompt("nhap vao id san pham muon chinh sua: ");
        if(oj.hasOwnProperty(upid)){
     
             let name=prompt("nhap vao ten cho loai san pham:");
     
             let price=0
             do{
                 price=Number(prompt("nhap vao gia tien cua san pham: "));
             }while(isNaN(price))
     
             let category=prompt("danh muc cua san pham la");
     
             let quantity=parseInt(prompt("so luong san pham o trong kho la: "));
     
             oj[upid]={name, price, category, quantity};
             alert("sua infor san pham thanh cong!");
            }else{
                alert("khong ton tai id ")
            }
        }
    
    
        function dele(){
            let deleid=prompt("nhap vao id muon xoa");
          
            if(oj.hasOwnProperty(deleid)){
                  let accep=""
                do{
                    accep=(prompt("xac  nhan xoa hoac huy(yes/no)"))
                }while(accep!=="yes" && accep!=="no")
                
                 if(accep=="yes"){
                    delete oj[deleid]
                    alert("xoa theo id thanh cong")
                 }else{
                    alert("huy xoa id");
                    
                 }   
            }else{
                alert(" id khong ton tai");
            }
        }
        function locsp(){
            let minprice=0;
            let maxprice=0;
    
            do{
                minprice=Number(prompt("nhap vao khoang gia tien nho nhat "));
            }while(isNaN(minprice))
    
            do{
                maxprice=Number(prompt("nhap vao so gia khoang max"));
            }while(isNaN(maxprice))
    
            let output=""
            for(let id in oj){
                let sanpham=oj[id];
                if(oj[id].price>=minprice && oj[id].price<=maxprice){
                    output+=("id: "+id+ "name: "+oj[id].name+ " price: "+oj[id].price+" category: "+oj[id].category+" quantity: "+oj[id].quantity+"\n")
                }
                }
                if(output==""){
                    alert("khong ton tai");
                }else{
                    alert(output);
                }
            }
          
    
        
    
    main();