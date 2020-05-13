$('.tri li').click(function () {
    var index = $(this).index();
    $(this).addClass('aic').siblings().removeClass('aic');
})