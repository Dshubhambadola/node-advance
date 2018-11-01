const express = require('express');
const app = express();  // setting up an express server for node clustring

function doWork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}   // Blocking event loop for some time (To prove that node is not good in handling computation intensive tasks)

app.get('/',(req,res) =>{
  doWork(7000); 
  res.send('Hi there')
});

app.listen(3000);
