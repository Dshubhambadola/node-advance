//process.env.UV_THREADPOOL_SIZE = 2  // decreasing the size of threadpool from default size of 4
process.env.UV_THREADPOOL_SIZE = 5  // increasing the size of threadpool

// Increasing and decreasing the size of threadpool give the diffrent result in complication of task

const crypto = require('crypto');
const start = Date.now();
crypto.pbkdf2('a','b',100000,512,'sha512',() =>{
  console.log('1:' , Date.now() - start); // returns 647 on local
  })
  crypto.pbkdf2('a','b',100000,512,'sha512',() =>{
    console.log('2:' , Date.now() - start); // returns 646 on local
    })
    crypto.pbkdf2('a','b',100000,512,'sha512',() =>{
      console.log('3:' , Date.now() - start); // returns 646 on local
      })
      crypto.pbkdf2('a','b',100000,512,'sha512',() =>{
        console.log('4:' , Date.now() - start); // returns 646 on local
        })
        crypto.pbkdf2('a','b',100000,512,'sha512',() =>{
          console.log('5:' , Date.now() - start); // returns 646 on local
          })


//Checking for the threads run and see the small pause on the 5th console

    //Is node really single threaded .......
