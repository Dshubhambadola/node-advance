// To benchmark the time taken by node lib to fetch URL
const https = require('https');
const start = Date.now();


function doRequest() {
  https.request('https://www.google.com',res =>{
    res.on('data',() =>{})
    res.on('end',() =>{
      console.log(Date.now() - start);
    });
  }).end()
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();


// So on an OS level task node libuv file take a help of OS async helpers to perform
// the task in a parallel manner

// As a result all the Task are done parallel and without using a threadpool
