// Mobile Menu 
const bar = document.getElementById('bars');
const close = document.getElementById('close');
const navBar = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        navBar.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        navBar.classList.remove('active');
    })
}


// Product Image Gallery
let mainImg = document.getElementById('MainImg');
let smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}

//


