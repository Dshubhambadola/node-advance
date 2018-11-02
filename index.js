
process.env.UV_THREADPOOL_SIZE = 1  // just to know how clustring work with single and multihread 
const cluster = require('cluster');
// Is the file being executed in master mode?
if (cluster.isMaster){
  // Causes index.js to executed in *again* in child mode
  cluster.fork();
  //cluster.fork(); // To run node server in a cluster mode
}else {
  // Im a child  , Im act like a server
  const express = require('express');
const app = express();  // setting up an express server for node clustring
const crypto = require('crypto');


app.get('/',(req,res) =>{
  crypto.pbkdf2('a','b',100000,512,'sha512',() =>{
    res.send('Hi there')
    })

});

app.get('/fast',(req,res) =>{
res.send('This is fast')
});

app.listen(3000);
};
