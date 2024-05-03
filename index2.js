const http = require('http')//ye module request and response ko handle krta hai 

http.createServer((req,res)=>{
    res.write("<b>hello ji kaise ho , paape khaalo sex krlo<b>");
    res.end();
}).listen(4500);