const body = document.getElementById('body');
const word1 = document.getElementById('word1');
const word2 = document.getElementById('word2');
const btn = document.getElementById('btn');

let count = 0;

function dark(){
    word1.style.color = 'white';
    word2.style.color = 'white';
    body.style.backgroundColor = 'black';
}
function light(){
    word1.style.color = 'black';
    word2.style.color = 'black';
    body.style.backgroundColor = 'white';
}



btn.addEventListener('click', () => {
    if(count % 2 ==0){
        dark();
        count++;
    }else{
        light();
        count++;
    }
});