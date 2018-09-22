$(function() {
  //获取短信验证码
  var validCode=true;
  $(".code").click (function  () {
    var time=60;
    var code=$(this);
    if (validCode) {
      validCode=false;
      code.addClass("code1");
    var t=setInterval(function  () {
      time--;
      code.html(time+"秒");
      if (time==0) {
        clearInterval(t);
      code.html("重新获取");
        validCode=true;
      code.removeClass("code1");

      }
    },1000)
    }
  })

  //城市
  $(".site").mouseover(function(){
    $(".city_hide").css("display","block");
  });
  $(".city_hide").mouseover(function(){
    $(this).css("display","block");
  });
  $(".city_hide").mouseout(function(){
    $(this).css("display","none");
  });

  //二级菜单
 	var left_menu=$(".left_menu");//导航模块区
    var menu=function(){
        var menuItem=$(".menu_item li");//选择导航列表
        menuItem.each(function(){
            var _index=$(this).index();//获取当前选择菜单列表的索引
            $(this).mouseenter(function(){
                var y = $(this).position().top+1;//获取当前鼠标滑过的列表的顶部坐标
                $(".menu_cont").show();
                $(".menu_cont").css("top",y);//需要显示的对应索引内容
                $(this).addClass("mouse_bg").siblings().removeClass("mouse_bg");
                $(".menu_cont>div").eq(_index).show().siblings().hide();
            });
        });/*导航菜单菜单*/
        $(".left_menu").mouseleave(function(){
            $(".menu_cont").hide();
            menuItem.removeClass("mouse_bg");
        })
    }//展开二级菜单   
    menu();//执行展开二级菜单函
    
    //轮播
    jQuery(".left").slide({mainCell:".play ul",autoPlay:true,titCell:".play_button li"});  
});

 