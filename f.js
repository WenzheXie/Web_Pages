// 导航栏
$(function () {    
 $(".Nav-item>a").eq(0).addClass("dq");
    $(".Nav-item").mouseover(function () {
        $(this).siblings().children("a").removeClass("dq");
    })
    $(".Nav-item").mouseleave(function () {
        $(".Nav-item").eq(0).children("a").addClass("dq");
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

//gif
$(function () {
    $(".gif-1").remove();
    function reshow() {
        $(".text").after("<p class='gif-2'><img src='img/image.gif'></p>");
        $(window).off("scroll")
    }
    var scrollH;
    $(window).on({
        scroll: function () {
            scrollH = $(document).scrollTop();
            //  console.log(scrollH);   
            if (scrollH > 300) {
                reshow();

            }
        }

    })


})
$(function () {
    var index = 0;
    var cArr = ["a4", "a3", "a2", "a1"];
    function previmg() {
        cArr.unshift(cArr[3]);
        cArr.pop();
        //i是元素的索引，从0开始
        //e为当前处理的元素
        //each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
        $(".L-1-img>li").each(function (i, e) {
            $(e).removeClass().addClass(cArr[i]);
        })
        index--;
        if (index < 0) {
            index = 3;
        }
        show();
    }
    function nextimg() {
        cArr.push(cArr[0]);
        cArr.shift();
        $(".L-1-img>li").each(function (i, e) {
            $(e).removeClass().addClass(cArr[i]);
        })
        index++;
        if (index > 3) {
            index = 0;
        }
        show();
    }

    $(".prev").on({
        click: function () {
            previmg();
        }
    })
    $(".next").on({
        click: function () {
            nextimg();
        }
    })
    $(".dot-1").each(function () {
        $(this).click(function () {
            var myindex = $(this).index();
            var b = myindex - index;
            if (b == 0) {
                return;
            }
            else if (b > 0) {

                var newarr = cArr.splice(0, b);
                cArr = $.merge(cArr, newarr);
                $(".L-1-img>li").each(function (i, e) {
                    $(e).removeClass().addClass(cArr[i]);
                })
                index = myindex;
                show();
            }
            else if (b < 0) {

                cArr.reverse();
                var oldarr = cArr.splice(0, -b)
                cArr = $.merge(cArr, oldarr);
                cArr.reverse();
                $(".L-1-img>li").each(function (i, e) {
                    $(e).removeClass().addClass(cArr[i]);
                })
                index = myindex;
                show();
            }
        })

    })
    
	//改变底下按钮的背景色
	function show(){
        $(".dot-1").eq(index).css({"color":"brown"}).siblings().css({"color":"white"});
}

$(document).on("click",".a1",function(){
    previmg();
    return false;//返回一个false值，让a标签不跳转
});

//点击class为p4的元素触发下一张照片的函数
$(document).on("click",".a3",function(){
    nextimg();
    return false;
});

    $(".list-1").mouseover(function () {
        clearInterval(timer);
    })


    $(".list-1").mouseleave(function () {
        timer = setInterval(nextimg, 4000);
    })

    timer = setInterval(nextimg, 4000);

})

/* $(function(){
 alert($(window).width());
}) */
$(function () {
    var index = 0;
    var cArr = ["b4", "b3", "b2", "b1"];
    function previmg() {
        cArr.unshift(cArr[3]);
        cArr.pop();
        //i是元素的索引，从0开始
        //e为当前处理的元素
        //each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
        $(".list-2>ul>li").each(function (i, e) {
            $(e).removeClass().addClass(cArr[i]);
        })
        index--;
        if (index < 0) {
            index = 3;
        }
        $(".b2").children(".small").css({"width":"280px", "height":"500px"});
        $(".b2").siblings().children(".small").css({"width":"0","height":"0"});
     show();
     change();
    }
    function nextimg() {
        cArr.push(cArr[0]);
        cArr.shift();
        $(".list-2>ul>li").each(function (i, e) {
            $(e).removeClass().addClass(cArr[i]);
        })
        index++;
        if (index > 3) {
            index = 0;
        }
        $(".b2").children(".small").css({"width":"280px", "height":"500px"});
        $(".b2").siblings().children(".small").css({"width":"0","height":"0"});
        show();
        change();
    }

    $(".prev1").on({
        click: function () {
            previmg();
        }
    })
    $(".next1").on({
        click: function () {
            nextimg();
        }
    })
    
    $(".dot-2").each(function () {
        $(this).click(function () {
            var myindex = $(this).index();
            var b = myindex - index;
            if (b == 0) {
                return;
            }
            else if (b > 0) {

                var newarr = cArr.splice(0, b);
                cArr = $.merge(cArr, newarr);
                $(".list-2>ul>li").each(function (i, e) {
                    $(e).removeClass().addClass(cArr[i]);
                })
                index = myindex;
                show();
                change();
                $(".b2").children(".small").css({"width":"280px", "height":"500px"});
                $(".b2").siblings().children(".small").css({"width":"0","height":"0"});
        
            }
            else if (b < 0) {

                cArr.reverse();
                var oldarr = cArr.splice(0, -b)
                cArr = $.merge(cArr, oldarr);
                cArr.reverse();
                $(".list-2>ul>li").each(function (i, e) {
                    $(e).removeClass().addClass(cArr[i]);
                })
                index = myindex;
                show();
                change();
                $(".b2").children(".small").css({"width":"280px", "height":"500px"});
                $(".b2").siblings().children(".small").css({"width":"0","height":"0"});
        
            }
        })
        
    })
    function show(){
        $(".dot-2").eq(index).css({"color":"white"}).siblings().css({"color":"brown"});
}
function change(){
$(".title>ul>li").eq(index).css({"opacity" :"1"}).siblings().css({"opacity":"0"});
$(".text1>ul>li").eq(index).css({"opacity" :"1"}).siblings().css({"opacity":"0"});
}
    $(".list-2>ul").mouseover(function () {
        clearInterval(timer);
    })


    $(".list-2>ul").mouseleave(function () {
        timer = setInterval(nextimg, 4000);
    })

    timer = setInterval(nextimg, 4000);
    $(document).on("click",".b1",function(){
		previmg();
		return false;//返回一个false值，让a标签不跳转
	});

	//点击class为p4的元素触发下一张照片的函数
	$(document).on("click",".b3",function(){
		nextimg();
		return false;
	});
})
//jump
$(function(){
    $(".Nav-item").eq(1).on({
        click:function(){
            $(document).scrollTop(1960);
            // $(".Nav-item").eq(1).addClass("dq");
        }
    })
})