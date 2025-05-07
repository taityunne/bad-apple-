
document.addEventListener('DOMContentLoaded', function() {
   
let hdig = document.getElementById('headerimg');

hdig.addEventListener('dblclick', function() {
    document.querySelector('#arrange iframe').classList.toggle('wactive');
    document.querySelector('#base iframe').classList.toggle('wactive');
    

},false)

let bg = document.getElementsByClassName('iframe')[0];
bg.addEventListener('click', function() {
    document.querySelector('.iframe').classList.toggle('iactive');
    document.querySelector('header').classList.toggle('iactive');
    document.querySelector('#hd header img').src = 'h_k_bad_apple_copy.png'
    document.querySelector('#hd .iactive img').src = 'k_bad_apple_copy.png'
},false)
})
