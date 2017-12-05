
//<![CDATA[
window.onload=function(){
    //加载job基础信息
    var jobid=getQueryString("jobid");
    var jsonData; // 全局变量
    $.ajax({
        type: "get",
        dataType: "json",
        async: false,
        url: '/api/job/indexDetail',
        success: function (data) {
            var jobCount=data.data.jobCount;
            var jobRunning=data.data.jobRunning;
            var jobFinish=data.data.jobFinish;
            var jobFail=data.data.jobFail;
            $("#jobCount").html(jobCount);
            $("#jobRunning").html(jobRunning);
            $("#jobFinish").html(jobFinish);
            $("#jobFail").html(jobFail);
            var jobTypeVOS=JSON.parse( data.data.jobTypeVOS);
            //job类型环状图
            Morris.Donut({
                element: 'morris-donut-chart',
                data: jobTypeVOS,
                resize: true
            });
            var jobStatistic=JSON.parse(data.data.jobStatistic);
            Morris.Area({
                element: 'morris-area-chart',
                data: jobStatistic,
                xkey: 'date',
                ykeys: ['totalJob', 'finishJob', 'failJob'],
                labels: ['总job数量', '运行完成job', '失败job'],
                pointSize: 2,
                hideHover: 'auto',
                resize: true
            });
            // Morris.Area({
            //     element: 'morris-area-chart',
            //     data: [{
            //         date: '2010 Q1',
            //         totalJob: 2666,
            //         finishJob: null,
            //         failJob: 2647
            //     }, {
            //         date: '2010 Q2',
            //         totalJob: 2778,
            //         finishJob: 2294,
            //         failJob: 2441
            //     }, {
            //         date: '2010 Q3',
            //         totalJob: 4912,
            //         finishJob: 1969,
            //         failJob: 2501
            //     }, {
            //         date: '2010 Q4',
            //         totalJob: 3767,
            //         finishJob: 3597,
            //         failJob: 5689
            //     }, {
            //         date: '2011 Q1',
            //         totalJob: 6810,
            //         finishJob: 1914,
            //         failJob: 2293
            //     }, {
            //         date: '2011 Q2',
            //         totalJob: 5670,
            //         finishJob: 4293,
            //         failJob: 1881
            //     }, {
            //         date: '2011 Q3',
            //         totalJob: 4820,
            //         finishJob: 3795,
            //         failJob: 1588
            //     }, {
            //         date: '2011 Q4',
            //         totalJob: 15073,
            //         finishJob: 5967,
            //         failJob: 5175
            //     }, {
            //         date: '2012 Q1',
            //         totalJob: 10687,
            //         finishJob: 4460,
            //         failJob: 2028
            //     }, {
            //         date: '2012 Q2',
            //         totalJob: 8432,
            //         finishJob: 5713,
            //         failJob: 1791
            //     }],
            //     xkey: 'date',
            //     ykeys: ['totalJob', 'finishJob', 'failJob'],
            //     labels: ['总job数量', '运行完成job', '失败job'],
            //     pointSize: 2,
            //     hideHover: 'auto',
            //     resize: true
            // });
            // Morris.Donut({
            //     element: 'morris-donut-chart',
            //     data: [{
            //         label: "Download Sales",
            //         value: 12
            //     }, {
            //         label: "In-Store Sales",
            //         value: 300
            //     }, {
            //         label: "Mail-Order Sales",
            //         value: 20
            //     }],
            //     resize: true
            // });

        }
    });

}//]]>


