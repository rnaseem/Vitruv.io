function diagnose() {

    var symptoms = [];

$('#headAndFace-list :checkbox').change(function() 
{
    symptoms = [];
    $('#headAndFace-list :checkbox').each(function(i, item){
        if($(item).is(':checked'))
        {
            checkedAttr.push($(item).val()); 
        }
    });
   console.log("symptoms:", checkedAttr);
});
    
    const authToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InppbGxzLmpvc2h1YUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjUyOTUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMTktMDYtMjAiLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTU2MTE0MzY3MSwibmJmIjoxNTYxMTM2NDcxfQ.suuIAj1g4kCvBrJecDfwTlLv1qV3FXOWHerpj_i3BOw";
    const parameters = "&gender=male&year_of_birth=1984"; 
    const format = "&format=json&language=en-gb";

    if (diagnose) {

        var queryURL = "https://sandbox-healthservice.priaid.ch/symptoms=[" + symptoms + "]" + parameters + "&token=" + authToken + format;

    }


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
};