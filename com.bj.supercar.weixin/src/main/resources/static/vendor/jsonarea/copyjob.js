
//<![CDATA[
window.onload=function(){
    var jobid=getQueryString("copyjobId");
    var jsonData; // 全局变量
    $.ajax({
        type: "get",
        dataType: "json",
        async: false,
        url: '/api/job/detail?jobid='+jobid,
        success: function (data) {
            var jobEntity=data.data.jobEntity;
            var modelEntity=data.data.modelEntity;
            if(jobEntity!=undefined)
            {
                $("#jobId").attr("value",jobEntity.id);
                $("#jobName").attr("value",jobEntity.jobName);
                $("#tl_job_name" ).html(jobEntity.jobName);
               // $("#jobOwner").attr("value",jobEntity.owner);
               // $("#tl_job_owner" ).html(jobEntity.owner);
                $("#jobspan").attr("value",jobEntity.jobSpan);
                if(0==jobEntity.jobSchedule)
                {
                    $("input[name='optionsRadiosInline'][value=0]").attr("checked",true);
                   $(".crontab-row").hide();
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
                $("#genJarPath").text(jobEntity.genJarPath.toString());
                $("#genBasicConfEditor").html(jobEntity.genBasicConf);
                $.each(JSON.parse(jobEntity.genBasicConf),function(key,value) {
                    var divId='genBasicConfContainer';
                    var template = $("#add_item_template_load").html().replace('add_item_template_add_btn_template', divId).replace('keyvalue',key).replace('valvalue',value);
                    $("#" + divId).append(template)

                });
                $("#genJobConfEditor").html(jobEntity.genJobConf);
                $.each(JSON.parse(jobEntity.genJobConf),function(key,value) {
                    var divId='genJobConfContainer';
                    var template = $("#add_item_template_load").html().replace('add_item_template_add_btn_template', divId).replace('keyvalue',key).replace('valvalue',value);
                    $("#" + divId).append(template)

                });
                $("#genpareditor").html(jobEntity.genJobParameter);
                $.each(JSON.parse(jobEntity.genJobParameter),function(key,value) {
                    var divId='genparContainer';
                    var template = $("#add_item_template_load").html().replace('add_item_template_add_btn_template', divId).replace('keyvalue',key).replace('valvalue',value);
                    $("#" + divId).append(template)

                });
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
                $.each(JSON.parse(jobEntity.trainBasicConf),function(key,value) {
                    var divId='trainBasicContainer';
                    var template = $("#add_item_template_load").html().replace('add_item_template_add_btn_template', divId).replace('keyvalue',key).replace('valvalue',value);
                    $("#" + divId).append(template)

                });
                $("#trainConfEditor").html(jobEntity.trainConf);
                $.each(JSON.parse(jobEntity.trainConf),function(key,value) {
                    var divId='trainConfContainer';
                    var template = $("#add_item_template_load").html().replace('add_item_template_add_btn_template', divId).replace('keyvalue',key).replace('valvalue',value);
                    $("#" + divId).append(template)

                });
                $("#trainParameterEditor").html(jobEntity.trainParameter);
                $.each(JSON.parse(jobEntity.trainParameter),function(key,value) {
                    var divId='trainParameterContainer';
                    var template = $("#add_item_template_load").html().replace('add_item_template_add_btn_template', divId).replace('keyvalue',key).replace('valvalue',value);
                    $("#" + divId).append(template)

                });
                //拷贝以及终止job链接
/*
                $("#stopjob").attr("href","/api/job/stop?jobId="+ jobEntity.id);
*/
              //  $("#copyjob").attr("href","copyjob.html?jobId="+ jobEntity.id);



            }

        }
    });
    afterload();
    //添加侧边导航栏命令信息
    var temp=genType1CommandLine();
    $("#gen-type-1-commandLine").html(genType1CommandLine());
    $("#train-type-1-commandLine").html(trainType1CommandLine());
    $("#tl_data_gen_job").html(genType1CommandLine());
    $("#tl_data_train_job").html(trainType1CommandLine());
}//]]>




