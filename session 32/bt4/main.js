const body = document.getElementById('body');
const open = document.getElementById('open');
const alert = document.getElementById('alert');
const close = document.getElementById('close');


open.addEventListener('click', () =>{
    body.style.backgroundColor = 'grey'
    open.style.backgroundColor = 'grey'
    alert.style.display = 'block'
})

close.addEventListener('click', () => {
    body.style.backgroundColor = 'white'
    open.style.backgroundColor = 'white'
    alert.style.display = 'none'
})