const crypto = require('crypto');

const start = Date.now();
crypto.pbkdf2('a','b',100000,512,'sha512',() =>{
  console.log('1:' , Date.now() - start); // returns 647 on local
  })
  crypto.pbkdf2('a','b',100000,512,'sha512',() =>{
    console.log('2:' , Date.now() - start); // returns 646 on local
    })


    //Is node really single threaded .......
