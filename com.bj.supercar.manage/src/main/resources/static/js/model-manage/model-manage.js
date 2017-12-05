//domain对应的map信息，如果是已经加载过一次则不再进行加载
var domainInfoMap = {};
function showaddModel(e) {
    $('#addModal').modal('show');
}
String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find, 'g'), replace);
};
window.onload = function () {
    //加载select对应的列表信息
    $.ajax({
        type: "get",
        dataType: "json",
        async: false,
        url: '/api/modelmanage/selectlist',
        success: function (data) {
            var appkeyVOS = data.appkeyVOS;
            for (var i = 0; i < appkeyVOS.length; i++) {
                $("#modelAppkey").append("<option value='" + appkeyVOS[i].name + "'>" + appkeyVOS[i].name + "</option>");  //为Select追加一个Option(下拉项)
            }
            var modelTypeEntities = data.modelTypeEntities;
            for (var i = 0; i < modelTypeEntities.length; i++) {
                //为Select追加一个Option(下拉项)
                $("#modelType").append("<option value='" + modelTypeEntities[i].typeName + "'>" + modelTypeEntities[i].typeName + "</option>");
            }
            var modelFileTypeEntities = data.modelFileTypeEntities;
            for (var i = 0; i < modelFileTypeEntities.length; i++) {
                $("#fileType_1").append("<option value='" + modelFileTypeEntities[i].typeName + "'>" + modelFileTypeEntities[i].typeName + "</option>");
            }
        }
    });
    $('#modelAppkey').editableSelect({
        effects: 'slide'
    });
    $('#modelType').editableSelect({
        effects: 'slide'
    });
    $('#fileType_1').editableSelect({
        effects: 'slide'
    });
}
//domainkey选择框选中时从远程拉取信息
function domainkeyFocus(id) {
    if (!isNotNull($("#domainid_mankey_" + id).html())) {
        var domainObj = domainInfoMap[$("#domainName_" + id).val()];
        if (isNotNull(domainObj)) {
            var domainKeys = domainObj.domainKeys;
            $("#domainid_mankey_" + id).html("");
            for (var i = 0; i < domainKeys.length; i++) {
                $("#domainid_mankey_" + id).append("<option value='" + i + "'>" + domainKeys[i] + "</option>");  //为Select追加一个Option(下拉项)
            }
        } else {
            $.ajax({
                type: "get",
                dataType: "json",
                async: false,
                url: '/api/domain/list?domainName=' + $("#domainName_" + id).val(),
                success: function (data) {
                    var domainNameInfoVO = data.domainNameInfoVO;
                    if (isNotNull(domainNameInfoVO) && isNotNull(domainNameInfoVO.domainKeys)) {
                        var domainKeys = domainNameInfoVO.domainKeys;
                        domainInfoMap[$("#domainName_" + id).val()] = domainNameInfoVO;
                        $("#domainid_mankey_" + id).html("");
                        for (var i = 0; i < domainKeys.length; i++) {
                            $("#domainid_mankey_" + id).append("<option value='" + i + "'>" + domainKeys[i] + "</option>");  //为Select追加一个Option(下拉项)
                        }
                    }
                }
            });
        }


        /* $("#domainid_mankey_" + id).editableSelect({
         effects: 'slide'
         });*/
    }
}
//domainfield选择框选中时从远程拉取信息
function domainfieldFocus(id, fieldIndex) {

    var temp = $("[name='domainfield_" + id + "_" + fieldIndex + "']").html();
    if (!isNotNull($("[name='domainfield_" + id + "_" + fieldIndex + "']").html())) {

        var domainObj = domainInfoMap[$("#domainName_" + id).val()];
        if (isNotNull(domainObj)) {
            var domainFields = domainObj.domainFields;
            $("[name='domainfield_" + id + "_" + fieldIndex + "']").html("");
            for (var i = 0; i < domainFields.length; i++) {
                $("[name='domainfield_" + id + "_" + fieldIndex + "']").append("<option value='" + domainFields[i] + "'>" + domainFields[i] + "</option>");  //为Select追加一个Option(下拉项)
            }
        } else {
            $.ajax({
                type: "get",
                dataType: "json",
                async: false,
                url: '/api/domain/list?domainName=' + $("#domainName_" + id).val(),
                success: function (data) {
                    var domainNameInfoVO = data.domainNameInfoVO;
                    if (isNotNull(domainNameInfoVO) && isNotNull(domainNameInfoVO.domainFields)) {
                        var domainFields = domainNameInfoVO.domainFields;
                        domainInfoMap[$("#domainName_" + id).val()] = domainNameInfoVO;
                        $("[name='domainfield_" + id + "_" + fieldIndex + "']").html("");
                        for (var i = 0; i < domainFields.length; i++) {
                            $("[name='domainfield_" + id + "_" + fieldIndex + "']").append("<option value='" + domainFields[i] + "'>" + domainFields[i] + "</option>");  //为Select追加一个Option(下拉项)
                        }
                    }
                }
            });
        }
    }
}
function addDomainItem(divId) {
    var domainsize = Number($("#domainsize").val()) + 1;
    var domainfieldnum = 1;
    var template = $("#add_domainid_template").html().replace('add_domainid_template_domainNumber', divId).replaceAll("domainNumber", domainsize).replaceAll("fieldNumber", domainfieldnum);
    $("#" + divId).append(template)
    //添加元素索引标识
    $("#domainid_div_" + domainsize + " input[name='domainid_index']").val(domainsize);
    $("#domainid_div_" + domainsize + " input[name='domainfield_num']").val(domainfieldnum);
    $("#domainsize").val(domainsize);
}
function removeDomainItem(e) {
    var p = $(e.target).parent().parent().parent().parent();
    $(e.target).parent().parent().parent().remove()
    // var modelfilesize=Number($("#modelfilesize").val())-1;
    // $("#modelfilesize").val(modelfilesize);

}
function addDomainFieldItem(divId) {
    var domainIndex = $("#" + divId + " input[name='domainid_index']").val();
    var domainfieldnum = Number($("#" + divId + " input[name='domainfield_num']").val()) + 1;
    var template = $("#add_domainfield_template").html().replace('add_domainfield_template_domainNumber', divId).replaceAll("domainNumber", domainIndex).replaceAll("fieldNumber", domainfieldnum);
    $("#" + divId).append(template)
    $("#" + divId + " input[name='domainfield_num']").val(domainfieldnum);
}
function removeDomainFieldItem(e) {
    var p = $(e.target).parent().parent();
    $(e.target).parent().remove()
    // var modelfilesize=Number($("#modelfilesize").val())-1;
    // $("#modelfilesize").val(modelfilesize);

}
//domainfield折叠
function foldFunc(obj, id) {
    // $('#'+id).collapse('show')
    var value = $(obj).attr("value");
    if (value == 0) {
        $('#' + id).collapse('show')
        $(obj).attr("value", 1);
        $(obj).attr("class", "fa fa-angle-double-down");

    } else {
        $('#' + id).collapse('hide')
        $(obj).attr("value", 0);
        $(obj).attr("class", "fa fa-angle-double-up");
    }
}
function addItem(divId) {
    var modelfilesize = Number($("#modelfilesize").val()) + 1;

    var template = $("#add_item_template").html().replace('add_item_template_add_btn_template', divId).replaceAll("filenumber", modelfilesize);
    $("#" + divId).append(template)
    //加载select对应的列表信息
    $.ajax({
        type: "get",
        dataType: "json",
        async: false,
        url: '/api/filetype/list',
        success: function (data) {
            var modelFileTypeEntities = data.modelFileTypeEntities;
            for (var i = 0; i < modelFileTypeEntities.length; i++) {
                $("#fileType_" + modelfilesize).append("<option value='" + modelFileTypeEntities[i].typeName + "'>" + modelFileTypeEntities[i].typeName + "</option>");
            }
        }
    });
    $("#fileType_" + modelfilesize).editableSelect({
        effects: 'slide'
    });
    $("#modelfilesize").val(modelfilesize);
}
function removeItem(e) {
    var p = $(e.target).parent().parent().parent();
    $(e.target).parent().parent().remove()
    // var modelfilesize=Number($("#modelfilesize").val())-1;
    //$("#modelfilesize").val(modelfilesize);

}
function inputfileChange(e) {
    var filename = e.id;
    if (filename.indexOf("input-b1") >= 0) {
        var indexnum = filename.substring(filename.indexOf("input-b1") + 9, filename.length);
        $('#photoCover_' + indexnum).val(e.files[0].name);
    }
}
//修改为启用
function online(e) {
    var modelId = $(e.target).val();
    $.ajax({
        type: "get",
        dataType: "json",
        async: false,
        url: '/api/modelmanage/updateActive?id=' + modelId + '&active=1',
        success: function (data) {
            var state = data.data;
            if (state == 1) {
                $('#modelmanage-table').DataTable({
                    "responsive": true,
                    "destroy": true,
                    "ajax": '/api/modelmanage/list',
                    "aaSorting": [[0, "desc"]]
                });
            }
            else {
                alert("内部错误！")
            }
        }
    });
}
//修改为禁用
function offline(e) {
    var modelId = $(e.target).val();
    $.ajax({
        type: "get",
        dataType: "json",
        async: false,
        url: '/api/modelmanage/updateActive?id=' + modelId + '&active=0',
        success: function (data) {
            var state = data.data;
            if (state == 1) {
                $('#modelmanage-table').DataTable({
                    "responsive": true,
                    "destroy": true,
                    "ajax": '/api/modelmanage/list',
                    "aaSorting": [[0, "desc"]]
                });
            }
            else {
                alert("内部错误！")
            }
        }
    });
}
//查看详情
function modelFullInfo(e) {
    var modelId = $(e.target).val();
    $.ajax({
        type: "get",
        dataType: "json",
        async: false,
        url: '/api/modelmanage/info?id=' + modelId,
        success: function (data) {
            var manageModelVO = data.data;
            if (isNotNull(manageModelVO)) {
                $("#modelinfoName").attr("value", manageModelVO.name);
                //$("#domaininfoIds").attr("value",manageModelVO.domainIds);
                $("#domaininfoIdList").html("");
                for (var i = 0; i < manageModelVO.domainDescVOS.length; i++) {
                    var domainIdVO = manageModelVO.domainDescVOS[i];
                    var template = $("#show_domainid_template").html().replaceAll('domainNameInfo', domainIdVO.domainName).replaceAll("mainKey", domainIdVO.mainKey).replaceAll("allLoad", domainIdVO.allLoad).replaceAll("domainNumber", domainIdVO.id);
                    $("#domaininfoIdList").append(template)
                    for (var key in domainIdVO.domainFields) {
                        // var domainFieldVO=domainIdVO.domainFields[j];
                        var templateField = $("#show_domainfield_template").html().replaceAll('FieldName', key).replaceAll("FieldMap", domainIdVO.domainFields[key]);
                        $("#show_domainfield_template_" + domainIdVO.id).append(templateField)
                    }
                }
                if(manageModelVO.domainDescVOS.length==0){
                    $("#showModelDomainids").hide();
                }else {
                    $("#showModelDomainids").show();
                }
                $("#modelinfoType").attr("value", manageModelVO.modelType);
                $("#modelinfoHosts").attr("value", manageModelVO.ranges);
                $("#modelinfoAppkey").attr("value", manageModelVO.appkeyName);
                $("#enabledinfo").attr("value", manageModelVO.state);
                $("#fileTypeinfo_1").find('option[value=' + manageModelVO.modelType + ']').attr("selected", true);
                $("#fileinfolist").html("");
                for (var i = 0; i < manageModelVO.modelFileVOList.length; i++) {
                    var modelFileVO = manageModelVO.modelFileVOList[i];
                    var template = $("#info_item_template_numb").html().replaceAll('modelinfofileName', modelFileVO.fileName).replaceAll("modelinfofileType", modelFileVO.fileType).replaceAll("modelinfofileHref", "http://mss.vip.sankuai.com/v1/mss_a1fe05429b124698a003ab814fed75a2/modelmanager/" + modelFileVO.fileObjectName);
                    $("#fileinfolist").append(template)
                }
                if (manageModelVO.modelFileVOList.length == 0) {
                    $("#showModelFile").hide();
                }else {
                    $("#showModelFile").show();
                }
            }
            else {
                alert("内部错误！")
            }
        }
    });
    $('#modalinfo').modal('show');
}


