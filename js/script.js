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
    $(".menu-open").click(function(event){
        event.preventDefault;
        $(".sidenav").css("width", "320px");
    });
    $(".menu-close").click(function(event){
        event.preventDefault;
            $(".sidenav").css("width", "0");
    });
    // скрипт для меню, которое выезжает слева ================================
});


// $('.accordion-tab > .accordion-link').click(function(){
//    var findArticle = $(this).next('article'); === переменная для функции .click - пишем внутри {...} скобок и это позволяет нам:

//в переменной findArticle = $(this) в данном случае будет находиться именно эл ссылки === .accordion-link.

//1. найти эл по которому происходит клик (.accordion-link) с помощью метода .next выбрать следующий за ним элемент, который находится в дереве элементов на том же уровне, что и ссылка по которой кликают, но сразу после неё. его и нужно свернуть. в скобках метода можно указать и название элемента. в даном случае .accordion-descr --- это сделает поиск более детальным.

//var findWrapper = $(this).closest('.accordion-tab'); === тут мы тоже выбираем элемент по которому кликаем. с помощью метода .closest находим ближайший родительский элемент, который соответствует селектору указанному в круглых скобках. наверное это позволяет нам "сохранить" клик в пределах радительского элемента по для других элементов.

//2. if (findArticle.is(':visible')) {
//      findArticle.slideUp();
//    } === условный оператор if, который говорит, что, если заголовок открытый, то его нужно закрыть. опять таки закрытие заголовка мы прописываем ВнутрИ фигурных скобок, которые открываем после оператора if.