const func128 = () => {
    const fs = require('fs');
    const process = require('process')

    const dirName = `${__dirname}/img`

    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
        console.log('mkdirSync() done');
    }
}


const func123 = () => {
    // 123 fs.writeFile
    const fs = require('fs');

    // 124 readFileSync
    const contents = 'hello\nbye\n안녕';
    fs.writeFile('./message.txt', contents, () => {
        fs.readFile('./message.txt', (err, data) => {
            if (err) throw err;
            const string = data.toString();
            console.log('sync work01');
            console.log(string)
            const list = [1, 2, 3, 4, 5];
            list.forEach(item => fs.appendFile('./chapters.txt', `chapter ${item}\n`, () => { console.log('done') }));
        });
    })
}

//func128();

const func129 = () => {
    const fs = require('fs');
    const testFolder = './';

    const filenameList = fs.readdirSync(testFolder);

    filenameList.forEach(filename => {
        console.log(filename);
    })
}

//func129()




const func130 = () => {
    const fs = require('fs');
    const userList = [
        { name: 'kyeongrok', age: 31, math: 85, english: 87, department: 'development' },
        { name: 'jihyun', age: 31, math: 95, english: 97, department: 'design' },
        { name: 'minsup', age: 35, math: 76, english: 84, department: 'development' },
    ]
    fs.writeFile('./list.json', JSON.stringify(userList), ()=>console.log('done'));
}

// func130();
const func131 = () => {
    const fs = require('fs')
    fs.readFile('./list.json', (err, data)=>{
        const j = JSON.parse(data.toString())
        j.forEach(element => {
            console.log('elem:', element);            
        });
    })
}
//func131();


const func132 = () => {
    const fs = require('fs');

    fs.writeFile('./hello.txt', 'hello', ()=>{
        renameFile(from, to);
    });

    const renameFile = (from, to)=>{
        fs.rename(from, to, (err)=>{
            if (err) console.log(`ERROR: ${err}`);
        })
    }

    const from = './hello.txt';
    const to = './bye.txt';

}

// func132();


