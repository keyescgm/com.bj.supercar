function showaddModel(e)
{
    $('#addModal').modal('show');
}
String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find, 'g'), replace);
};
window.onload=function(){
    //加载appkey列表信息
    $.ajax({
        type: "get",
        dataType: "json",
        async: false,
        url: '/api/appkeymanage/list',
        success: function (data) {
            var appkeyVOS=data.appkeyVOS;
            for(var i = 0;i < appkeyVOS.length; i++) {
                $("#modelAppkey").append("<option value='"+appkeyVOS[i].id+"'>"+appkeyVOS[i].name+"</option>");  //为Select追加一个Option(下拉项)
            }
        }
    });
}

function addItem(divId) {
    var modelfilesize=Number($("#modelfilesize").val())+1;

    var template = $("#add_item_template").html().replace('add_item_template_add_btn_template', divId).replaceAll("input-b1","input-b1_"+modelfilesize);
     $("#" + divId).append(template)
     $("#input-b1_"+modelfilesize).fileinput('reset');
    $("#modelfilesize").val(modelfilesize);
}
function removeItem(e) {
    var p = $(e.target).parent().parent().parent();
    $(e.target).parent().parent().remove()
    var modelfilesize=Number($("#modelfilesize").val())-1;
    $("#modelfilesize").val(modelfilesize);

}
var map={}

$(function () {
    $('table').on('click', 'input:checkbox', function(){
        var checkedbool=this.checked;
        var checkedvalue=$(this).attr("value");
        if(!checkedbool)
        {
            deleteMap(checkedvalue);
        }
        else {
            setMap(checkedvalue);
        }

    });
})

function setMap(id)
{
    //如果key也是动态的，则如下处理
    var key="checkId"+id;
    map[key]=id;
}
function deleteMap(id)
{
    delete map["checkId"+id];
}
function getListforMap()
{
    for(var i in map)
    {
        alert("map:"+map[i].title);
    }
}
function isHaving(id)
{
    for(var i in map)
    {
        if(id==map[i].id)
        {
            return true;
        }
    }
    return false;
}
function btnSubmitfun() {

    var booleanv=modelsubmitbefore();
    if(booleanv) {
        var modelinput=$("#modelinput").val();
        var modelIds=$("#modelIds").val()
        var filtInputId="";
        $.ajax({
            type: "POST",
            dataType: "json",
            async: false,
            url: '/api/model/inputIds?modelinput='+modelinput+'&modelIds='+modelIds,
            success: function (data) {
                 filtInputId=data.data;
                window.location.href = "modelmap.html?filtInputId="+filtInputId;
            }
        });

    } else {
        if(Object.getOwnPropertyNames(map).length==0)
        {
            alert("请选择模型")
        }
        else
        {
            alert("配置参数错误，请检查")
        }

    }
}



function modelsubmitbefore() {
    //注册表单验证
    $(validform());
    var validates=validform();
    if(validform().form()) {
        //通过表单验证，以下编写自己的代码
       // alert("success");
    } else {
        //校验不通过，什么都不用做，校验信息已经正常显示在表单上
        return false;
    }
    if(Object.getOwnPropertyNames(map).length==0)
    {
        return false;
    }
    var modelids="";
    for (var prop in map) {
        if (map.hasOwnProperty(prop)) {
            modelids=modelids+","+map[prop];
        }
    }
    $("#modelIds").val(modelids);
    return true;
}

//编写表单验证函数validform，在验证按钮注册按钮点击事件内调用验证函数对象
function validform(){

    /*关键在此增加了一个return，返回的是一个validate对象，这个对象有一个form方法，返回的是是否通过验证*/
    return $("#models_form").validate({
        rules:
            {
                modelinput:"required"

            },
        messages: {
            modelinput: "必须填写model input 信息"
        }
    });
}