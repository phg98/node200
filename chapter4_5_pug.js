const func156 = () => {
    const pug = require('pug');
    const fs = require('fs');
    const http = require('http');

    http.createServer((request, response) => {
        fs.readFile('156_pug_example.pug', 'utf-8', (error, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            const fn = pug.compile(data);
            response.end(fn());
        })
    }).listen(50000, ()=>{
        console.log('Server running');
    })
}
// func156();


const func157 = () => {
    const pug = require('pug');
    const fs = require('fs');
    const http = require('http');

    http.createServer((request, response) => {
        fs.readFile('157.pug_example.pug', 'utf-8', (error, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            const fn = pug.compile(data);
            response.end(fn());
        })
    }).listen(50000, ()=>{
        console.log('Server running');
    })
}
//func157();


const func158 = () => {
    const pug = require('pug');
    const fs = require('fs');
    const http = require('http');

    http.createServer((request, response) => {
        fs.readFile('158.pug_example.pug', 'utf-8', (error, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            const fn = pug.compile(data);
            response.end(fn({
                table_name: 'Multiplacation table 19 X ?',
                number: '19',
            }));
        })
    }).listen(50000, ()=>{
        console.log('Server running');
    })
}
func158()
