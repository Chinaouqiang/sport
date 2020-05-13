
           function parseUrl(url){
                        if(url.indexOf("?") == -1) {
                            return {};
                        }
                        var query = url.split("?")[1];
                        var queryArr = query.split("&");
                        var obj = {};
                        queryArr.forEach(function(item){
                            var key = item.split("=")[0];
                            var value = item.split("=")[1];
                            obj[key] = decodeURIComponent(value);
                        });
                        return obj;
                    }
                    
                           
                    
            var urlMsg = parseUrl(window.location.search);
$(function(){
    $.ajax({
        type: 'get',
        url:'http://116.62.56.216:18888/goods-id',
        dataType: "json",
        data:{
            id:'id'
        },
       
        success: function (result) {
            // console.log(data)
            // var num = '<ul class="listing">';
            // var data3 = data.data;
            //     num +='<li class="active" id='+ data3[i].id+'>'+'<a href="javascript:;">'+data3[i].name+'</a></li>';
                
            // $('.nav-swiper').html(num)    
            for(var i=0;i<=result.data.length;i++){
                $(".nav-swiper").append('<li class="active">'+'<a  id='+ result.data[i].id+'>'+result.data[i].name+'</a></li>');
            }
          
        },
        error: function(){

        }
     
    })

    var api =' http://q8rwxwn4o.bkt.clouddn.com/';
    // $('.nav-swiper li').click(function () {
    

        $.ajax({
            type: 'get',
            url:'http://116.62.56.216:18888/goods',
            dataType: "json",
            data:{
                goodsId:'id',
                // id:id
                
            },
        
            success: function (result) {
                for(var i=0;i<=result.data.length;i++){
                    $(".tab").append('<div class="dv"  style="width: 120px; height: 200px; float: left;margin-right: 10px;"><a class="a11" href="wares.html?id='+ result.data[i].id+';" style="display: block; width: 120px; height: 150px;"><div style="width: 120px; height: 150px;"><img src="'+api+result.data[i].image +'" style="display: block; width: 120px; height: 150px;" alt=""></div><div><p style="text-align: center;">'+result.data[i].name +'</p><span style="text-align: center; display:block">'+result.data[i].integral+'</span></div></a></div>');
                    // var index = $(this).index();
                    // $('.tab>li').eq(index).fadeIn(200).siblings().fadeOut(200);
                    // $(this).addClass('active').siblings().removeClass('active');
                   
                }  
            
            },
            error: function(){

            }
        
        })

        // $('.a11').click(function(){
        //     var id=$(this).attr("id") 
        //     window.location.href="wares.html?id="+id
        // })
        
    // })
})
// $(function(){
 

//       // 商品
//       $.ajax({
//         type: 'get',
//         url:'http://116.62.56.216:18888/goods',
//         dataType: "json",
//         data:{
//             id:'id'
            
//         },
       
//         success: function (data) {
//             var str = '<ul class="listing">';
//             var data = data.data;
//             $.each(data, function(idx,val) {
//                 str +='<li>'+'<a href="wares.html?bookId='+val.id+'">'+'<div>'+'<img src="' + api + val.image +'" alt="">'+'</div>'+'<div>'+'<p>'+val.name +'</p>'+'<span>'+ val.integral +'</span>'+'</div>'+'</a>'+'</li>';
                
//                });
//             $('.commodity-listing').html(str + '</ul>')    
          
//         },
//         error: function(){

//         }
     
//     })
    

    
    
//     // 商品详情页
//     var api =' http://q8rwxwn4o.bkt.clouddn.com/';
//     var id = getQueryString('bookId');

    // $.ajax({
    //     type:'get',
    //     url:'http://116.62.56.216:18888/goods',
    //     data:{
    //         // id:getId,
            
    //     },
    //     dataType:'json',
    //     success:function(data,status){

    //         var data = data.data;
       
        //  $.each(data, function(idx,val) {
        
        //   //根据id获取详情数据
        //   if(id == val.id){
        //    var  str2 =  '';
        //    var img = ''
        //    str2 += '<li>'+'<p>'+'<span>'+val.name+'</span>'+'<span>剩余:'+val.stock+'</span>'+'</p>'+'<p>'+'<span>需要积分</span>'+'<span>'+val.integral+'</span>'+'</p>'+'<p>兑换详情' +'<br>' + val.details+'</p>'+'</li>';
        //    console.log('index:'+idx);
        //    img += '<div carousel-item>'+'<div style="display:block">'+'<a href="javascript:" class="u4">'+'<img src="' + api + val.image +'" alt="">'+'</a>'+'</div>'+'</div>'
        //    $('#coin').click(function(){
        //     var id=$(this).attr("id") 
        //     window.location.href="coin.html?id="+id
        //     console.log(id)
        // })
        //   }
        //   $('.exchange ul').html(str2);
        //   $('#test1').html(img);
        //  });
        // }
        // })


       
// })