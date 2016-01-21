const http = require('http');
const fs = require('fs');
const siteRoot = '/home/mrobbins/git/matt-kelsey-wedding-site/clientlibs';

function send404(response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write('Error 404: Page not found!');
  response.end();
}

http.createServer(function(request, response) {
  try {
    if (request.method != 'GET') {
      send404();
      return;
    }
    if (request.url == '/') {
      var filepath = siteRoot + '/index.html';
      fs.createReadStream(filepath).pipe(response);
    } else {
      var filepath = siteRoot + request.url;
      var is = fs.createReadStream(filepath)
      is.on('error', function() {console.log('file stream error')});
      is.pipe(response);
    }
  } catch (e) {
    send404(response);
  }
}).listen(80);  	

console.log("Server is running.");
