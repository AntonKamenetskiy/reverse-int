
module.exports = function reverse (n) {
    let new_n = n.toString().match(/[0-9]/g);
    let resultStr = '';
    for (let i = new_n.length - 1; i >=0 ; i--) {
        resultStr += new_n[i];
    }
    let resultNum = Number(resultStr);
    return resultNum;
}
