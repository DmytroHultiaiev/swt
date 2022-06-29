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


const language_arrow = document.getElementById('language_arrow');
const nav_language_container = document.getElementById('nav_language_container');

const name_first = document.getElementById('name_first');
const name_second = document.getElementById('name_second');
const name_third = document.getElementById('name_third');

const first_img = document.getElementById('first_img');
const second_img = document.getElementById('second_img');
const third_img = document.getElementById('third_img');

const nav_second_language = document.getElementById('nav_second_language');
const nav_third_language = document.getElementById('nav_third_language');



language_arrow.addEventListener('click', function(e){
    e.preventDefault();
    language_arrow.classList.toggle('active');
    nav_language_container.classList.toggle('active');

    if (name_first.textContent == 'Ru') {
        name_second.innerHTML = 'En';
        name_third.innerHTML = 'Ch';

        second_img.src = 'img/lang-en.svg'
        third_img.src = 'img/lang-ch.svg'

        nav_second_language.addEventListener('click', function() {
            name_first.innerHTML = 'En';
            first_img.src = 'img/lang-en.svg'
            language_arrow.classList.remove('active');
            nav_language_container.classList.remove('active');
        })

        nav_third_language.addEventListener('click', function() {
            name_first.innerHTML = 'Ch';
            first_img.src = 'img/lang-ch.svg'
            language_arrow.classList.remove('active');
            nav_language_container.classList.remove('active');
        })
    }

    if (name_first.textContent == 'En') {
        name_second.innerHTML = 'Ru';
        name_third.innerHTML = 'Ch';

        second_img.src = 'img/russia.svg'
        third_img.src = 'img/lang-ch.svg'

        nav_second_language.addEventListener('click', function() {
            name_first.innerHTML = 'Ru';
            first_img.src = 'img/russia.svg'
            language_arrow.classList.remove('active');
            nav_language_container.classList.remove('active');
        })

        nav_third_language.addEventListener('click', function() {
            name_first.innerHTML = 'Ch';
            first_img.src = 'img/lang-ch.svg'
            language_arrow.classList.remove('active');
            nav_language_container.classList.remove('active');
        })

    }

    if (name_first.textContent == 'Ch') {
        name_second.innerHTML = 'Ru';
        name_third.innerHTML = 'En';

        second_img.src = 'img/russia.svg'
        third_img.src = 'img/lang-en.svg'

        nav_second_language.addEventListener('click', function() {
            name_first.innerHTML = 'Ru';
            first_img.src = 'img/russia.svg'
            language_arrow.classList.remove('active');
            nav_language_container.classList.remove('active');
        })

        nav_third_language.addEventListener('click', function() {
            name_first.innerHTML = 'En';
            first_img.src = 'img/lang-en.svg'
            language_arrow.classList.remove('active');
            nav_language_container.classList.remove('active');
        })

    }

});