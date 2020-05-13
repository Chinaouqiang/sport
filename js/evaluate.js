
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


$('#bt1').click(function(){
    var ascontent = $('#tet').val()

    // var assess = $('#p1')

    $.ajax({
        type: 'POST',
        url:'http://ouqiang.free.qydev.com/record/updateRecord',
        dataType: "json",
        data:{
            "rid":urlMsg.id,
            ascontent:ascontent,
            // assess:assess
        },
       
        success: function (data) {
            console.log(data)
          
          

            $.each(data, function(idx,val) {
                var data = data.data
                var dt = ''
                dt += '<p id="p1">'+ val.assess+'</p>'
            });
            $('.d_d').html(dt)
        },
        error: function(){

        }
     
    })
})

layui.carousel.render({
 
    elem: '#test1'
    ,width: '420px'
    ,height: '220px'
    ,interval: 3000
  });


 //渲染
 layui.rate.render({
   elem: '#test3'  //绑定元素
   ,theme: '#FFB800;'
 });

layui.use('upload', function(){
var upload = layui.upload;


upload.render({
elem: '#test5'
,url: 'http://116.62.56.216:18888/img/upload' //改成您自己的上传接口
,accept: 'audio' //音频
,method: 'post'
,done: function(res){
  layer.msg('上传成功');
  console.log(res)
}
});

var urls = 'http://q8rwxwn4o.bkt.clouddn.com/'
upload.render({

 elem: '#test2'

  ,method: 'post'

  ,value: 2

  ,number:3

  ,accept: 'images'   //指定允许上传的文件类型 

  ,url: 'http://116.62.56.216:18888/img/upload' //改成您自己的上传接口 

  ,multiple: true //是否允许多文件上传 
 ,before: function(obj){
   //预读本地文件示例，不支持ie8
   obj.preview(function(index, file, result){
   });
 }
 ,done: function(res){
   //上传完毕
   $('#demo2').append('<img src="'+ urls + res.data+'" class="layui-upload-img">') 
 }
});
});
   

