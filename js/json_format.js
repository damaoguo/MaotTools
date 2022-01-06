$(function () {
    $('#json_format').click(function(){
        var raw_json = $('#raw_json_input').val();
        console.log(raw_json);
        console.log(JSON.stringify(raw_json));
        $('#format_json_output').val(JSON.stringify(raw_json));
    });

});