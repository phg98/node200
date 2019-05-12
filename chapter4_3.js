const func148 = () => {

    const request = require('request');

    request({
        url: 'https://www.google.com/',
        method: 'GET',
    }, (error, response, body) => console.log(body));
}
//func148()


const func149 = () => {

    const request = require('request');

    request({
        url: 'https://www.google.com/search',
        method: 'GET',
        qs: {q: '신사동 맛집'},
    }, (error, response, body) => console.log(body));
}
// func149()


const func150 = () => {
    const request = require('request');
    const iconv = require('iconv-lite');

    request({
        url: 'https://www.google.com/search',
        method: 'GET',
        qs: {q: '신사동 맛집'},
        encoding: null,
    }, (error, response, body) => {
        const decodeResult = iconv.decode(body, 'euc-kr');
        console.log(decodeResult)
    });
}
//func150()


const func151 = () => {
    const cheerio = require('cheerio');

    const $ = cheerio.load('<html><h2 class="title">hello</h2></html>');
    const titleText = $('h2.title').text();

    console.log(titleText);
}
//func151()


const func152 = () => {
    const cheerio = require('cheerio');
    const crawler = require('./crawler')

    const parse = (decodedResult)=>{
        console.log(decodedResult);
        const $ = cheerio.load(decodedResult);
        const titles = $('h3.r').find('a');
        for (let i=0; i<titles.length; i += 1) {
            const title = $(titles[i]).text();
            console.log(title);
        }
    }
    crawler.crawl(parse)({q: '서울대입구역 맛집'})
}
func152()

