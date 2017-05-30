/* скролл наверх */
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
});

/* событие выпадания верхнего меню при разрешении экрана меньше 538px */

var menuCenter = document.getElementById('about').innerHTML;
//alert(menuCenter);


var menuHandler = function () {
    qq2.insertAdjacentHTML('afterBegin', menuCenter);
};


var mql = window.matchMedia('all and (max-width: 538px)');
if (mql.matches) {
    menuHandler();// размер окна 538px или меньше
} else {
    menuHandler = false;// нет, размер окна более 538px
}





//выпадающее меню1
$(function () {
    $('.menuT').on('click', function () {
        $('.pull-right').slideToggle(300, function () {
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    })
});


//выпадающее меню2
$(function () {
    $('.menuT2').on('click', function () {
        $('.base').slideToggle(300, function () {
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    })


});








