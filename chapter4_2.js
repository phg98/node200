const func133 = () => {
    const http = require('http');

    const server = http.createServer();

    server.listen(50000, ()=>{
        console.log('Server running on 50000');
    })

    const testClose = ()=>{
        server.close();
        console.log('Server Closed.');
    }

    setTimeout(testClose, 5000)
}

// func133();


const func134 = () => {
    const http = require('http');

    const server = http.createServer();

    server.on('request', ()=>{
        console.log('Request');
    })

    server.on('connection', ()=>{
        console.log('Connection');
    })

    server.on('close', ()=>{
        console.log('Close');
    })

    server.listen(50000, ()=>{
        consolep.log('Server running on 50000');
    })
    const testClose = ()=>{
        server.close();
        console.log('Server Closed.');
    }

    setTimeout(testClose, 5000)

}
//func134();


const func135 = () => {
    require('http').createServer((request, response)=>{
        response.writeHead(200, { 'Content-Type': 'text/html'});
        response.end('Hello World!');
    })
        .listen(50000, ()=>{
            console.log('Server Running on port 50000')
    })
}
//func135()


const func136 = () => {
    const http = require('http');
    const fs = require('fs');

    http.createServer((request, response)=>{
        fs.readFile('./136.example.html', (error, data)=>{
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    })
    .listen(50000, ()=>{
        console.log('server running')
    })
}
//func136()


const func137 = () => {
    const http = require('http');
    const fs = require('fs');

    http.createServer((request, response)=>{
        fs.readFile('./test.jpg', (error, data)=>{
            response.writeHead(200, {'Content-Type': 'image/jpeg'})
            response.end(data)
        })
    })
    .listen(50001, ()=>{
        console.log('server running on 50001')
    });
    
    http.createServer((request, response)=>{
        fs.readFile('./test.mp3', (error, data)=>{
            response.writeHead(200, {'Content-Type': 'audio/mp3'})
            response.end(data)
        })
    })

}
// func137();


const func138 = () => {
    const http = require('http');
    const fs = require('fs');
    const url = require('url');

    http.createServer((request, response)=>{
        let pathname = url.parse(request.url);
        pathname = url.parse(request.url).pathname;

        if (pathname === '/') {
            fs.readFile('./137example.html', (error, data)=>{
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
            console.log(url.parse(request.url))
            })
            
        }
        else if (pathname === '/example') {
            fs.readFile('./136.example.html', (error, data)=>{
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
            console.log(url.parse(request.url))
            })
        }
    })
    .listen(50000, ()=>{
        console.log('server running on 50001')
    });
}
// func138();    


const func139 = () => {
    const http = require('http');
    const url = require('url');

    http.createServer((request, response)=>{

        const get = url.parse(request.url, true).query;

        if (request.method === 'GET') {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(`<h1>${JSON.stringify(get)}</h1>`)
            console.log(url.parse(request.url))
        } else if (request.method === "POST") {
            console.log(`${request.method}방식의 요청입니다.`)
        }
    })
    .listen(50000, ()=>{
        console.log('server running on 50000')
    });
}
// func139();    


const func140 = () => {
    const http = require('http');
    const url = require('url');
    const fs = require('fs');

    http.createServer((request, response)=>{

        const get = url.parse(request.url, true).query;

        if (request.method === 'GET') {
            fs.readFile('./140.example.html', (error, data)=>{
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
            console.log('Get request');
            })
        } else if (request.method === "POST") {
            request.on('data', (data)=>{
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
            console.log(`${request.method}방식의 요청입니다.`)
            })
        }
    })
    .listen(50000, ()=>{
        console.log('server running on 50000')
    });
}
// func140()


const func141 = () => {
    const http = require('http');

    http.createServer((request, response)=>{
            response.writeHead(200, {
                'Content-Type': 'text/html',
                'Set-Cookie': ['soju=grilledPork', 'beer = checken'],
            })
            response.end(`<h1>${request.headers.cookie}</h1>`)
            console.log('Get request');
    })
    .listen(50000, ()=>{
        console.log('server running on 50000')
    });
}
// func141()


const func142 = () => {
    const http = require('http');

    http.createServer((request, response)=>{
        if (request.headers.cookie) {
            const cookie = request.headers.cookie.split(';').map((element)=>{
                element = element.split('=')
                return {
                    name: element[0],
                    value: element[1],
                }
            })
            response.end(`<h1>${JSON.stringify(cookie)}</h1>`)
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/html',
                'Set-Cookie': ['soju=grilledPork', 'beer = checken'],
            })
            response.end(`<h1>${"create cookie"}</h1>`)
        }
    })
    .listen(50000, ()=>{
        console.log('server running on 50000')
    });
}
func142()