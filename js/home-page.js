//导航条
$(function(){
	$(".vivo-nav li:first").siblings().hover(function(){
		$(this).addClass("nav-current");
		$(".vivo-nav li:first").removeClass("nav-current");
	        },function(){
				$(this).removeClass("nav-current");
				$(".vivo-nav li:first").addClass("nav-current");
		});
	});
//导航条的图标		
$(function(){
	$(".nav-tool-kefu b").hover(function(){
		$(".nav-tool-kefu em").css("display","block");
	},function(){
		$(".nav-tool-kefu em").css("display","none");
	});
});
//响应时的导航条
$(function(){
	$(".vivo-header .nav-tool .nav-tool-menu b").click(function(){
		$(".vivo-header .nav-menu").slideToggle(1000);
        $(".vivo-header .nav-tool .nav-tool-menu b").css("display","none");
        $(".vivo-header .nav-tool .nav-tool-menu b.remove").css("display","block");
        $(".vivo-header .nav-menu li").css("animation","left 1s linear");
       
	});
	$(".vivo-header .nav-tool .nav-tool-menu b.remove").click(function(){
		$(".vivo-header .nav-tool .nav-tool-menu b").css("display","block");
		$(".vivo-header .nav-tool .nav-tool-menu b.remove").css("display","none");
		$(".vivo-header .nav-menu li").css("animation","move 1s linear");		
	});
});

//拉动滚动条改变轮播的透明度
$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$(".vivo-header .nav-menu").css("display","none");			
			$("#carousel li.active").css("animation","toumingdu 1s linear");
		}else{
			$("#carousel").css("opacity","1");
		}
	});
});

$(function(){
	$(".carousel-inner li .text a").hover(function(){
		$(".carousel-inner li .text b").css("transform","translateX(10px)");
		$(".carousel-inner li .text b").css("transition",".3s ease");
	},function(){
		$(".carousel-inner li .text b").css("transform","translateX(0px)");
		$(".carousel-inner li .text b").css("transition","0");
	});
});
//滚动条
$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()>873){
			$(".vivo-foot").css("display","block");
		}else{
			$(".vivo-foot").css("display","none");
		}
	});
});
//首页第三部分内容
$(function(){
	$(".third-contain ul li").hover(function(){
		$(".third-contain h3").css("color","#008CD6");
		$(".third-contain p").css("color","#008CD6");
	},function(){
		$(".third-contain h3").css("color","black");
		$(".third-contain p").css("color","#666666");
	});
});

//脚部的图片
$(function(){
	$(".foot-ico .foot-wechat b").hover(function(){
		$(".vivo-foot .wechat-ico").css("display","block");
	},function(){
		$(".vivo-foot .wechat-ico").css("display","none");
	});
});
//产品菜单
$(function(){
	$(".nav-product").hover(function(){
		$(".product-menu").fadeIn(1000);
		$(".product-menu a").css("animation","right .7s linear");
	},function(){
		$(".product-menu").fadeOut();
	});
});
//产品页面里的盒子边线
$(function(){
	$(".border-right").css("border-right","none");
});
//体验中心页面
$(function(){
	$(".shop-content-one").hover(function(){
		$(".shop-content-one .shop-contact p").css("transition","color .3s ease");
		$(".shop-content-one .shop-contact p").css("color","#008CD6");
		$(".shop-content-one .figure").css("opacity","0.8");
	},function(){
		$(".shop-content-one .shop-contact p").css("color","black");
		$(".shop-content-one .figure").css("opacity","1");
	});
});
$(function(){
	$(".shop-content-two").hover(function(){
		$(".shop-content-two .shop-contact p").css("transition","color .3s ease");
		$(".shop-content-two .shop-contact p").css("color","#008CD6");
		$(".shop-content-two .figure").css("opacity","0.8");
	},function(){
		$(".shop-content-two .shop-contact p").css("color","black");
		$(".shop-content-two .figure").css("opacity","1");
	});
});
$(function(){
	$(".shop-content-three").hover(function(){
		$(".shop-content-three .shop-contact p").css("transition","color .3s ease");
		$(".shop-content-three .shop-contact p").css("color","#008CD6");
		$(".shop-content-three .figure").css("opacity","0.8");
	},function(){
		$(".shop-content-three .shop-contact p").css("color","black");
		$(".shop-content-three .figure").css("opacity","1");
	});
});

$(function(){
	$(".special ul li").hover(function(){
		$(this).css("opacity","0.7");
	},function(){
		$(this).css("opacity","1");
	});
});
