let tiengui = Number(prompt('tiền gửi:'));
let thanggui  = Number(prompt('tháng gửi:'));

// Tienlai1nam = tiengui*4.3/100;

// tienlai = (Tienlai1nam / thanggui);



tienlai1thang = tiengui * ((4.3/100)/12);

tienlai = tienlai1thang*thanggui;



document.writeln(tienlai);
