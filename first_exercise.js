require('./second_exercise.js');

const os = require('os')

const user = os.userInfo();
console.log(user);

console.log(os.type())

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)

const path = require('path');

console.log(path.sep); 

const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, '/content', 'subfolder', 'text.txt');
console.log('absolute:',absolute);

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, { flag: 'a'})

const { writeFile, readFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result
        writeFile('./content/result-new.txt', `This is a new result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})