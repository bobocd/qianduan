
$('#search .menu .hides')
.width($('body').width())
.css('left',-$('#search .menu').offset().left);

//给menu区域加移入事件
$('#search .menu').hover(function(){
	$(this).find('.hides').stop().animate({height:229},300).addClass('h')
},function(){
	$(this).find('.hides').stop().animate({height:0},300,function(){
		$(this).removeClass('h')
	})
})

$('#search .menu .top a').mouseenter(function(){
	//获取当前移入的元素的序号
	var c=$(this).index();
	//让对应序号的li显示，兄弟li隐藏
	$('#search .menu .hides ul li').eq(c).show().siblings('li').hide();
})

//搜索框效果
$('#search .header-search>input').focus(function(){
	$("#search .header-search").addClass('f');
}).blur(function(){
		$("#search .header-search").removeClass('f');
})
//轮播图自动播放
var c=0;
function dsq(){
	c++;
	c = c==5?0:c;
	$('#flashbox .home-hero .flash a').eq(c).fadeIn(300).siblings('a').fadeOut(300);
	$('#flashbox .home-hero .flash ul li').eq(c).addClass('cur').siblings('li').removeClass('cur');
}
var timer=setInterval(dsq,6000);

//鼠标移入取消自动轮播
$('#flashbox .home-hero .flash').hover(function(){
	clearInterval(timer);
},function(){
	timer=setInterval(dsq,6000);
})


//轮播图左右按钮单击事件
$('#flashbox .home-hero .flash .rbtn').click(function(){
	c++;
	c = c==5?0:c;
	$('#flashbox .home-hero .flash a').eq(c).fadeIn(300).siblings('a').fadeOut(300);
	$('#flashbox .home-hero .flash ul li').eq(c).addClass('cur').siblings('li').removeClass('cur');

})

$('#flashbox .home-hero .flash .lbtn').click(function(){
	c--;
	c = c==-1?4:c;
	$('#flashbox .home-hero .flash a').eq(c).fadeIn(300).siblings('a').fadeOut(300);
	$('#flashbox .home-hero .flash ul li').eq(c).addClass('cur').siblings('li').removeClass('cur');

})

//轮播图ul筛选器
$('#flashbox .home-hero .flash ul li').click(function(){
	c=$(this).index();
	$('#flashbox .home-hero .flash a').eq(c).fadeIn(300).siblings('a').fadeOut(300);
	$('#flashbox .home-hero .flash ul li').eq(c).addClass('cur').siblings('li').removeClass('cur');
});

//小米闪购倒计时
var secondskill = 4763000;
var difftime;
function djs(){
	//计算时间差能换算成多少小时
	var hours = parseInt(secondskill/(60*60*1000));
	//获得计算完小时后还剩余的毫秒数
	difftime = secondskill%(60*60*1000);
	//计算分钟
	var minutes = parseInt(difftime/(60*1000));
	//获得计算完分钟后,还剩余的毫秒数
	difftime = difftime%(60*1000);
	//计算秒数
	var seconds = parseInt(difftime/1000);
	
	$("#fasttitle .box-db .left .time div").eq(0).html(hours);
	$("#fasttitle .box-db .left .time div").eq(1).html(minutes);
	$("#fasttitle .box-db .left .time div").eq(2).html(seconds);
}


djs();


setInterval(function(){
	secondskill = secondskill-1000;
	djs();
},1000)



//小米闪购滑动效果
var fc = 0;
//点击右侧按钮
$("#fasttitle .box-hd>div a").eq(1).click(function(){
	fc++;
	if (fc==3) {
		$("#fasttitle .box-db .right .rcontent").css('left',0);
		fc=0;
	}
//	计算大div应该滑动到的位置
	var left = fc*-992;
//	让大div滑动过去
	$("#fasttitle .box-db .right .rcontent").animate({left:left},500);
})


//点击左侧按钮的效果
$("#fasttitle .box-hd>div a").eq(0).click(function(){
	fc--;
	if (fc==-1) {
		$("#fasttitle .box-db .right .rcontent").css('left',-992*2);
		fc=0;
	}
//	计算大div应该滑动到的位置
	var left = fc*-992;
//	让大div滑动过去
	$("#fasttitle .box-db .right .rcontent").animate({left:left},500);
})
