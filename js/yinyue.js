  $(function(){
   var audio=$('#audio').get(0);

   var $audio=$('#audio');

   //换歌
    var music=[
   {src:'audio/1.mp3',name:"塘桥夜话",yanchang:"不才",shijian:"04:26"},
   {src:'audio/2.mp3',name:"不才",yanchang:"不才",shijian:"04:14"},
   {src:'audio/3.mp3',name:"到不了",yanchang:"陈翔",shijian:"03:49"},
   {src:'audio/4.mp3',name:"好久不见",yanchang:"陈奕迅",shijian:"04:10"},
   {src:'audio/5.mp3',name:"东风破",yanchang:"周杰伦",shijian:"05:15"},
   {src:'audio/6.mp3',name:"伶仃谣",yanchang:"河图",shijian:"04:15"},
   {src:'audio/7.mp3',name:"小芳",yanchang:"刘文浩",shijian:"04:10"},
   {src:'audio/8.mp3',name:"寒衣调",yanchang:"神无月",shijian:"04:40"}
   ];
  $(music).each(function(i,v){
  $('<li data-id='+i+' class="bianlv"><span class="geming">'+v.name+'</span><span class="yanchang">'+v.yanchang+'</span><span class="shijian">'+v.shijian+'</span><div class="xuanxiang"><div class="xiannei1"></div><div class="xiannei2"></div><div class="xiannei3"></div><div class="xiannei4"></div></div></li>').appendTo('.shang ul');

  })
  //清空
    var audio=$('#audio').get(0);
  var $audio=$('#audio');
  var $shijian=$('.shijianaaa');
  var $hui=$('.huitiao');
  var $bai=$('.baitiao');
  var $dian=$('.gediandian');
      $('.qingkong').on('click',function(){
      $('.shang ul').empty();
      $('.xia2 span').html('听我想听的歌！');
      $('.xia3').html('QQ音乐');
      audio.pause();
      $('.caozuo_2').removeClass('bofang');
      $bai.width(0);
      $dian.css({left:0});
      music.splice(0,music.length);
      $('.xia4_2').html(music.length);
  })
   $('.xiannei4').on('click',function(){
    $(this).closest('li').remove();
    music.splice($(this).index,1);
    $('.xia4_2').html(music.length);
   })
   console.dir(music)
//
  var dqindex;
  $('.bianlv').on('click',function(){
    // $('li').removeClass('sssssss');
    // $(this).toggleClass('sssssss');
     dqindex=parseInt($(this).attr('data-id'));
    audio.src=music[dqindex].src;
      audio.play(); 
      $('.xia2 span').html(music[dqindex].name);
      $('.xia3').html(music[dqindex].yanchang);
  })

  $('.xia4_2').html(music.length);



    //下一首
    var $shangyishou=$('.caozuo_1');
    var $xiayishou=$('.caozuo_3');
    $('.caozuo_2').on('click',function(){
      

         if (audio.paused){
          audio.play();
         }else{
          audio.pause();
         }
                 $('.xia2 span').html(music[dqindex].name);
      $('.xia3').html(music[dqindex].yanchang);
   })
      $audio.on('play',function(){
          $('.caozuo_2').addClass('bofang');
          $('.bianlv').removeClass('sssssss').eq(dqindex).addClass('sssssss');
      })
      $audio.on('pause',function(){
          $('.caozuo_2').removeClass('bofang');
      })
    $xiayishou.on('click',function(){

           if (dqindex==undefined){
        dqindex=0;
      }
      dqindex+=1;
      if (dqindex>=music.length){
        dqindex=0;
      }else if (dqindex==0){
        dqindex=music.length-1;
      }
     audio.src=music[dqindex].src;
     audio.play();
           $('.xia2 span').html(music[dqindex].name);
      $('.xia3').html(music[dqindex].yanchang);
    })

    $shangyishou.on('click',function(){

      if (dqindex==undefined){
        dqindex=0;
      }
      dqindex-=1;
      if (dqindex<0){
        dqindex=music.length-1;
      }else if (dqindex==music.length){
        dqindex=0;
      }
      audio.src=music[dqindex].src;
      audio.play();
            $('.xia2 span').html(music[dqindex].name);
      $('.xia3').html(music[dqindex].yanchang);
    })
     //音乐结束
    $audio.on('ended',function(){
      $('.caozuo_3').trigger('click');
    })
    //

    $('.caozuo_6').on('click',function(e){
      
      audio.volume=e.offsetX/$(this).width();

    })
    $(audio).on('volumechange',function(){
     var w=audio.volume*$('.caozuo_6').width();
     $('.caozuo_6_1').width(w);
     $('.diandian').css({left:w});
    })
    $('.caozuo_6').on('click',function(){
        if (audio.volume===0){
        $('.caozuo_5').addClass('jingyin');
      }else{
        $('.caozuo_5').removeClass('jingyin');
      }
    })
    $('.caozuo_5').on('click',function(){
      $('.caozuo_5').toggleClass('jingyin');
      if ($('.caozuo_5').hasClass('jingyin')){
        $audio.attr('yinliang',audio.volume);
        audio.volume=0;
      }else{

        audio.volume=$audio.attr('yinliang')
      }
    })
    //拖动
    $('.diandian').on('click',function(e){
          e.stopPropagation();
    })
    $('.caozuo_6').on('mousedown',function(e){
       
      $(document).on('mousemove',function(e){
      var l=e.pageX-$('.caozuo_6'). offset().left;
       var v=l/$('.caozuo_6').width();
       v=(v>1)?1:v;
       v=(v<0)?0:v;
       audio.volume=v;
       if (v===0){
        $('.caozuo_5').addClass('jingyin');
       }else{
        $('.caozuo_5').removeClass('jingyin');
       }
      })
    })
    $(document).on('mouseup',function(){
      $(this).off('mousemove');
    })
   
  });
  //歌曲进度条
  $(function(){
  var audio=$('#audio').get(0);
  var $audio=$('#audio');
  var $shijian=$('.shijianaaa');
   var $hui=$('.huitiao');
   var $bai=$('.baitiao');
   var $dian=$('.gediandian');
   
  $dian.on('click mouseover',function(e){
  e.stopPropagation();
  })
  $audio.on('timeupdate',function(){
    var w=(audio.currentTime/audio.duration)*$hui.width();
    $bai.width(w);
    $dian.css({left:w});
  })
  $hui.on('click',function(e){
    audio.currentTime=e.offsetX/$hui.width()*audio.duration;
  })


  $hui.on('mousedown',function(){
    var left=$hui.offset().left;
    var width=$hui.width();
    $(document).on('mousemove',function(e){
    
    var v=(e.pageX-left)/width*audio.duration;
    audio.currentTime=v;

    })
  })
  $(document).on('mouseup',function(){
    $(document).off('mousemove');
  })
  $hui.on('mouseover',function(e){
    $shijian.css({display:'block'})
    $hui.on('mousemove',function(e){
    $shijian.css({left:e.offsetX-$shijian.width()/2})
    //时间
    var time=e.offsetX/$(this).width()*audio.duration;
    var fen=parseInt(time/60);
    var miao=parseInt(time%60);
    fen=fen<10?'0'+fen:fen;
    miao=miao<10?'0'+miao:miao;
    if (time!=e.offsetX/$(this).width()*audio.duration){
      $shijian.html('--:--');
      
    }else{
      $shijian.html(fen+':'+miao)
    }
    
    })
  })
  $hui.on('mouseout',function(){
    $shijian.css({display:'none'})
  })
  

  });
  //播放模式
  $(function(){
   var $xz=$('.caozuo_4');
   var $x1=$('.xxk1');
   var $x2=$('.xxk2');
   var $x3=$('.xxk3');
   var $x4=$('.xxk4');
   //console.log($x1)
   var $b1=$x1.css('backgroundPosition');
   var $b2=$x2.css('backgroundPosition');
   var $b3=$x3.css('backgroundPosition');
   var $b4=$x4.css('backgroundPosition');
   console.dir($b1)
   var $xuanxiang=$('.xuanxiangka');
   
  
   $x1.on('click',function(){
   $xz.css('backgroundPosition',$b1);
   
    })
      $x2.on('click',function(){
  $xz.css('backgroundPosition',$b2);
  
    })
         $x3.on('click',function(){
   $xz.css('backgroundPosition',$b3);
   
    })
            $x4.on('click',function(){
   $xz.css('backgroundPosition',$b4);
   
    })

 
  })


