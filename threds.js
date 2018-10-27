const crypto = require('crypto');

const start = Date.now();
crypto.pbkdf2('a','b',100000,512,'sha512',() =>{
  console.log('1:' , Date.now() - start); // returns 643 on local 
  })
