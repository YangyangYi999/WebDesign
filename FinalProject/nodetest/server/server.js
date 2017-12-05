var http =require("http");
var url = require("url");

function start(route,handle){
    function onRequest(request, response){
        var postData ="";
        var pathname= url.parse(request.url).pathname;
        console.log("request for"+ pathname +" received");
       
        request.setEncoding("utf8");
        request.addListener("data",function(postDataChunk){
            postData +=postDataChunk;
            console.log("Received POST data chunk '"+
            postDataChunk + "'.");
        });

        request.addListener("end",function(){
            console.log("end called");
            route(handle,pathname,response,postData);


        });
       
      
     //   response.writeHead(200,{"Content-Type":"text/plain"});
     //   response.write(content);
     //   response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("server started");
}

exports.start = start;