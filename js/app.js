$(function () {
    var that = null;
    function App() {
        that = this;
        // 获取 屏幕宽高
        // this.winW = document.body.clientWidth;
        // this.winH = document.body.clientHeight;
        that.imgLoading = {
            ImagesSrc: [

            ], //放置需要加载的图片地址
            p: 0, //进度
            Srcs: null,
            imgs: {},
            court: 0
        }
        this.init();
    }

    App.prototype.init = function () {
        this.screenToggle();
        this.event();
        this.main();
        this.LoadingImages();
        this.scrollAuto();
        this.imgs();
        this.chart();
    }


    /*================================================ 项目中所有的ajax事件 ========================================================*/
    App.prototype.event = function () {
        // 手机验证码登录
   

      
    }

    
    /*================================================ 项目中个人中心的ajax事件 ========================================================*/
    App.prototype.imgs = function () {
        
    }

     /*================================================ 项目预约的ajax事件 ========================================================*/
     App.prototype.chart = function () {
  


       

        // $.ajax({
        //     type: 'get',
        //     url:'http://116.62.56.216:18888/shop',
        //     dataType: "json",
        //     data: {
             
        //     },
        //     success: function (data) {
        //         console.log(data)
        //         var shops = ''
        //         var data3 = data.data;
        //         $.each(data3, function(idx,val) {
        //           shops +=' <li>'+'<div class="shop-l">'+'<a href="'+ val.id+'">'+'<img src="'+api+val.image +'" alt="">'+'</a>'+'</div>'+'<div class="shop-r">'+'<span>'+ val.shopName+'</span>'+'<span>'+ val.shopaddress+'</span>'+'</div>'+'</li>'
        //         });

        //         $('.shopulis').html(shops)
    
              
        //     },
        //     error: function(){
    
        //     }
        // })  
        
   
       

    }

    /*================================================ 项目中所有的事件 ========================================================*/
    App.prototype.main = function (){
        // 记录下拉菜单

        // 个人中心页
        // 跳转
    


        //切换
     


     


        
    }

    /*================================================ 加载图片方法 ============================================================*/
    App.prototype.LoadingImages = function () {

        var Srcs = that.imgLoading.ImagesSrc;
        var len = Srcs.length;
        var id;
        //加载图片方法
        for (var i = 0; i < len; i++) {

            id = Srcs[i].id ? Srcs[i].id : i;

            that.imgLoading.imgs[id] = new Image();
            that.imgLoading.imgs[id].onload = function () {
                that.imgLoading.p = 100 * ((that.imgLoading.court + 1) / len);
                that.imgLoading.p = parseInt(that.imgLoading.p);

                progress(that.imgLoading.p);
                if (that.imgLoading.court >= len - 1)
                    complete(that.imgs);
                that.imgLoading.court++;
            };

            if (Srcs[i].id) {
                that.imgLoading.imgs[id].src = Srcs[i].src;
            } else {
                that.imgLoading.imgs[id].src = Srcs[i];
            }
        }

    }
    /*================================================ JS横竖屏幕 ============================================================*/
    App.prototype.screenToggle = function () {
        if (that.winWidth > that.winHeight) { //横屏

        } else { //竖屏

        }

        
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
            //shu
            if (window.orientation === 180 || window.orientation === 0) {

            }
            
            if (window.orientation === 90 || window.orientation === -90) {

            }
        }, false);

    }
    /*================================================ 禁止手机上下拉动 ========================================================*/
    App.prototype.scrollAuto = function () {
        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
            return false;
        }, {
            passive: false
        });
    }


    /*使用方法 :  getQueryString(你要取得参数名称)  返回值 : 得到的参数值*/

})
