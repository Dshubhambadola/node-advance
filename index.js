const express = require('express');
const app = express();  // setting up an express server for node clustring

app.get('/',(req,res) =>{
  res.send('Hi there')
});

app.listen(3000);
