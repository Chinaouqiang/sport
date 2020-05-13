
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
    var api =' http://q8rwxwn4o.bkt.clouddn.com/';
    $.ajax({
        type:'get',
        url:'http://116.62.56.216:18888/goods',
        data:{
            id: urlMsg,
            
        },
        dataType:'json',
        success:function(data){

            var data = data.data;
            var img = ''
            var str2 = ''
            img += '<div carousel-item>'+'<div style="display:block">'+'<a href="javascript:" class="u4">'+'<img src="' + api + data[0].image +'" alt="">'+'</a>'+'</div>'+'</div>'
            
            str2 += '<li>'+'<p>'+'<span>'+data[0].name+'</span>'+'<span>剩余:'+data[0].stock+'</span>'+'</p>'+'<p>'+'<span>需要积分</span>'+'<span>'+data[0].integral+'</span>'+'</p>'+'<p>兑换详情' +'<br>' + data[0].details+'</p>'+'</li>';

            $('#test1').html(img)
            $('.exchange ul').html(str2);
       
        }

    })
})