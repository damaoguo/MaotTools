$(function () {
    var timestamp = (new Date()).valueOf();
    $('#js_timestamp_now').text(timestamp);
    window.setInterval("updateTime()", 1000);
    
    $('#js_convert_timestamp').click(function(){
        var timestamp = $('#js_timestamp').val();
        console.log("time1: " + timestamp)
        var result = getYMDHMS(timestamp);
        $('#js_datetime').val(result);
    });

    $('#js_convert_datetime').click(function(){
        var date = $('#js_datetime_o').val();
        var result = getTimeStamp(date);
        $('#js_timestamp_o').val(result);
    });

});

function updateTime(){
    var flag = 1;
    var timestamp = (new Date()).valueOf();
    $('#js_timestamp_now').text(timestamp);
    
    $('#js_timer_stop').click(function(){
        $('#js_timestamp').val(timestamp);
        var result = getYMDHMS(timestamp);
        $('#js_datetime').val(result);
        $('#js_datetime_o').val(result);
    });
};

// 通过时间戳获取可阅读的时间 
function getYMDHMS(time){
    console.log("time2: " + time)
    var myDate = new Date(Number(time));   
    var YMD = myDate.getFullYear() + "-" + (myDate.getMonth()+1) + "-" + myDate.getDate();
    var HMS = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
    var YMDHMS = YMD + " " + HMS;
    console.log("time3: " + YMDHMS);
    return YMDHMS;
};

// 通过日期获取时间戳
function getTimeStamp(date){
    var date = new Date(date)
    return Date.parse(date)
}