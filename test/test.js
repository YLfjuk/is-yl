const isYL = require('@ylfjuk/is-yl');

/**
 * @constant
 * @type {string}
 */
const yl = 'yl';

const notYL = 'ndisdghduijds';

function printYL(str) {
    if (isYL(str)) {
        console.log('YL!', str);
    } else {
        console.log('Not YL!', str);
    }
}

printYL(yl);
printYL(notYL);
