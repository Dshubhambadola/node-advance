// weird node behavior

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
const start = Date.now();

function doRequest() {
  https.request('https://www.google.com',res =>{
    res.on('data',() =>{})
    res.on('end',() =>{
      console.log(Date.now() - start);
    });
  }).end()
}

function dohash() {
  crypto.pbkdf2('a','b',100000,512,'sha512',() =>{
    console.log('Hash:' , Date.now() - start); // returns 647 on local
    })
}


doRequest();

fs.readFile('multitask.js','utf8',() =>{
  console.log('FS', Date.now() - start);
})

dohash();
dohash();
dohash();
dohash();

// So when we run the program first console will be the http request console
// because it does not touch the threadpool it uses OS level async helpers to execute parallely
// second will be the first hash console because crypto lib use threadpool to execute
// third will be the fs ,fs also use the threadpool remember by default only 4 threads are avalabile in a threadpool
//4th,5th,6th will be the hash console

// Things to notice

// fileread function suppose to be fast cause its just reading from a file
//OS level exectuation will always perform faster then function using threadpool

// Why File read  is slower?
// There are only 4 thread and there are 5 functions which are using threads
// file read requires a pause beacuse of some acknowlagements perform under the hood of fs lib
// because of these pause and number of thread avalabile it is slower in this senario
