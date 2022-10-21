// function sayHello(name) 
//     { console.log("hello" + " "+name )
//     };

//     sayHello('Jason');
// console.log(module);
// const log = require('./logger');
// log("test")
// -----PATH-----
// const path = require('path');

// const pathObj = path.parse(__filename);
// console.log(pathObj)
// -----OS-----
// const os = require('os')
// const totalMemory = os.totalmem
// const freeMem= os.freemem
// console.log(`total memory : ${totalMemory}`,`free  memory : ${freeMem}`);
// -----FILE SYSTEM-----
// const fs =require('fs');

// const files = fs.readdirSync('./');
// console.log(files);
// fs.readdir('./', function(err, files)
//     {
//     if (err)console.log('ERROR',err);
//     else 
//         console.log('RESULT', files);
//     }
// );
// const EventEmitter =  require('events');
// const emitter = new EventEmitter(); replaced by logger
const Logger = require('./logger')// brings in the class from logger.js
const logger = new Logger//creates an object called logger

// register a listener
logger.on('messageLogged',(arg) => 
    {
        console.log("listner called", arg)
    });



logger.log('message')
// // test
// const logging = new EventEmitter ();
// logging.on('loggingHeard',(arg) => 
//     {
//         console.log('logging called', arg)
//     }
// );

// logging.emit('loggingHeard',{id : 2, data: "message"});
