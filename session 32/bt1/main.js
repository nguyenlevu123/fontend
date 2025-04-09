const hide = document.getElementById('hide');
const show = document.getElementById('show');
const text = document.getElementById('text');

hide.addEventListener('click', () => {
    text.style.display = 'none'; 
     
});

show.addEventListener('click', () => {
    text.style.display = 'block';
      
});