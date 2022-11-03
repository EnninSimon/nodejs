// const { readFileSync, writeFileSync } = require("fs");
// console.log('start');
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second);

// writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, { flag: 'a' })

// console.log('done with this task');
// console.log('starting the next one');

const { writeFile, readFile } = require('fs');
console.log('start');
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
            console.log('finish');
        })
    })
})

console.log('starting next one');

const { readFile, writeFile } = require("fs");

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is ouor short history');
    } else {
        res.end(`<p>page does not exist</p>
        
        <a href="/"> home page</a>
        `)
    }
});

server.listen(5000)