function addmanagemodel() {
    var booleanv = submitbefore();
    if (booleanv) {
        $('#addModel_form').submit();
        /*
         $.ajax({
         url:"/api/modelmanage/add",
         type:"post",
         data:$("#addModel_form"),
         dataType : "json",
         clearForm: true,
         success:function(data){
         window.location.href=data.data;
         }
         });*/
    }
    else {

    }

}


function submitbefore() {
    //注册表单验证
    $(validform());
    var validates = validform();
    if (validform().form()) {
        //通过表单验证，以下编写自己的代码
        // alert("success");
    } else {
        //校验不通过，什么都不用做，校验信息已经正常显示在表单上
        return false;
    }
    return true;
}

//编写表单验证函数validform，在验证按钮注册按钮点击事件内调用验证函数对象
function validform() {
    /*关键在此增加了一个return，返回的是一个validate对象，这个对象有一个form方法，返回的是是否通过验证*/
    return $("#addModel_form").validate({
        rules: {
            modelName: "required",
            modelAppkey: "required",
            // modelHosts:"required",
            enabled: "required",
            modelType: "required"
        },
        messages: {
            modelName: "必须填写model名称信息",
            modelAppkey: "请选择appkey",
            // modelHosts:"请输入生效机器",
            enabled: "请选择生效状态",
            modelType: "请选择模型类型"
        }
    });
}