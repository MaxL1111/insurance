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

/* событие выпадания верхнего меню при разрешении экрана меньше 537px */


$(function () {
    $('#toggle').on('click', function () {
        $('#about,#tel').slideToggle(1);

    });
});
