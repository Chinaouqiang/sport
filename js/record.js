
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


console.log();

$(function(){

    
 
    let [id,shopName,parID = 0] = [null];//两个路径变量
    //获取路径方法
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
        var paramName = window.location.search.substr(1).match(reg); 
        if(paramName != null){
            return decodeURIComponent(paramName[2]); //decodeURIComponent 处理中文乱码
        }
        return null;
    }
    if(getUrlParam('id') &&  getUrlParam('shopName')){
        id = getUrlParam('id');
        shopName = getUrlParam('shopName');
        console.log(id,shopName)
        // console.log(shopName)
        $('#a1').text(shopName)
    }




    // initAjax().then(()=>{
        // console.log()
        $('.press').on('click','button',function(){
            parID = $(this).attr('id');
        })
    // })

    $('#box').click(function(){
        var realname = $('#one').val()
        var phe = $('#two').val()
        var sex = $('#three').val()
        var runmileage = $('option').val()
        var subscribetime = $('#fives').val()

        var userid =urlMsg.id;

        // var aaa = $("#uId").val()

        // console.log($("#uId").val())

        
     

        var options = $("#fours option:selected");　　　　//获取选中项

        var fours = options.val();　　　
        
        if(!realname) {
            alert('请输入姓名');
            return
        }else if(!phe){
            alert('请输入电话号码');
            return
        }else if(!sex){
            alert('请输入性别');
            return
        }else if(!runmileage){
            alert('请输入行驶里程');
            return
        }else if(!subscribetime){
            alert('请输入日期');
            return
        }

        if(!(/^1[3456789]\d{9}$/.test(!phe))){ 
            alert("手机号码有误，请重填");  
            return false; 
        }
       
        $.ajax({
            type: 'POST',
            url:'http://ouqiang.free.qydev.com/subscribe/insertSubscribe',


           
            data: {
                realname:realname,
                phone:phe,
                sex,sex,
                runmileage:runmileage,
                subscribetime:Date(),
                shopid:'shopid',
                type:parID,
                userid:userid,
              
            },
            
            success: function (data) {
                console.log(data)
                if(data.code === 20000){
                   
                }
          
              

           
            },
            error: function(){

            }
        })

    })

    $('.bt').click(function(){

    })

        $.ajax({
            type: 'POST',
            url:'http://ouqiang.free.qydev.com/servertpye/getListServertpye',
            dataType: "json",
            data:{
                
            },
           
            success: function (data) {
                console.log(data)
                var str = '';
                var data = data.data;
                $.each(data, function(idx,val) {
                    str +='<button  type="button" id="'+ val.id+'" class="layui-btn layui-btn-xs aniu1">'+val.serverName+'</button>';
                });
                $('.press').html(str)
                
            },
            error: function(){
    
            }
         
        })
    // }
})

