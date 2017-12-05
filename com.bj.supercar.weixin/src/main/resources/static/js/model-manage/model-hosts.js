
String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find, 'g'), replace);
};
window.onload=function(){
    var id=getQueryString("id");
    if(isNotNull(id))
    {
        $.ajax({
            type: "get",
            dataType: "json",
            async: false,
            url: '/api/modelhosts/info?id='+id,
            success: function (data) {
                var manageModelVO=data.manageModelVO;
                var count=data.count;
                $("#modelName").html("模型名称:"+manageModelVO.name);
                $("#modelhostSize").html("当前共完成加载机器数量:"+count+"台");
                $("#modelhostHidensize").val(count);
                if(count!=0)
                {
                    $(document).ready(function() {
                        $('#modelhostlist-table').DataTable({
                            "responsive": true,
                            "destroy":true,
                            "ajax": '/api/modelhosts/list?id='+id,
                            "aaSorting": [[ 0, "desc" ]]
                        });
                    });
                }
                else {

                }
            }
        });
        //加载定时器
        window.setInterval("reload()",5000);
    }
    else {
        alert("参数不正确！")
    }



}

function reload(e) {
    var id=getQueryString("id");
    if(isNotNull(id))
    {
        $.ajax({
            type: "get",
            dataType: "json",
            async: false,
            url: '/api/modelhosts/info?id='+id,
            success: function (data) {
                var count=data.count;
                $("#modelhostSize").html("当前共完成加载机器数量:"+count+"台");
                var oldCount=$("#modelhostHidensize").val();
                if(count!=oldCount)
                {
                    //重新加载
                    $("#modelhostHidensize").val(count);
                    $(document).ready(function() {
                        $('#modelhostlist-table').DataTable({
                            "responsive": true,
                            "destroy":true,
                            "ajax": '/api/modelhosts/list?id='+id,
                            "aaSorting": [[ 0, "desc" ]]
                        });
                    });
                }
                else {

                }
            }
        });
    }

}