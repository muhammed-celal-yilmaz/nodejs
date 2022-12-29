var http=require('http')
var log = require('./log.js')

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'})
    response.end('Merhaba')
}).listen(8080)

log.information('Sunucu yayina gecti.')