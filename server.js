const http = require('http');
const fs  = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/') {
// the read file strings are placeholders
        fs.readFile('index.html', function(err, data) {
            if(err){
                console.error(err);
                res.writeHead(500, {'Content-Type' : 'text/plain'});
                res.write('Internal Server Error');
                res.end();
                return
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if (page =='/placeHolderOne') {
        fs.readFile('placeHolderOne.html', function(err, data) {
            if (err){
                console.error(err);
                res.writeHead(500, {'Content-Type' : 'text/plain'});
                res.write('Internal Server Error');
                res.end();
                return
            }
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data)
            res.end();
        });
    }
    else if (page =='/placeHolderTwo') {
        fs.readFile('placeHolderTwo.html', function(err,data){
            if (err) { 
                console.error(err);
                res.writeHead(500, {'Content-Type' : 'text/plain'});
                res.write('Internal Server Error');
                res.end();
                return
            }
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data);
            res.end();
        })
    }else if (page == '/api') {
// fill here with params for data fetching and json
        if('thing' in params){
            if(params['thing'] == 'something'){
                res.writeHead(200, {'Content-Type': 'application/json'});
                const objToJson = {
                    name: "filler",
                    status: "filler two",
                    location: "guess what? more filler"
                }
                res.end(JSON.stringify(objToJson));
            }else{
                res.writeHead(200, {'Content-Type' : 'application/json'});
                const objToJson = {
                    name: "unknown",
                    status: "unknown",
                    location: "unknown"
                }
                res.end(JSON.stringify(objToJson));
            }
        }
    }
    else if (page == '/css/style.css'){
        fs.readFile('css/style.css', function(err, data){
            if(err){
                console.error(err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write('Internal Server Error');
                res.end();
                return
            }
            res.write(data);
            res.end();
        })
    }else if (page == 'js/main.js') {
        fs.readFile('js/main.js', function(err, data){
            if(err){
                console.error(err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write('Internal Server Error');
                res.end();
                return
            }
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end();

        });
    }else{
// a simple way to catch errors, can be more meticulous with error throwing however that isn't the point of this template file
        console.err("Page not found");
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.write('404 Page Not Found');
        res.end();
    }
})

server.listen(8000)