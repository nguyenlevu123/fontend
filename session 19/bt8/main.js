let thang = Number(prompt('nhập số tháng mà bạn muốn kiểmm tra: '));

if (thang <= 0) {
    document.writeln('nhập sai giá trị')
} else if (thang <= 3) {
    document.writeln('mùa xuân')
} else if ( thang <= 6) {
    document.writeln('mùa hạhạ')
} else if (thang <= 9) {
    document.writeln('mùa thu')
} else if (thang <= 12) {
    document.writeln ('mùa đông')
}
