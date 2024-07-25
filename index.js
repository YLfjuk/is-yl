/**
 * @constant
 * @type {('yl' | 'fjuk' | 'ylfjuk')[]}
 *
 */
const YL = ['yl', 'fjuk', 'ylfjuk'];

/**
 * @param {unknown} str
 * @returns {str is YL[number]}
 */
function isYL(str) {
    return YL.includes(str);
}

module.exports = isYL;
