const http = require('http');
const fs = require('fs');

// HTTP => (request, response)

http.createServer((request, response)=>{
  const file = "./WWW/file.txt";
  fs.readFile(file, (err, data) => {
    if(err){
      res.writeHead(500, {"Content-Type":"text/plain"});
      res.write("Error 500");
      res.end();
    } else {
      res.writeHead(200, {"Content-Type":"text/plain"});
      res.write(data);
      res.end();
    }


  });


}).listen(4444);
  // 1. Codigo de estatus de http y 2. Content Type

// 80 => HTTP | 443 = HTTPS
