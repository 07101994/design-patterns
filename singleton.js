let instance = null;

class Logger {
    constructor(logger_name) {
        if (!instance) {
            this.name = logger_name;
            instance = this;
        } else {
            return instance;
        }
    }
}

const logger_1 = new Logger('Logger1');
const logger_2 = new Logger('Logger2');

console.log(logger_1); // Logger {name: 'Logger1'}
console.log(logger_2); // Logger {name: 'Logger1'}
