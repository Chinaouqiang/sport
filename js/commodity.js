$(function(){
    var api =' http://q8rwxwn4o.bkt.clouddn.com/';
    $.ajax({
        type: 'get',
        url:'http://116.62.56.216:18888/shop',
        dataType: "json",
        data: {
            shopid:'shopid'
        },
        success: function (data) {
            console.log(data)
            var shops = ''
            var data3 = data.data;
            $.each(data3, function(idx,val) {
              shops +=' <li>'+'<div class="shop-l">'+'<a href="record.html?id='+val.id+'&shopName='+val.shopName+'" id="'+val.id+'">'+'<img src="'+api+val.image +'" alt="">'+'</a>'+'</div>'+'<div class="shop-r">'+'<span class="span1">'+ val.shopName+'</span>'+'<span>'+ val.shopaddress+'</span>'+'</div>'+'</li>'
            });

            $('.shopulis').html(shops)
        },
        error: function(){

        }
    })
})