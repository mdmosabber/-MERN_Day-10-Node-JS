const http = require('http');
const url = require('url');

http.createServer(function(req, res){
  const myUrl = 'https://ostad.app/en/dashboard/my-courses?63202ce744c5e613ea5c96cb/videos';
  const result =  url.parse(myUrl,true);

  res.writeHead(200,{'Content-type': 'text/html'});

  res.write('<b>Host: </b>' +       result.host + '<br>');
  res.write('<b>Host Name: </b>' +  result.hostname + '<br>');
 
  res.write('<b>Path: </b>' +       result.path + '<br>');
  res.write('<b>Path Name: </b>' +  result.pathname + '<br>');

  res.write('<b>Search Name: </b>' + result.search + '<br>');
  res.write('<b>Href: </b>' +        result.href + '<br>');
 
  res.end();

}).listen(8080);

console.log('Server Run Successfully');