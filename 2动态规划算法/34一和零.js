/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {

    // m:表示0的个数,n表示1的个数
    // 这道题就是0/1背包问题的变种，背包问题是一个容量，去选择多少物品
    // 这道题是两种容量，m,n表示能装0和1的容量，现在的问题就算，如何选择0和1存放，然后到达最大值
    // 这里必须使用两层循环，也就是0和1进行一一的匹配，算出匹配的最大值
    var dp = []
    for (let i = 0; i <= m; i++) {
        var temp = new Array(n + 1).fill(0)
        dp.push(temp)
    }
    for (let i = 0; i < strs.length; i++) {
        var s = strs[i]
            // 算出每一个字符串中0和1的数量
        var count = countoneandzero(s);
        // 0和1组合匹配，dp[]记录每一层拼接的的最大容量
        for (var zeroes = m; zeroes >= count[0]; zeroes--)
            for (var ones = n; ones >= count[1]; ones--)
            // 这里没有价值，统一价值为1
                dp[zeroes][ones] = Math.max(1 + dp[zeroes - count[0]][ones - count[1]], dp[zeroes][ones]);
    }

    return dp[m][n]

};

function countoneandzero(strs) {

    var count0 = 0
    var count1 = 0
    for (var j = 0; j < strs.length; j++) {
        if (strs[j] == '1') {
            count1++
        } else {
            count0++
        }
    }

    return [count0, count1]
}