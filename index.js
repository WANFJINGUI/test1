 btnText=btnText.split('');
 var isFire=false;
 var divs=document.querySelectorAll('.swiper-slide');
 var isPlay=true;
 var obj={
    //direction: 'vertical',
     on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } ,
      click:function(){
       
      },
      slideChange: function () {
        var c=divs[this.activeIndex-1];
        if(!c){
          return;
        }
        var fire=c.getElementsByClassName('fire');
        if(fire.length>0&&!isFire){
           $('.fire').fireworks({ 
              sound: isPlay, // sound effect
              opacity: 0.9, 
              width: '100%', 
              height: '100%' 
            });
           isFire=true;
        }
      }
    },

    loop: true,
    autoplay: {
	    stopOnLastSlide: true,
      delay: 7000,
    },
    effect:'coverflow',
    speed:500,
     // waitForTransition: false,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      progressbarOpposite:true,
      renderBullet: function (index, className) {
           text=btnText[index];
          return '<span class="' + className + '">' + text + '</span>';
        }
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  }

   var mySwiper = new Swiper ('.swiper-container',obj);
  
  window.onload=function(){
    $('.music-icon').on('click',function(){
      isPlay=!isPlay;
      if(isPlay){
        $('.paused').show();
        document.getElementById('mymusic').pause();
      }else{
        $('.paused').hide();
        document.getElementById('mymusic').play();
      }
    }) 
  }

  