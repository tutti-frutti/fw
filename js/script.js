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
    
    // скрипт для анимирования кнопки
    // используется .toggleClass для добавить/убрать класс "active"
    $("button").click(function(event){
        event.preventDefault();
        $("span").toggleClass("active");
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
        autoplay: true,
        vertical: true,
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