$('#searchKey').keypress(function(event){
    console.log("2");
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        console.log("3");
        var searchKey = $("#searchKey").val();
        $("#q").val(searchKey);
        $("#Gsearch").submit();
    }
});