$(document).ready(function() {
   
    $('.accordion-tab>.accordion-descr').not(':first').hide();
       $('.accordion-tab>.accordion-link').click(function(){
    var findArticle = $(this).next();
    var findWrapper = $(this).closest('.accordion-tab');
    if (findArticle.is(':visible')) {
      findArticle.slideUp('slow');
    }
    else {
      findWrapper.find('>.accordion-descr').slideUp();
        findArticle.slideDown();
    }
    $('.accordion-tab>.left__subitem').hide();
    
  });
    // скрипт для select
    $(".select__doors").click(function(event){
        event.preventDefault();
        $(".select__doors").toggleClass("display");
        $(".select__list-1").slideToggle();
    });
    $(".select__material").click(function(event){
        event.preventDefault();
        $(".select__material").toggleClass("display");
        $(".select__list-2").slideToggle();
    });
    
    // скрипт для выбора языка
    $('.language__click').click(function(event){
        event.preventDefault();
        $('.language__sub-list').slideToggle();
    });
    
    // скрипт отображения значения языков из 'data-lang'
    $('.language__sub-list').on('click', '.language__sub-link',function(e){
        // .on --- Устанавливает обработчики событий на выбранные элементы страницы. 
        // 1. в этом слчае мы можем выбрать блок и классы ссылок в этом блоке.
        var lang = $(this).attr('data-lang');
        // .attr --- возвращает или изменяет значение атрибутов у выбранных элементов страницы.
        // $(this) --- объект по которому произошло событие
        // 2. берем значение атрибута data-lang и добавляем в переменную 'lang'.
        $('.language__click').text(lang);
        // .text --- возвращает или изменяет текстовое содержимое выбранных элементов страницы.
        // 3. выбираем ссылку '.language__click' и меняем текстовое содержимое на 
        $('.language__click').addClass('act-england');
        $(".language__sub-list").slideUp();
        e.preventDefault();
    });
    
    // скрипт для анимирования кнопки
    // используется .toggleClass для добавить/убрать класс "active"
    $("button").click(function(event){
        event.preventDefault();
        $("span").toggleClass("active");
    });
    
    // скрипт для блока с товарами
    $('.goods-nav__list').on('mouseenter', '.goods-nav__list a',function(e){
        $('.phones').toggleClass('js-display');
    });
    
    // скрипт для моб меню
    // добавляем/убираем класс "show", которому в css прописанны параметры для меню 
    $(".menu-open").click(function(event){
        event.preventDefault;
        $(".menu__list").toggleClass("show");
    });
    
    
    // скрипт для меню, которое выезжает слева ================================
//    $(".menu-open").click(function(event){
//        event.preventDefault;
//        $(".sidenav").css("width", "100%");
//    });
//    $(".menu-close").click(function(event){
//        event.preventDefault;
//            $(".sidenav").css("width", "0");
//    });
    // скрипт для меню, которое выезжает слева ================================
    
    $(".menu-open").click(function(event){
        event.preventDefault;
        $(".sidenav").toggleClass("active");
    });
//    $(".menu-close").click(function(event){
//        event.preventDefault;
//        $(".sidenav").removeClass("active");
//    });
    
    // ============================================================
    // скрипт для "выезда" блока с формой и смены иконок при клике
    
    $(".search-icon").click(function(event){
        event.preventDefault;
        $(".site-search").slideToggle("1000"); // плавно открывает блок с формой
        if($(".search-icon").hasClass("icon-open")) { // < условие!
            $(".search-icon").removeClass("icon-open");
            $(".search-icon").addClass("icon-close");
        }
        else {
            $(".search-icon").removeClass("icon-close");
            $(".search-icon").addClass("icon-open");
        }
        
        // оба выражения "смотрят" на условие. тут, по логике кода обязательно есть какой-то один класс из двух. или icon-open или icon-close. с верхним выражением понятно --- если имеем класс icon-open, то убираем его и добавляем icon-close. во втором случае подразумевается, что, если не стоит класс icon-open --- значит стоит класс icon-close, а значит мы его убираем и добавляем icon-open.
       // ============================================================ 
    });
    
    // ============================================================
    // slick-slider
    
    $('.slider-content').slick({
        dots: true,
        pauseOnHover: true, // пауза прокрутки при наведении курсора
//        autoplay: true,
        vertical: true,
  });
    
    $('.hd-slider__content').slick({
        dots: true,
        pauseOnHover: true, // пауза прокрутки при наведении курсора
//        autoplay: true,
//        vertical: true,
  });
    // ============================================================
    
    $('#slideshow').desoSlide({
    thumbs: $('ul.slideshow_thumbs li > a'),
    effect: {
        provider: null, // название типа анимации
        name: 'none', // тип эффекта анимации
    },
    overlay: 'hover', // убирает полосу снизу на большом избр 
    controls: {
        show: true, // убирает контроллеры
        keys: true, // управление с клавиатуры
    },
    auto: {
        load: true, // предзагрузка фотографий
        start: true, // автостарт слайдшоу
    }
});
    // ============================================================
    // bx-slider
    $('.bxslider').bxSlider({
        mode: 'vertical',
        adaptiveHeight: false,
        responsive: false,
        pagerCustom: '#bx-pager', // для отображения thumb
        pagerType: 'full', // при 'short' меняет на цифры
        pagerSelector: 'jQuery selector',
        controls: true, // убирает/добавляет стрелки на слайдер
        autoControls: true,
    });
    // ============================================================
    
});


// $('.accordion-tab > .accordion-link').click(function(){
//    var findArticle = $(this).next('article'); === переменная для функции .click - пишем внутри {...} скобок и это позволяет нам:

//в переменной findArticle = $(this) в данном случае будет находиться именно эл ссылки === .accordion-link.

//1. найти эл по которому происходит клик (.accordion-link) с помощью метода .next выбрать следующий за ним элемент, который находится в дереве элементов на том же уровне, что и ссылка по которой кликают, но сразу после неё. его и нужно свернуть. в скобках метода можно указать и название элемента. в даном случае .accordion-descr --- это сделает поиск более детальным.

//var findWrapper = $(this).closest('.accordion-tab'); === тут мы тоже выбираем элемент по которому кликаем. с помощью метода .closest находим ближайший родительский элемент, который соответствует селектору указанному в круглых скобках. наверное это позволяет нам "сохранить" клик в пределах радительского элемента по для других элементов.

//2. if (findArticle.is(':visible')) {
//      findArticle.slideUp();
//    } === условный оператор if, который говорит, что, если заголовок открытый, то его нужно закрыть. опять таки закрытие заголовка мы прописываем ВнутрИ фигурных скобок, которые открываем после оператора if.