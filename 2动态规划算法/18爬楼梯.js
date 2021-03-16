/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    // 尾调用来解决
    if (n <= 2) return n

    return ftml(1, 1, n)



};

function ftml(a, b, n) {

    if (n == 0) return a
    return ftml(b, a + b, n - 1)

}