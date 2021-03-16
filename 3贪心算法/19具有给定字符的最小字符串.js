/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * leetcode 1663
 */
var getSmallestString = function(n, k) {

    let s = ''
    for (let i = 1; i <= n; i++) {
        for (let charPos = 1; charPos <= 26; charPos++) {
            // 取每一位的判断条件
            if (k - charPos <= (n - i) * 26) {
                k = k - charPos
                s += String.fromCharCode(96 + charPos)
                break
            }
        }
    }

    return s

};