/**
 * 判断是否null
 * @param data
 */
function isNotNull(data){
    return (data == "" || data == undefined || data == null||$.trim(data)=="") ? false : true;
}
var genBasicConfEditor = null;
$(function(){
    //genBasicConf
    genBasicConfEditor = ace.edit("genBasicConfEditor");
    $("div .ace_print-margin").css("left","100%");
    genBasicConfEditor.setTheme("ace/theme/xcode");
    genBasicConfEditor.getSession().setMode("ace/mode/json");
    var genBasicConfval = genBasicConfEditor.session.getValue();
    if(!isNotNull(genBasicConfval))
    {
        genBasicConfval="{}";
    }
    var genBasicConfo = JSON.parse(genBasicConfval);// may throw if json is malformed
    genBasicConfval = JSON.stringify(genBasicConfo, null, 4); // 4 is the indent size
    genBasicConfEditor.session.setValue(genBasicConfval);
});

function submitbefore() {
    //genBasicConf
    var genBasicConfEditorval = genBasicConfEditor.session.getValue();
    if(isNotNull(genBasicConfEditorval)&&genBasicConfEditorval!="{}")
    {
        try {
            var genBasicConfEditoro = JSON.parse(genBasicConfEditorval);// may throw if json is malformed
            genBasicConfEditorval = JSON.stringify(genBasicConfEditoro, null, 4);// 4 is the indent size
            $("#genBasicConf").attr("value",genBasicConfEditorval);
        }catch (error)
        {

        }

    }
    else {
        $("#genBasicConf").attr("value","{}");
    }
    return true;
}

//编写表单验证函数validform，在验证按钮注册按钮点击事件内调用验证函数对象
function validform(){

    /*关键在此增加了一个return，返回的是一个validate对象，这个对象有一个form方法，返回的是是否通过验证*/
    return $("#modelmap_form").validate({
        rules:
            {
                BasicConf:"required"
            },
        messages: {
            BasicConf: "必须填写job名称"
        }
});
}