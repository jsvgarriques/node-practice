const EventEmitter =  require('events');
// const emitter = new EventEmitter();

let url = "http://mylogger.io./log";

class Logger extends EventEmitter {

    log(message) {
        //send an HTTP REQUEST
        console.log(message);
    

    // raise an event
    this.emit('messageLogged', {id :1, url :'http://'});
    }
}

//  export LOGGER as a class
module.exports = Logger


// module.exports.log = log;/to export as an object/

// module.exports = log //exports as a function//


// function sayHello(name) 
//     { console.log("hello" + " "+name )
//     };

//     sayHello('Jason');

// module.exports.sayHello = sayHello;