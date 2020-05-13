$(function(){
    var api =' http://q8rwxwn4o.bkt.clouddn.com/';
    var birthday = new Date()
    var sex = $('#xb').text()

        $.ajax({
            type: 'get',
            url:'http://116.62.56.216:18888/user',
            dataType: "json",
            data: {
                birthday:birthday,
                sex:sex
            },
            success: function (data) {
                console.log(data)
                var box1 = '';
                var box2 = '<ul class="tribute-tab">'
                var box3 = ''
                var data1 = data.data;
                box1 += '<ul><li>'+'<span>头像</span>'+'<a href="javascript:">'+'<img src=" '+api+data1[0].logo+'">'+'</a>'+'</li>'+'<li>'+'<span>昵称</span>'+'<input type="text" class="its" value="'+data1[0].nickName+'">'+'</li>'+'<li>'+'<span>用户名</span>'+'<input type="text" class="it" id="uId" value="'+data1[0].username+'">'+'</li>'+'<li>'+'<span>性别</span>'+'<input type="text" id="xb" value="'+data1[0].sex+'"></li>'+'<li>'+'<span>手机号</span>'+'<input type="text" class="it" value= "'+data1[0].phone+'">'+'</li>'+'<li><span> 出生年月</span>'+'<span class="it">'+ +'</span>'+data1[0].birthday	+'</li>'+'<li> <span>地址:</span>'+'<span>'+ data1[0].city+'</span></li></ul>'

                // $.each(data1, function(idx,val) {
                   box2 += '<li class="active">积分:'+'<span>'+ data1[0].integral+'</span>'+'</li>'+'<li>'+'<a href="erwm.html?'+data1[0].ewm+'">二维码</a>'+'</li>'
                   box3 += '<a href="javascript:">'+'<img src="'+api+data1[0].logo+'" alt="">'+'</a>'
                // });
                $("#recode").attr("href","record.html?id="+data1[0].username+"");
                $("#drop").attr("href","drop.html?id="+data1[0].username+"");
               

                $('.me').html(box1)
                $('.tribute').html(box2 + '</ul>')
                $('.an2 .grid-demo').html(box3);
            },
            error: function(){

            }
        })
        $("#box1 a").click(function(){
            $('.personage').addClass('dn')
            $('.material').removeClass('dn')
        })
        $("#box2 a").click(function(){
            $('.personage').addClass('dn')
            $('.record').removeClass('dn')
        })
        $("#box3 a").click(function(){
            $('.personage').addClass('dn')
            $('.service').removeClass('dn')
        })
        $("#box4 a").click(function(){
            $('.personage').addClass('dn')
            $('.evaluate').removeClass('dn')
        })
})