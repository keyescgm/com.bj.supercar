
//<![CDATA[
window.onload=function(){
    var jobid=getQueryString("jobid");
    var jsonData; // 全局变量
    $.ajax({
        type: "get",
        dataType: "json",
        async: false,
        url: '/api/job/detail?jobid='+jobid,
        success: function (data) {
            var jobEntity=data.data.jobEntity;
            var modelEntity=data.data.modelEntity;
            createTimeLine(data.stageInfo, jobid);
            if(jobEntity!=undefined)
            {
                $("#jobId").attr("value",jobEntity.id);
                $("#jobName").attr("value",jobEntity.jobName);
                $("#jobOwner").attr("value",jobEntity.owner);
                $("#jobspan").attr("value",jobEntity.jobSpan);
                if(0==jobEntity.jobSchedule)
                {
                    $("input[name='optionsRadiosInline'][value=0]").attr("checked",true);
                }
                else {
                    $("input[name='optionsRadiosInline'][value=1]").attr("checked",true);
                    $(".crontab-row").show();
                    $("#jobScheduleCron").attr("value",jobEntity.jobScheduleCron);
                }
                //训练数据填充
               // $("#genType").val(jobEntity.genType);
                $("#genType").find('option[value='+jobEntity.genType+']').attr("selected",true);
                //将列表展开
                var current = $("#genType").val();
                $(".gen-type").hide();
                $("#gen-type-" + current).show();
                // $("#genLocalfeatureath").attr("value",jobEntity.genLocalfeaturePath);
                // $("#genHdoopfeatureath").attr("value",jobEntity.genHdfsfeaturePath);
                // $("#genDataRoot").attr("value",jobEntity.genDataRoot);
                // $("#geninputrain").attr("value",jobEntity.genInputTrain);
                // $("#genInputTest").attr("value",jobEntity.genInputTest);
                // $("#gentrainoutputPath").attr("value",jobEntity.genTrainOutputPath);
                $("#genMainClass").attr("value",jobEntity.genMainclass);
                $("#genJarPath").attr("value",jobEntity.genJarPath);
                $("#genBasicConfEditor").html(jobEntity.genBasicConf);
                if(isNotNull(jobEntity.genBasicConf))
                {
                    $.each(JSON.parse(jobEntity.genBasicConf),function(key,value) {
                        var divId='genBasicConfContainer';
                        var template = $("#add_item_template").html().replace('add_item_template_add_btn_template', divId).replace('keyvalue',key).replace('valvalue',value);
                        $("#" + divId).append(template)

                    });
                }

                $("#genJobConfEditor").html(jobEntity.genJobConf);
                if(isNotNull(jobEntity.genJobConf))
                {
                    $.each(JSON.parse(jobEntity.genJobConf),function(key,value) {
                        var divId='genJobConfContainer';
                        var template = $("#add_item_template").html().replace('add_item_template_add_btn_template', divId).replace('keyvalue',key).replace('valvalue',value);
                        $("#" + divId).append(template)

                    });
                }

                $("#genpareditor").html(jobEntity.genJobParameter);
                if(isNotNull(jobEntity.genJobParameter))
                {
                    $.each(JSON.parse(jobEntity.genJobParameter),function(key,value) {
                        var divId='genparContainer';
                        var template = $("#add_item_template").html().replace('add_item_template_add_btn_template', divId).replace('keyvalue',key).replace('valvalue',value);
                        $("#" + divId).append(template)

                    });
                }

                //训练job信息
                // $("#trainType").val(jobEntity.trainType);
                $("#trainType").find('option[value='+jobEntity.trainType+']').attr("selected",true);
                var currenttr = $("#trainType").val();
                $(".train-type").hide();
                $("#train-type-" + currenttr).show();
                if(modelEntity!=undefined)
                {
                    $("#trainModelName").attr("value",modelEntity.modelName);
                    $("#trainModelOut").attr("value",modelEntity.modelOut);
                }

                // $("#trainDataPath").attr("value",jobEntity.trainDataPath);
                // $("#testDataPath").attr("value",jobEntity.testDataPath);
                // $("#trainFeatureFile").attr("value",jobEntity.trainFeatureFile);
                $("#trainBasicConfEditor").html(jobEntity.trainBasicConf);
                if(isNotNull(jobEntity.trainBasicConf))
                {
                    $.each(JSON.parse(jobEntity.trainBasicConf),function(key,value) {
                        var divId='trainBasicContainer';
                        var template = $("#add_item_template").html().replace('add_item_template_add_btn_template', divId).replace('keyvalue',key).replace('valvalue',value);
                        $("#" + divId).append(template)

                    });
                }

                $("#trainConfEditor").html(jobEntity.trainConf);
                if(isNotNull(jobEntity.trainConf))
                {
                    $.each(JSON.parse(jobEntity.trainConf),function(key,value) {
                        var divId='trainConfContainer';
                        var template = $("#add_item_template").html().replace('add_item_template_add_btn_template', divId).replace('keyvalue',key).replace('valvalue',value);
                        $("#" + divId).append(template)

                    });
                }

                $("#trainParameterEditor").html(jobEntity.trainParameter);
                if(isNotNull(jobEntity.trainParameter))
                {
                    $.each(JSON.parse(jobEntity.trainParameter),function(key,value) {
                        var divId='trainParameterContainer';
                        var template = $("#add_item_template").html().replace('add_item_template_add_btn_template', divId).replace('keyvalue',key).replace('valvalue',value);
                        $("#" + divId).append(template)

                    });
                }
                //拷贝以及终止job链接
               /* $("#stopjob").attr("href","/api/job/stop?jobId="+ jobEntity.id);*/
                $("#copyjob").attr("href","copyjob.html?copyjobId="+ jobEntity.id);


            }

        }
    });
    afterload();

}//]]>
function createTimeLine(stageStatusList, jobid) {
    parseStageStatus(stageStatusList);
    for(var index in stageStatusList) {
        var stage = stageStatusList[index];
        var content = $($("#tl_li_template").html());
        if(stage.status == "1") {
            $(".timeline-badge", content).addClass("success");
            $(".timeline-badge .glyphicon", content).addClass("glyphicon-ok")
        }
        if(stage.status == "0") {
            $(".timeline-badge", content).addClass("info");
            $(".timeline-badge .glyphicon", content).addClass("glyphicon-arrow-down")
        }

        if(stage.status == "-1") {
            $(".timeline-badge", content).addClass("danger");
            $(".timeline-badge .glyphicon", content).addClass("glyphicon-remove")
        }

        if(stage.stageName == "4") {
            $(".timeline-body p", content).html("<a href='/pages/job/log.html?jobId="+jobid+"&type=1' target='_blank'>点击查看日志</a>")
        }

        if(stage.stageName == "6") {
            $(".timeline-body p", content).html("<a href='/pages/job/log.html?jobId="+jobid+"&type=2' target='_blank'>点击查看日志</a>")
        }
        $(".text-muted", content).html(stage.updateTime);
        $(".timeline-title", content).html(stage.stageDesc);

        $("#job_process").append(content)
    }
}
function parseStageStatus(stageStatusList) {
    for(var i in stageStatusList) {
        var stageStatus = stageStatusList[i];
        var updateTime = new Date(stageStatus['lastupdateTime']);
        updateTime=updateTime.getFullYear()+'-'+(updateTime.getMonth()+1)+'-'+updateTime.getDate()+' '+updateTime.getHours()+':'+updateTime.getMinutes()+':'+updateTime.getSeconds();
        stageStatus.updateTime = updateTime;
        var stageName = stageStatus['stageName'];
        var stage = "";
        if(stageName == "1") {stage = "创建成功";}
        if(stageName == "2") {stage = "等待调度";}
        if(stageName == "3") {stage = "数据生产Job等待执行";}
        if(stageName == "4") {stage = "数据生产Job正在执行";}
        if(stageName == "5") {stage = "数据生产Job执行成功,等待模型训练job执行";}
        if(stageName == "6") {stage = "模型训练Job执行";}
        if(stageName == "7") {stage = "模型训练完成";}
        stageStatus.stageDesc = stage;
    }
}

