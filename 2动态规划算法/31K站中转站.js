/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 * leetcode 787
 */


var findCheapestPrice = function(n, flights, src, dst, K) {

    var dp = new Array(K)

    //  首先搞清楚dp[k][dst]表示的是什么意思，表示的是经过K次中转到达dst目的地所需要的最少费用

    for (let i = 0; i < n; i++) {
        // 初始化dp，让每一个dp的值都为Infinity
        var temp = new Array(n).fill(Infinity)
        dp.unshift(temp)
    }
    // 找到初始src的航班，表示从src不需要中转，就可以直达的航班
    for (let i = 0; i < flights.length; i++) {
        if (flights[i][0] == src) {
            // flight[i][0]表示初始化航班
            var f1 = flights[i][1] // 表示直达的航班
            var f2 = flights[i][2] // 表示直达航班的费用
                // dp[0][f1]表示不需要中转，记录直达航班的费用dp
            dp[0][f1] = f2
        }
    }
    for (let i = 0; i < K + 1; i++) {
        // 初始化，起始点的航班费用
        dp[i][src] = 0
    }

    for (let i = 1; i < K + 1; i++) {

        for (let j = 0; j < flights.length; j++) {

            if (dp[i - 1][flights[j][0]] !== Infinity) {
                // 状态方程：i次中转到达d站的最便宜的价格 = （i-1次到达S站的dp价格+s站到达d站的价格，与i次到达d站的dp价格）去最小值
                dp[i][flights[j][1]] = Math.min(dp[i - 1][flights[j][0]] + flights[j][2], dp[i][flights[j][1]]);

            }



        }



    }

    return dp[K][dst] !== Infinity ? dp[K][dst] : -1


}


var n = 3,
    edges = [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500]
    ]
src = 0, dst = 2, k = 1
var res = findCheapestPrice(n, edges, src, dst, k)
console.log(res);