var searchInput = document.querySelector('.search_input');
var searchIcon = document.querySelector('.search');
var leftIcon = document.querySelector(".prev");
var rightIcon = document.querySelector('.next');
var ImgPhone = document.getElementById("img_phone");
var Slider = document.querySelector('.container');
var NavChild = document.querySelector('.nav_body');
var List = document.querySelector('.list');
var system = document.querySelector('.System');
var buyNow = document.querySelectorAll('#buy_now');
var buyLater = document.querySelectorAll('#buy_later');
var cart = document.querySelector('.cart');
var cartIcon = document.querySelector('.cart_icon');
var cartContainer = document.querySelector('.cart_container');



function ShowIcon() {
    searchIcon.classList.remove('hide');
    searchInput.classList.add('hide');
}

function hideIcon() {
    searchIcon.classList.add('hide');
    searchInput.classList.remove('hide');
}

NavChild.addEventListener('click',function() {
    ShowIcon();
})

Slider.addEventListener('click',function() {
    ShowIcon();
})

var image = [];
var index = 0;

searchIcon.addEventListener('click',()=>{
    hideIcon();
})

for(let i = 0 ; i < 3 ; i++) {
    image[i] = new Image();
    image[i].src = "img/img" + i + '.webp';
}

function imageClick() {
        index = 0 ;
        ImgPhone.src = image[index].src
}

function imageClick1() {
    index = 1 ;
    ImgPhone.src = image[index].src
}

function imageClick2() {
    index = 2;
    ImgPhone.src = image[index].src
}

rightIcon.addEventListener('click',function() {
    index++;
    if(index >= image.length) {
        index = 0;
    }
    ImgPhone.src = image[index].src
})

leftIcon.addEventListener('click',function() {
    index--;
    ImgPhone.src = image[index].src
})


var endsale = new Date("November 03 , 2022 00:00:00").getTime()
setInterval(function(){
    var beginSale = new Date().getTime();
    var endGame = endsale - beginSale;
    
    var days = Math.floor(endGame/(1000*60*60*24));
    var hours = Math.floor(endGame/(1000*60*60));
    var minutes = Math.floor(endGame/(1000*60));
    var seconds = Math.floor(endGame/(1000));

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.querySelector('.day').innerText = days;
    document.querySelector('.hours').innerText = hours;
    document.querySelector('.minute').innerText = minutes;
    document.querySelector('.second').innerText = seconds;
})

List.addEventListener('click',() => {
    system.classList.toggle('hide')
})

/*add cart*/

for(let i = 0 ; i < buyNow.length ; i++) {
    buyNow[i].addEventListener('click',function(){
        alert('Thêm vào vỏ hàng cái đi rồi mua gấp gáp gì đâu -_-');
    })
}

function HideCart() {
    cart.classList.add('hideCart')
}

function ShowCart() {
    cart.classList.toggle('hideCart')
}


cartIcon.addEventListener('click',function() {
    ShowCart()
})

cart.addEventListener('click',function() {
    HideCart();
})

cartContainer.addEventListener('click',function(e) {
    e.stopPropagation();
})