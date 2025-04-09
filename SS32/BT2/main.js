const Btn = document.getElementById('btn');
let num = 0;
Btn.addEventListener('click', function(){
    num++;
    counterDisplay.textContent = `Số lần nhấn: ${num}`;
});