/**
 * 判断是否null
 * @param data
 */
function isNotNull(data){
    return (data == "" || data == undefined || data == null||$.trim(data)=="") ? false : true;
}

String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find, 'g'), replace);
};

var genBasicConfEditor = null;
var genpareditor = null;
var genJobConfEditor = null;
var trainBasicConfEditor = null;
var trainConfEditor = null;
var trainParameterEditor = null;


$(function(){


    $("#add_job_wizard").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        onStepChanging: function (event, currentIndex, newIndex) {

            console.log(currentIndex);
            console.log(newIndex);

            if(newIndex > currentIndex) {
                var currentTLId = "tl_step" + (currentIndex + 1);
                $(".timeline-badge", "#" + currentTLId).removeClass("info");
                $(".timeline-badge", "#" + currentTLId).addClass("success");

                $(".timeline-badge>.glyphicon", "#" + currentTLId).removeClass("glyphicon-arrow-down");
                $(".timeline-badge>.glyphicon", "#" + currentTLId).addClass("glyphicon-ok");

                var nextTlId = "tl_step" + (newIndex + 1);

                if(newIndex < 3) {
                    $(".timeline-badge", "#" + nextTlId).addClass("info");
                    $(".timeline-badge>.glyphicon", "#" + nextTlId).addClass(
                        "glyphicon-arrow-down");
                } else {
                    $(".timeline-badge", "#" + nextTlId).addClass("success");
                    $(".timeline-badge>.glyphicon", "#" + nextTlId).addClass(
                        "glyphicon-ok");
                }
                $("#"+ nextTlId).fadeIn();
            }

            return true;
        },
        onFinished: function (event, currentIndex)
        {

            if(submitbefore()) {
                $.post( "/api/job/new", $('#add_job_form').serialize(), function(data) {
                        console.log(data)
                   // window.location.href='list.html';
                    window.location.href=data.data;
                    },
                    'json' // I expect a JSON response
                );
            } else {
                alert("配置参数错误，请检查")
            }
        }
    });

    $(".scheduler-check input[type=radio]").on('change', function() {
        var typo = $(this).val();
        console.log("typo", typo);

        if(typo == "0") {
            $(".crontab-row").fadeOut();
        }
        if(typo == "1") {
            $(".crontab-row").fadeIn();
        }
    });

    $("#genType").change(function(){
        var current = $(this).val();
        $(".gen-type").hide();
        console.log(current);
        $("#gen-type-" + current).show();
    });

    $("#trainType").change(function(){
        var current = $(this).val();
        $(".train-type").hide();
        console.log(current);
        $("#train-type-" + current).show();
    });

    $(".expand").on( "click", function() {
        // $(this).next().slideToggle(200);
        $expand = $(this).find(">:first-child");

        if($expand.text() == "+") {
            $expand.text("-");
        } else {
            $expand.text("+");
        }
    });
    //genBasicConf
    genBasicConfEditor = ace.edit("genBasicConfEditor");
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
    //genParameter
    genpareditor = ace.edit("genpareditor");
    genpareditor.setTheme("ace/theme/xcode");
    genpareditor.getSession().setMode("ace/mode/json");
    var genparval = genpareditor.session.getValue();
    if(!isNotNull(genparval))
    {
        genparval="{}";
    }
    var genparo = JSON.parse(genparval);// may throw if json is malformed
    genparval = JSON.stringify(genparo, null, 4); // 4 is the indent size
    genpareditor.session.setValue(genparval);
    //genJobConf
    genJobConfEditor = ace.edit("genJobConfEditor");
    genJobConfEditor.setTheme("ace/theme/xcode");
    genJobConfEditor.getSession().setMode("ace/mode/json");
    var genJobConfval = genJobConfEditor.session.getValue();
    if(!isNotNull(genJobConfval))
    {
        genJobConfval="{}";
    }
    var genJobConfo = JSON.parse(genJobConfval);// may throw if json is malformed
    genJobConfval = JSON.stringify(genJobConfo, null, 4); // 4 is the indent size
    genJobConfEditor.session.setValue(genJobConfval);
    //trainBasicConf
    trainBasicConfEditor = ace.edit("trainBasicConfEditor");
    trainBasicConfEditor.setTheme("ace/theme/xcode");
    trainBasicConfEditor.getSession().setMode("ace/mode/json");
    var trainBasicConfval = trainBasicConfEditor.session.getValue();
    if(!isNotNull(trainBasicConfval))
    {
        trainBasicConfval="{}";
    }
    var trainBasicConfo = JSON.parse(trainBasicConfval);// may throw if json is malformed
    trainBasicConfval = JSON.stringify(trainBasicConfo, null, 4); // 4 is the indent size
    trainBasicConfEditor.session.setValue(trainBasicConfval);
    //trainConfEditor
    trainConfEditor = ace.edit("trainConfEditor");
    trainConfEditor.setTheme("ace/theme/xcode");
    trainConfEditor.getSession().setMode("ace/mode/json");
    var trainConfval = trainConfEditor.session.getValue();
    if(!isNotNull(trainConfval))
    {
        trainConfval="{}";
    }
    var trainConfo = JSON.parse(trainConfval);// may throw if json is malformed
    trainConfval = JSON.stringify(trainConfo, null, 4); // 4 is the indent size
    trainConfEditor.session.setValue(trainConfval);
    //trainParameterEditor
    trainParameterEditor = ace.edit("trainParameterEditor");
    trainParameterEditor.setTheme("ace/theme/xcode");
    trainParameterEditor.getSession().setMode("ace/mode/json");
    var trainParameterval = trainParameterEditor.session.getValue();
    if(!isNotNull(trainParameterval))
    {
        trainParameterval="{}";
    }
    var trainParametero = JSON.parse(trainParameterval);// may throw if json is malformed
    trainParameterval = JSON.stringify(trainParametero, null, 4); // 4 is the indent size
    trainParameterEditor.session.setValue(trainParameterval);
});

