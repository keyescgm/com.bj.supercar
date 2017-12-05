/*window.onload=function(){

    $.get("/pages/common/sidebar.html", function(data) {
        $(".sidebar-nav").html(data);

    })
}*/

$(function () {
    $.get("/pages/common/sidebar.html", function(data) {
        $(".sidebar-nav").html(data);

    })
   // $("#sidebar").load("/pages/common/sidebar.html");


});

/**
 * 判断是否null
 * @param data
 */
function isNotNull(data){
    return (data == "" || data == undefined || data == null||$.trim(data)=="") ? false : true;
}
/**
 * 获取url中的参数信息
 * @param name
 * @returns {null}
 */
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}