const nav_language_container = document.getElementById('nav_language_container');

const name_first = document.getElementById('name_first');
const name_second = document.getElementById('name_second');
const name_third = document.getElementById('name_third');

const first_img = document.getElementById('first_img');
const second_img = document.getElementById('second_img');
const third_img = document.getElementById('third_img');

const nav_second_language = document.getElementById('nav_second_language');
const nav_third_language = document.getElementById('nav_third_language');


const mobile_product_minus = document.querySelectorAll('.mobile_product_minus');
const mobile_product_plus = document.querySelectorAll('.mobile_product_plus');

for (let input of mobile_product_plus) {

    input.onclick = function(event) {
        event.preventDefault();
        let amount = event.composedPath();
        amountValue = Number(amount[1].childNodes[3].childNodes[0].textContent);
        amount[1].childNodes[3].innerHTML = amountValue + 1;
    }
}


for (let input of mobile_product_minus) {

    input.onclick = function(event) {
        let amount = event.composedPath();
        amountValue = Number(amount[1].childNodes[3].childNodes[0].textContent);

        event.preventDefault();

        if (amountValue == 0) {
            amount[1].childNodes[3].innerHTML = 0;
        } else {
            amount[1].childNodes[3].innerHTML = amountValue - 1;
        }

    }
}




const product_minus = document.querySelectorAll('.product_minus');
const product_plus = document.querySelectorAll('.product_plus');

for (let input of product_plus) {

    input.onclick = function(event) {
        event.preventDefault();
        let amount = event.composedPath();
        amountValue = Number(amount[1].childNodes[3].childNodes[0].textContent);
        amount[1].childNodes[3].innerHTML = amountValue + 1;
    }
}




for (let input of product_minus) {
    
    input.onclick = function(event) {
        let amount = event.composedPath();
        amountValue = Number(amount[1].childNodes[3].childNodes[0].textContent);

        event.preventDefault();

        if (amountValue == 0) {
            amount[1].childNodes[3].innerHTML = 0;
        } else {
            amount[1].childNodes[3].innerHTML = amountValue - 1;
        }

    }
}



$(document).ready(function(){

    $('.products_container').slick({
        slidesToShow: 5,
        slidesToScroll: 5
    });

    $('.main_category_container').slick({
        slidesToShow: 5,
        slidesToScroll: 5
    });

});




const chokolate = document.getElementById('chokolate');
const marmelad = document.getElementById('marmelad');
const zefir = document.getElementById('zefir');
const drinks = document.getElementById('drinks');
const catalog_img = document.getElementById('catalog_img');
const open_catalog = document.getElementById('open_catalog');
const close_catalog = document.getElementById('close_catalog');
const nav_catalog_container = document.getElementById('nav_catalog_container');

marmelad.addEventListener("mouseover", function() {
    catalog_img.src = 'img/chernika.png'
});

marmelad.addEventListener("mouseout", function() {
    catalog_img.src = ''
});


chokolate.addEventListener("mouseover", function() {
    catalog_img.src = 'img/zefir_for_catalog.png'
});

chokolate.addEventListener("mouseout", function() {
    catalog_img.src = ''
});

zefir.addEventListener("mouseover", function() {
    catalog_img.src = 'img/zefir_for_catalog.png'
});

zefir.addEventListener("mouseout", function() {
    catalog_img.src = ''
});

drinks.addEventListener("mouseover", function() {
    catalog_img.src = 'img/chupachups.png'
});

drinks.addEventListener("mouseout", function() {
    catalog_img.src = ''
});

open_catalog.addEventListener('click', function(e) {
    e.preventDefault();
    nav_catalog_container.classList.toggle('active');
})

close_catalog.addEventListener('click', function(e) {
    e.preventDefault();
    nav_catalog_container.classList.remove('active');
})



$(document).ready(function() {
    
    $('.mobile_menu_nav').click(function(event){
        $('.mobile_menu_nav, .mobile_menu_block').toggleClass('active');
        $('html').toggleClass('no_scroll');
    });

    $('.link').click(function(event){
        $('.nav_mobile_navigation, .nav_mobile_container').removeClass('active');
        $('html').removeClass('no_scroll');
    });

});