function submitbefore() {
    //注册表单验证
    $(validform());
    var validates=validform();
    if(validform().form()) {
        //通过表单验证，以下编写自己的代码
        //alert("success");
    } else {
        //校验不通过，什么都不用做，校验信息已经正常显示在表单上
        return false;
    }

    var genparval = genpareditor.session.getValue();
    if(isNotNull(genparval)&&genparval!="{}")
    {
        try{
            var genparo = JSON.parse(genparval);// may throw if json is malformed
            genparval = JSON.stringify(genparo, null, 4); // 4 is the indent size
            genpareditor.session.setValue(genparval);
            $("#genJobParameter").attr("value",genparval);
        }catch (error)
        {

        }

    }
    else {
        $("#genJobParameter").attr("value","{}");
    }

    // alert( $("#genJobParameter").val());

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

    //genJobConf
    var genJobConfEditorval = genJobConfEditor.session.getValue();
    if(isNotNull(genJobConfEditorval)&&genJobConfEditorval!="{}")
    {
        try {
            var genJobConfEditoro = JSON.parse(genJobConfEditorval);// may throw if json is malformed
            genJobConfEditorval = JSON.stringify(genJobConfEditoro, null, 4);// 4 is the indent size
            $("#genJobConf").attr("value",genJobConfEditorval);

        }catch (error)
        {

        }

    }
    else {
        $("#genJobConf").attr("value","{}");
    }

    // alert( $("#genJobConf").val());

    //trainBasicConf
    var trainBasicConfval = trainBasicConfEditor.session.getValue();
    if(isNotNull(trainBasicConfval)&&trainBasicConfval!="{}")
    {
        try {
            var trainBasicConfo = JSON.parse(trainBasicConfval);// may throw if json is malformed
            trainBasicConfval = JSON.stringify(trainBasicConfo, null, 4); // 4 is the indent size
            $("#trainBasicConf").attr("value",trainBasicConfval);

        }catch(error)
        {

        }

    }
    else {
        $("#trainBasicConf").attr("value","{}");
    }

    //alert($("#trainBasicConf").val());
    //trainConfEditor
    var trainConfval = trainConfEditor.session.getValue();
    if(isNotNull(trainConfval)&&trainConfval!="{}")
    {
        try {
            var trainConfo = JSON.parse(trainConfval);// may throw if json is malformed
            trainConfval = JSON.stringify(trainConfo, null, 4); // 4 is the indent size
            $("#trainConf").attr("value",trainConfval);

        }catch(error)
        {

        }

    }
    else {
        $("#trainConf").attr("value","{}");
    }

    //trainParameterEditor
    var trainParameterval = trainParameterEditor.session.getValue();
    if(isNotNull(trainParameterval)&&trainParameterval!="{}")
    {
        try{
            var trainParametero = JSON.parse(trainParameterval);// may throw if json is malformed
            trainParameterval = JSON.stringify(trainParametero, null, 4); // 4 is the indent size
            $("#trainParameter").attr("value",trainParameterval);
        }catch(error)
        {

        }

    }
    else {
        $("#trainParameter").attr("value","{}");
    }
    return true;
}

