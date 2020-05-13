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
alert(urlMsg.id);    
              
    $.ajax({
        type: 'GET',
        url:'http://116.62.56.216:18888/order/userId/(id)',
        dataType: "json",
            data:{"id":urlMsg.id},
        
        success: function (data) {
            console.log(data)
            
        },
        error: function(){

        }
        
    })
           

  