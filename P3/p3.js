// 导航栏
$(function () {
    /* $(".dh-item").eq(1).on({
        click: function () {
           
            $(".dhDown").slideToggle();
        }
    }), */

        // 导航栏下标线
        $(".dh-item>a").eq(3).addClass("dq");
    $(".dh-item").mouseover(function () {
        $(this).siblings().children("a").removeClass("dq");
    })
    $(".dh-item").mouseleave(function () {
        $(".dh-item").eq(3).children("a").addClass("dq");
    })
})
//二维码
$(function () {
    $(".qr-item").on({
        mouseover: function () {
            $(this).children("ul,p").stop().slideDown(150);
        },
        mouseout: function () {
            $(this).children("ul,p").stop().slideUp();
        }
    });
})
$(function(){
    console.log(1);
})
