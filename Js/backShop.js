var listPhone = document.querySelector('.list_phone');
var icon = document.querySelector('.drop');
var searchIcon = document.querySelector('.search_icon i');
var Imgslider = document.querySelector('.img_slider');
var searchInput = document.querySelector('.search_input');
var navChild = document.querySelector('.nav_body');



icon.addEventListener('click',function() {
    listPhone.classList.toggle('hide_list')
})

searchIcon.addEventListener('click', function() {
    searchIcon.classList.add('hide')
    searchInput.classList.remove('hide')
})

Imgslider.addEventListener('click',function(){
    searchIcon.classList.remove('hide')
    searchInput.classList.add('hide')
})

navChild.addEventListener('click', function() {
    searchIcon.classList.remove('hide')
    searchInput.classList.add('hide')
})