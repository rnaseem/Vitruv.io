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
    
    const authToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InppbGxzLmpvc2h1YUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjI2MTgiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIxMDkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiMTAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiQmFzaWMiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDE5LTA2LTIwIiwiaXNzIjoiaHR0cHM6Ly9hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNTYxNDc5ODEwLCJuYmYiOjE1NjE0NzI2MTB9.yxV2XaB7JTdvT-2o4lXrCHI_QQ69BRF74nSQmSEf_KY";
    const parameters = "&gender=male&year_of_birth=1984"; 
    const format = "&format=json&language=en-gb";

    if (diagnose) {

        var queryURL = "https://healthservice.priaid.ch/diagnosis?symptoms=[" + symptoms + "]" + parameters + "&token=" + authToken + format;

    }


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
};