//编写表单验证函数validform，在验证按钮注册按钮点击事件内调用验证函数对象
function validform(){

    /*关键在此增加了一个return，返回的是一个validate对象，这个对象有一个form方法，返回的是是否通过验证*/
    return $("#add_job_form").validate({
        rules:
            {
                jobName:"required",
                jobOwner:{
                    required:true
                },
                genType:"required",
                trainType:"required"

            },
        messages: {
            jobName: "必须填写job名称",
            jobOwner:{
                required:"必须添加job拥有者"
            },
            genType:"请选择数据生成类型",
            trainType:"请选择训练类型"
        }
});
}

function dmlcCommandLine(jobName,basicConf, jobParameter) {
    var command = '${DMLC_HOME}/tracker/dmlc-submit --cluster=yarn ${basicConf} '
        + '${DMLC_HOME}/xgboost/xgboost  ${GENERATE_CONF_PATH}/${jobName}.conf ${jobParameter}';

    return command.replace("${basicConf}", basicConf)
        .replace("${jobName}", jobName)
        .replace("${jobParameter}", jobParameter)
}

function trainType1CommandLine() {
    var trainModelName = $("#trainModelName").val();

    var basicConfJson = JSON.parse(trainBasicConfEditor.session.getValue());
    var basicConf = "";
    for(var key in basicConfJson) {
        basicConf += " --"+key + "=" + basicConfJson[key];
    }

    var  trainParameterJson = JSON.parse(trainParameterEditor.session.getValue());
    var trainParameter = "";
    for(var key in trainParameterJson) {
        trainParameter += " "+key + "=" + trainParameterJson[key];
    }

    var command = dmlcCommandLine(trainModelName, basicConf, trainParameter);
    return command;
}


function sparkCommandLine(mainClass, basicConf, jobConf, jarPath, jobParameter) {
    var command = '${SPARK_HOME}/bin/spark --class '
        + '{mainClass} {basicConf} {jobConf} {jarPath} {jobParameter}';

    return command.replace("{mainClass}", mainClass)
        .replace("{basicConf}", basicConf).replace("{jobConf}", jobConf)
        .replace("{jarPath}", jarPath).replace("{jobParameter}", jobParameter);
}


function genType1CommandLine() {
    var mainClass = $("#genMainClass", "#gen-type-1").val();
    var pomJarPath =  $($("#genJarPath", "#gen-type-1").val());
    var jarPath = "${JAR_BASE}/"+ $("artifactId", pomJarPath).html()+"-"+$("version", pomJarPath).html() + ".jar";

    var basicConfJson = JSON.parse(genBasicConfEditor.session.getValue());
    var basicConf = "";
    for(var key in basicConfJson) {
        basicConf += " --"+key + "=" + basicConfJson[key];
    }

    var jobConfJson = JSON.parse(genJobConfEditor.session.getValue());
    var jobConf = "";
    for(var key in jobConfJson) {
        jobConf += " --conf "+key + "=" + jobConfJson[key];
    }

    var jobParameterJson = JSON.parse(genpareditor.session.getValue());
    var jobParameter = "";
    for(var key in jobParameterJson) {
        jobParameter += " "+key + "=" + jobParameterJson[key];
    }

    var command = sparkCommandLine(mainClass, basicConf, jobConf, jarPath, jobParameter);
    return command;
}