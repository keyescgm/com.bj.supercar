//domain对应的map信息，如果是已经加载过一次则不再进行加载
var domainInfoMap = {};
String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find, 'g'), replace);
};
function showWindow(e) {
    var appkeyid = $(e.target).val();
    $.ajax({
        type: "get",
        dataType: "json",
        async: false,
        url: '/api/appkeymanage/detail?appkeyid=' + appkeyid,
        success: function (data) {
            var appkeyVO = data.appkeyVO;
            if (appkeyVO != undefined) {
                $("#appkeyid").attr("value", appkeyVO.id);
                $("#appkeyName").attr("value", appkeyVO.name);
                $("#createTime").attr("value", appkeyVO.createDate);

            }
        }
    });
    $('#myModal').modal('show');
}

function showaddAppkeyWindow(e) {
    $('#addAppkeyModal').modal('show');
}
function updateappkey() {
    var appkeyid = $("#appkeyid").val();
    var appkeyName = $("#appkeyName").val();
    if (!isNotNull(appkeyName)) {
        alert("appkeyName不能为空！");
        return;
    }
    $.ajax({
        type: "get",
        dataType: "json",
        async: false,
        url: '/api/appkeymanage/update?appkeyid=' + appkeyid + '&appkeyName=' + appkeyName,
        success: function (data) {
            var code = data.code;
            if (code == 1) {
                $('#modellist-table').DataTable({
                    "responsive": true,
                    "destroy": true,
                    "ajax": '/api/appkeymanage/list',
                    "aaSorting": [[0, "desc"]]
                });
                // window.location.href=data.data;
            }
            else {
                alert("update error!")
            }
        }
    });
    $('#myModal').modal('hide');
}
function addappkey() {
    var appkeyName = $("#addappkeyName").val();
    if (!isNotNull(appkeyName)) {
        alert("appkeyName不能为空！");
        return;
    }
    $.ajax({
        type: "get",
        dataType: "json",
        async: false,
        url: '/api/appkeymanage/add?appkeyName=' + appkeyName,
        success: function (data) {
            var code = data.code;
            if (code == 1) {
                $('#modellist-table').DataTable({
                    "responsive": true,
                    "destroy": true,
                    "ajax": '/api/appkeymanage/list',
                    "aaSorting": [[0, "desc"]]
                });
                // window.location.href=data.data;
            }
            else {
                alert("添加失败，请确认名称是否重复！")
            }
        }
    });
    $('#addAppkeyModal').modal('hide');
}
function showDomainEdit(e) {
    var appkeyid = $(e.target).val();
    $.ajax({
        type: "get",
        dataType: "json",
        async: false,
        url: '/api/appkeymanage/domainlist?appkeyid=' + appkeyid,
        success: function (data) {
            var appkeyVO = data.appkeyVO;
            if (isNotNull(appkeyVO)) {
                $("#appkeyDomid").attr("value", appkeyVO.id);
                $("#appkeyDomName").attr("value", appkeyVO.name);
            }
            var domainDescVOS = data.domainDescVOS;
            if (isNotNull(domainDescVOS)) {
                //绑定appkey对应domain信息
                $("#domaininfoIdList").html("");
                for (var i = 0; i < domainDescVOS.length; i++) {
                    var fieldindex = 0;
                    var domainIdVO = domainDescVOS[i];
                    var template = $("#add_domainid_template").html().replaceAll('domainNameInfo', domainIdVO.domainName).replaceAll("domainNumber", domainIdVO.id).replaceAll("fieldNumberdom", fieldindex).replaceAll("fieldNumber", fieldindex);
                    $("#domaininfoIdList").append(template);
                    $("#domaindescid_" + domainIdVO.id).val(domainIdVO.id);
                    domainkeyFocus(domainIdVO.id);
                    $("#domainid_mankey_" + domainIdVO.id).val(domainIdVO.mainKey);
                    $("#domainall_load_" + domainIdVO.id).val(domainIdVO.allLoadnum);
                    $("#domainsize").val(domainIdVO.id);
                    for (var key in domainIdVO.domainFields) {
                        if (fieldindex == 0) {
                            //处理已有的
                            domainfieldFocus(domainIdVO.id, fieldindex);
                            $("#domainfield_" + domainIdVO.id + "_" + fieldindex).val(key);
                            $("#domainfieldmap_desc_" + domainIdVO.id + "_" + fieldindex).val(domainIdVO.domainFields[key]);
                            $("#add_domainfield_template_" + domainIdVO.id + " input[name='domainid_index']").val(domainIdVO.id);
                            $("#add_domainfield_template_" + domainIdVO.id + " input[name='domainfield_num']").val(fieldindex);
                        } else {
                            var templateField = $("#add_domainfield_template").html().replaceAll("domainNumber", domainIdVO.id).replaceAll("fieldNumber", fieldindex);
                            $("#add_domainfield_template_" + domainIdVO.id).append(templateField);
                            domainfieldFocus(domainIdVO.id, fieldindex);
                            $("#domainfield_" + domainIdVO.id + "_" + fieldindex).val(key);
                            $("#domainfieldmap_desc_" + domainIdVO.id + "_" + fieldindex).val(domainIdVO.domainFields[key]);
                            $("#add_domainfield_template_" + domainIdVO.id + " input[name='domainid_index']").val(domainIdVO.id);
                            $("#add_domainfield_template_" + domainIdVO.id + " input[name='domainfield_num']").val(fieldindex);
                        }
                        fieldindex++;
                    }
                }
            } else {
                $("#domaininfoIdList").html("");
                var template = $("#domaininfoIdList_init").html();
                $("#domaininfoIdList").append(template);
            }
        }
    });
    $('#appkeyDomain').modal('show');
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
    var template = $("#add_domainid_template").html().replace('add_domainid_template_domainNumber', divId).replaceAll("domainNumber", domainsize).replaceAll("fieldNumberdom", domainfieldnum).replaceAll("fieldNumber", domainfieldnum);
    $("#" + divId).append(template)
    $("#domainName_" + domainsize).val("");
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

function updateAppkeyDomain() {
    $('#appkeyDomainForm').submit();
}

