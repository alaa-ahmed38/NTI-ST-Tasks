// ------ libraries -----
let fs = require('fs');
let http = require('http');
let nunjucks = require('nunjucks');
let url = require('url');
const event = require('events');


//------- constants --------
let data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
let posts = JSON.parse(data);
let temp = fs.readFileSync('main.html', 'utf-8');


// ------ server-building ------
const Server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true);
    if(pathname === '/' || pathname === '/home'){
        res.writeHead(200, {'content-type':'text/html'});
        const html = posts.map(p => nunjucks.renderString(temp, {...p, page:'home'})).join('\n');
        res.end(html);
    
    }else if(pathname === '/post'){
        res.writeHead(200, {
      'Content-type': 'text/html'
    });
    const post= posts[query.id];  
    const out = nunjucks.renderString(temp, {...post, page:'post'});
    res.end(out);
 
    }else if(pathname==='/api'){
        res.writeHead(200,{
            'content-type':'application/json'
        });
        res.end(JSON.stringify(posts));
    }else{
        res.writeHead(404,{
            "content-type":'text/html'
        });
        res.end('<h1>not found ! Error404</h1>');
    }

 });

//----- server-listening -------- 
Server.listen(8000, '127.0.0.1', () => {
console.log('the server is listening on port number 8000');
})
