
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
  
    

        $.ajax({
            type: 'POST',
            url:'http://ouqiang.free.qydev.com/servertpye/getListServertpye',
            dataType: "json",
           
            success: function (result) {
              console.log(result)
            //   var data = data.data
            for(var i=0;i<=result.data.length;i++){
                $("#sil").append("<li ><a><div class='a1' id='"+result.data[i].id+"'>"+result.data[i].serverName+"</div></a></li>");
                // $('.sw').addClass('dn').siblings().removeClass('dn')
            }
                
            },
            error: function(){
    
            }
            
         
        })
       
        $("body").on("click",".a1",function(){
            var typeid=$(this).attr("id")
          
            // 
            $.ajax({
                 type: 'POST',
                 url:'http://ouqiang.free.qydev.com/record/findRe',
                 data:{"type":typeid,"userid":urlMsg.id},
                 success: function (result) {
                    $("#datamessage").empty();
                     for(var i=0;i<=result.data.length;i++){
                         $("#datamessage").append("<div class='order' id="+result.data[i].rid+"><p><span>"+result.data[i].createdTime+"</p><p><span>"+result.data[i].shop.shopName+":</span><span>"+result.data[i].rcontent+"</span></p></div>");
                     }

                     
                 },
                 error: function(){
     
                 }
                
            })

       
         
          
    })

     
    $("body").on("click",".order",function(){
        var typeid=$(this).attr("id") 
        window.location.href="evaluate.html?id="+typeid
    })
    
    $.ajax({
        type: 'POST',
        url:'http://ouqiang.free.qydev.com/record/findRe',
        data:{"userid":urlMsg.id},
        success: function (result) {
           $("#datamessage").empty();
            for(var i=0;i<=result.data.length;i++){
                $("#datamessage").append("<div class='order' id="+result.data[i].rid+"><p><span>"+result.data[i].createdTime+"</p><p><span>"+result.data[i].shop.shopName+":</span><span>"+result.data[i].rcontent+"</span></p></div>");
            }
        },
        
        error: function(){

        }
    })


     
    