//<![CDATA[
function afterload(){

    //genBasicConf
    var genBasicConfEditor = ace.edit("genBasicConfEditor");
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
    var genpareditor = ace.edit("genpareditor");
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
    var genJobConfEditor = ace.edit("genJobConfEditor");
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
    var trainBasicConfEditor = ace.edit("trainBasicConfEditor");
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
    var trainConfEditor = ace.edit("trainConfEditor");
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
    var trainParameterEditor = ace.edit("trainParameterEditor");
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
}//]]>

function submitbefore() {
//        var editor = ace.edit("editor");
//        editor.setTheme("ace/theme/xcode");
//        editor.getSession().setMode("ace/mode/json");
//        var val = editor.session.getValue();
//        var o = JSON.parse(val);// may throw if json is malformed
//        val = JSON.stringify(o, null, 4);// 4 is the indent size
//        editor.session.setValue(val);
//            $("#editorjson").attr("value",val);
//         alert( $("#editorjson").val());
    //genParameter
    var genpareditor = ace.edit("genpareditor");
    genpareditor.setTheme("ace/theme/xcode");
    genpareditor.getSession().setMode("ace/mode/json");
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
    var genBasicConfEditor = ace.edit("genBasicConfEditor");
    genBasicConfEditor.getSession().setMode("ace/mode/json");
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
    var genJobConfEditor = ace.edit("genJobConfEditor");
    genJobConfEditor.getSession().setMode("ace/mode/json");
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
    var trainBasicConfEditor = ace.edit("trainBasicConfEditor");
    trainBasicConfEditor.setTheme("ace/theme/xcode");
    trainBasicConfEditor.getSession().setMode("ace/mode/json");
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
    var trainConfEditor = ace.edit("trainConfEditor");
    trainConfEditor.setTheme("ace/theme/xcode");
    trainConfEditor.getSession().setMode("ace/mode/json");
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
    var trainParameterEditor = ace.edit("trainParameterEditor");
    trainParameterEditor.setTheme("ace/theme/xcode");
    trainParameterEditor.getSession().setMode("ace/mode/json");
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

