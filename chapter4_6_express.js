// This function does not work.
const func159 = () => {
    const winston = require('winston');
    const winstonDaily = require('winston-daily-rotate-file');
    const moment = require('moment');

    function tsFormat() {
        return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
    }

    const logger = new (winston.Logger) ({
        transports: [
            new (winston.transports.Console)({
                timestamp: tsFormat,
                colorize: true,
                showlevel: true,
                level: 'debug',
            }),
            new (winstonDaily)({
                level: 'info',
                filename: 'Log/logs',
                timestamp: tsFormat,
                datePattern: '_YYYY-MM-DD.log',
                showlevel: true,
                maxsize: 1000000,
                maxFiles: 5,
            }),
        ],

        exceptionHandlers: [
            new (winstonDaily)({
                level: 'info',
                filename: 'Log/exception',
                timestamp: tsFormat,
                datePattern: '_yyyy-MM-dd.log',
                showlevel: true,
                maxsize: 1000000,
                maxFiles: 5,
            }),
            new (winston.transports.Console)({
                timestamp: tsFormat,
                colorize: true,
                showlevel: true,
                level: 'debug',
            }),
        ],
    });

    logger.info('info logging');
    logger.error('error logging');
}
//func159();


const func160 = () => {
    const express = require('express');

    const app = express();

    app.get('/', (request, response) => {
        response.send('Hello express module');
    })

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })

}
//func160();


const func161 = () => {
    const express = require('express');

    const app = express();

    app.get('/', (request, response) => {
        const result = [];
        const multipleNumber = 9;
        for (let i=0; i<5; i++) {
            result.push({
                number: `${multipleNumber}X${i}`,
                multiple: multipleNumber * i,
            })
        }
        response.send(result);
    })

    app.get('/error', (request, response)=>{
        response.status(404).send('404 ERROR');
    })

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })

}
// func161();


const func162 = () => {
    const express = require('express');

    const app = express();

    app.use((request, response) => {
        const agent = request.header('User-Agent');
        const paramName = request.query.name;
        const browserChrome = 'Hello Chrome';
        const browserOthers = 'Hello Others';

        console.log(request.headers);
        console.log(request.baseUrl);
        console.log(request.hostname);
        console.log(request.protocol);

        if (agent.toLowerCase().match(/chrome/)) {
            response.write(`<div><p>${browserChrome}</p></div>`)
        } else {
            response.write(`<div><p>${browserOthers}</p></div>`)
        }
        response.write(`<div><p>${agent}</p></div>`)
        response.write(`<div><p>${paramName}</p></div>`)
        response.end();
    })

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })

}
// func162();


const func163 = () => {
    const express = require('express');

    const app = express();

    app.use((request, response, next)=>{
        console.log('First Middleware request');
        request.user1 = 'John';
        next();
    })

    app.use((request, response, next)=>{
        console.log('Second Middleware request');
        request.user2 = 'Mary';
        next();
    })

    app.use((request, response, next)=>{
        console.log('Third Middleware request');
        response.writeHead('200', {
            'Content-Type': 'text/html;charset=utf8',
        })
        response.write(`<div><p>${request.user1}</p></div>`)
        response.write(`<div><p>${request.user2}</p></div>`)
        response.end('<h1>express server return</h1>')
    })

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
}
// func163();


const func164 = () => {
    const express = require('express');

    const app = express();

    app.use(express.static(`${__dirname}`));

    app.use((request, response)=>{
        response.writeHead('200', {
            'Content-Type': 'text/html;charset=utf8',
        })
        response.end('<img src="/test.jpg" width="100%" />')
    })

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
}
//func164();


const func165 = () => {
    const express = require('express');
    const bodyParser = require('body-parser');

    const app = express();

    app.use(bodyParser.urlencoded({extended: false}))

    app.use(bodyParser.json());

    app.use(express.static(__dirname + '/login'))

    app.use((request, response)=>{
        const userId = request.body.userid || request.query.userid;
        const userPassword = request.body.password || request.query.password;

        response.writeHead('200', {
            'Content-Type': 'text/html;charset=utf8',
        })
        response.write('<h1>Login ID and Password is</h1>')
        response.write(`<div><p>${userId}</p></div>`)
        response.write(`<div><p>${userPassword}</p></div>`)
        response.end(JSON.stringify(request.body, null, 2));
    })

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
}
// func165();


const func166 = ()=>{
    const express = require('express');

    const app = express();

    app.get('/one', (request, response)=>{
        response.send('<a href="/two">Street 200</a>')
    })

    app.get('/two', (request, response)=>{
        response.send('<a href="/one">Street 100</a>')
    })

    app.get('/three/:number', (request, response)=>{
        const streetNumber = request.params.number;
        response.send(`${streetNumber}Street`)
    })

    app.get('/four/:number', (request, response)=>{
        const aveNumber = request.params.number;
        response.send(`${aveNumber}Ave`)
    })

    app.listen(3000, ()=>{
        console.log('server is running on port 3000')
    })

}
func166();