$(function(){
	$('#nav_list ul li').each(function(index,element){
		this.onmouseover=function(){
			$('.nav_list ul li a').eq(index).css('color','white');
		}
		this.onmouseout=function(){
			$('.nav_list ul li a').eq(index).css('color','#333333');
		}
	});
	$('#list_ul li div').hide();
	$('#list_ul li').on('mouseover',function(){
		$('#list_ul li div').stop().show();
	})
	$('#list_ul li').on('mouseout',function(){
		$('#list_ul li div').stop().hide();
	})
	$('#buyCar').on('mouseover',function(){
		$('#buyCar div').stop().show();
	})
	$('#buyCar').on('mouseout',function(){
		$('#buyCar div').stop().hide();
	})
	$('.mi>ul>li').hover(function(){
	$('.mi_con').stop().slideToggle();
	});
	$('.mi_con').hover(function(){
		$(this).stop().slideToggle();
	});
	
	$('.mingxing_p>a>input').click(function(){
		var index=$(this).index();
		mySwiper1.slideTo(index,1000);
		
	});
	var mySwiper1=new Swiper("#kka",{
         onTransitionEnd:function () {
             $(".mingxing_p>a>input").eq(mySwiper1.activeIndex);
         }
     });
	
	$('#dian').on('mouseover',function(){
		$(this).css('background','orange');
		$('#dian a').css('color','white');
	})
	$('#dian').on('mouseout',function(){
		$(this).css('background','white');
		$('#dian a').css('color','black');
	})

	
	$('#dian2').on('mouseover',function(){
		$(this).css('background','orange');
		$('#dian2 a').css('color','white');
	})
	$('#dian2').on('mouseout',function(){
		$(this).css('background','white');
		$('#dian2 a').css('color','black');
	})


//	$('#list_ul li').each(function(index,element){
//		this.onclick=function(){
//			alert(index)
//		}
//	})
})
