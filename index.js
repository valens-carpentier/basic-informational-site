var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var path = q.pathname;

    // Map the paths explicitly
    var filename;
    if (path === "/") {
        filename = "./index.html"; // Root path -> index.html
    } else if (path === "/about") {
        filename = "./about.html"; // /about -> about.html
    } else if (path === "/contact-me") {
        filename = "./contact-me.html"; // /contact-me -> contact-me.html
    } else {
        filename = null; // Any other path will go to 404.html
    }

    // Serve the correct file or the 404 page
    if (filename) {
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.write("500 Internal Server Error");
                return res.end();
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {
        // Serve the 404 page if no valid route matches
        fs.readFile('./404.html', function (err404, data404) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write(data404); // Serve the 404.html page
            return res.end();
        });
    }
}).listen(8080);
