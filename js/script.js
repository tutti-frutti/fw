$(document).ready(function() {
   
    $('.left-nav__item>.left__descr').not(':first').hide();
       $('.left-nav__item>.left-nav__link').click(function(){
    
    var findArticle = $(this).next();
    var findWrapper = $(this).closest('.left-nav__item');
    
    if (findArticle.is(':visible')) {
      findArticle.slideUp('slow');
    }
    
    else {
      findWrapper.find('>.left__descr').slideUp();
        findArticle.slideDown();
    }
           
    $('.left-nav__item>.left__subitem').hide();
    
  });
    
    function myFunction(x) {
    x.classList.toggle("change");
};
    
});


// $('.left-nav__item > .left-nav__link').click(function(){
//    var findArticle = $(this).next('article'); === переменная для функции .click - пишем внутри {...} скобок и это позволяет нам:

//в переменной findArticle = $(this) в данном случае будет находиться именно эл ссылки === .left-nav__link.

//1. найти эл по которому происходит клик (.left-nav__link) с помощью метода .next выбрать следующий за ним элемент, который находится в дереве элементов на том же уровне, что и ссылка по которой кликают, но сразу после неё. его и нужно свернуть. в скобках метода можно указать и название элемента. в даном случае .left__descr --- это сделает поиск более детальным.

//var findWrapper = $(this).closest('.left-nav__item'); === тут мы тоже выбираем элемент по которому кликаем. с помощью метода .closest находим ближайший родительский элемент, который соответствует селектору указанному в круглых скобках. наверное это позволяет нам "сохранить" клик в пределах радительского элемента по для других элементов.

//2. if (findArticle.is(':visible')) {
//      findArticle.slideUp();
//    } === условный оператор if, который говорит, что, если заголовок открытый, то его нужно закрыть. опять таки закрытие заголовка мы прописываем ВнутрИ фигурных скобок, которые открываем после оператора if.