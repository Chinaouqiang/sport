$(function(){
    $('#ipt').on('click',function(){
        var phone = ""+$('.iphone input').val()      
        if(!(/^1[3456789]\d{9}$/.test(phone))){ 
            alert("手机号码有误，请重填");  
            return false; 
        }  
           console.log(phone)
            $.ajax({
                type: 'GET',
                url:'http://116.62.56.216:18888/validateCode/send6Login',
                dataType: "json",
                data: {
                    phone:phone,
                },
                success: function (data) {
                    console.log(data)
                    if (data.code === 20000){
                        console.log(data)
                    }

                },
                error: function(){
    
                }
            })
    })

    // 登录手机验证码
    $('#btns').click(function(){
        var btn = $('#int').val();
        var phone = ""+$('.iphone input').val()
        $.ajax({
            type: 'post',
            url:'http://116.62.56.216:18888/user/phoneLogin',
            dataType: "json",
            data: {
                phone:phone,
                code:btn,
            },
            success: function (code) {
                console.log(code)
              
                if (code.code  != 0) return;
                $('.loading-iphone').addClass('dn');
                $('.personage').removeClass('dn');
            
            },
            error: function(){

            }
        })

    })
})