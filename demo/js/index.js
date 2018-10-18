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

    //下拉列表:车龄
    $(".select_1 p").click(function(){ 
        var ul = $(".select_1 ul"); 
        if(ul.css("display")=="none"){ 
            ul.slideDown("fast"); 
        }else{ 
            ul.slideUp("fast"); 
        } 
    });
    $(".select_1 ul li").click(function(){ 
        var txt = $(this).text(); 
        $(".select_1 p").html(txt); 
        $(".select_1 ul").hide(); 
    });
    //下拉列表:排量
    $(".select_2 p").click(function(){ 
        var ul = $(".select_2 ul"); 
        if(ul.css("display")=="none"){ 
            ul.slideDown("fast"); 
        }else{ 
            ul.slideUp("fast"); 
        } 
    });
    $(".select_2 ul li").click(function(){ 
        var txt = $(this).text(); 
        $(".select_2 p").html(txt); 
        $(".select_2 ul").hide(); 
    });
    //下拉列表:里程
    $(".select_3 p").click(function(){ 
        var ul = $(".select_3 ul"); 
        if(ul.css("display")=="none"){ 
            ul.slideDown("fast"); 
        }else{ 
            ul.slideUp("fast"); 
        } 
    });
    $(".select_3 ul li").click(function(){ 
        var txt = $(this).text(); 
        $(".select_3 p").html(txt); 
        $(".select_3 ul").hide(); 
    });
    //下拉列表:变速箱
    $(".select_4 p").click(function(){ 
        var ul = $(".select_4 ul"); 
        if(ul.css("display")=="none"){ 
            ul.slideDown("fast"); 
        }else{ 
            ul.slideUp("fast"); 
        } 
    });
    $(".select_4 ul li").click(function(){ 
        var txt = $(this).text(); 
        $(".select_4 p").html(txt); 
        $(".select_4 ul").hide(); 
    });
    //下拉列表:颜色
    $(".select_5 p").click(function(){ 
        var ul = $(".select_5 ul"); 
        if(ul.css("display")=="none"){ 
            ul.slideDown("fast"); 
        }else{ 
            ul.slideUp("fast"); 
        } 
    });
    $(".select_5 ul li").click(function(){ 
        var txt = $(this).text(); 
        $(".select_5 p").html(txt); 
        $(".select_5 ul").hide(); 
    });

    //分页代码
    tabPage({
      pageMain: '#pageMain',//内容
      pageNav: '#pageNav',//页码
      pagePrev: '#prev',//上一页
      pageNext: '#next',//下一页
      curNum: 2, /*每页显示的条数*/
      activeClass: 'active', /*高亮显示的class*/
      ini: 0/*初始化显示的页面*/
    });
    tabPage({
        pageMain: '#pageMain_1',//内容
        pageNav: '#pageNav_1',//页码
        pagePrev: '#prev_1',//上一页
        pageNext: '#next_1',//下一页
        curNum: 2, /*每页显示的条数*/
        activeClass: 'active', /*高亮显示的class*/
        ini: 0/*初始化显示的页面*/
      });
    function tabPage(tabPage) {
      var pageMain = $(tabPage.pageMain);/*获取内容列表*/
      var pageNav = $(tabPage.pageNav);/*获取分页*/
      var pagePrev = $(tabPage.pagePrev);/*上一页*/
      var pageNext = $(tabPage.pageNext);/*下一页*/
  
      var curNum = tabPage.curNum;/*每页显示数*/
      var len = Math.ceil(pageMain.find("li").length / curNum);/*计算总页数*/
      console.log(len);
      var pageList = '';/*生成页码*/
      var iNum = 0;/*当前的索引值*/
 
      for (var i = 0; i < len; i++) {
        pageList += '<a href="javascript:;">' + (i + 1) + '</a>';
      }
      pageNav.html(pageList);/*头一页加高亮显示*/
        pageNav.find("a:first").addClass(tabPage.activeClass); 
        /*******标签页的点击事件*******/
        pageNav.find("a").each(function(){
          $(this).click(function () {
            pageNav.find("a").removeClass(tabPage.activeClass);
            $(this).addClass(tabPage.activeClass);
            iNum = $(this).index();
            $(pageMain).find("li").hide();
            for (var i = ($(this).html() - 1) * curNum; i < ($(this).html()) * curNum; i++) {
              $(pageMain).find("li").eq(i).show()
            }
          });
        }) 

        $(pageMain).find("li").hide();
        /************首页的显示*********/
        for (var i = 0; i < curNum; i++) {
          $(pageMain).find("li").eq(i).show()
        } 
 
        /*下一页*/
        pageNext.click(function () {
          $(pageMain).find("li").hide();
          if (iNum == len - 1) {
            alert('已经是最后一页');
            for (var i = (len - 1) * curNum; i < len * curNum; i++) {
              $(pageMain).find("li").eq(i).show()
          }
            return false;
          } else {
            pageNav.find("a").removeClass(tabPage.activeClass);
            iNum++;
            pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);
//          ini(iNum);
          }
          for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
            $(pageMain).find("li").eq(i).show()
          }
        });
        /*上一页*/
        pagePrev.click(function () {
          $(pageMain).find("li").hide();
          if (iNum == 0) {
            alert('当前是第一页');
            for (var i = 0; i < curNum; i++) {
              $(pageMain).find("li").eq(i).show()
            }
            return false;
          } else {
            pageNav.find("a").removeClass(tabPage.activeClass);
            iNum--;
            pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);
          }
          for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
            $(pageMain).find("li").eq(i).show()
          }
        }) 
    }
});

//上传图片
function F_Open_dialog(id) {
  document.getElementById(id).click();
}
function imgChange(e, imageid) {
  console.info(e.target.files[0]);//图片文件
  console.log(e.target.value);//这个也是文件的路径和上面的dom.value是一样的
  var div=document.getElementById('btn_img');
  var reader = new FileReader();
  reader.onload = (function (file) {
      return function (e) {
          console.info(this.result); //这个就是base64的数据了
          div.style.display='none';
          document.getElementById(imageid).src = this.result;   
      };
  })(e.target.files[0]);
  reader.readAsDataURL(e.target.files[0]);
}

 