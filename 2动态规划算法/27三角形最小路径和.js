/**
 * @param {number[][]} triangle
 * @return {number}
 * leetcode 120
 */
var minimumTotal = function(triangle) {

    var dp = []

    for (let i = 0; i < triangle.length; i++) {
        var arr = new Array(triangle[i].length).fill(0)
        dp.push(arr)
    }

    for (let i = 0; i < dp.length; i++) {
        //从下往上走
        dp[dp.length - 1][i] = triangle[dp.length - 1][i]
    }

    // 从下往上走
    for (let i = dp.length - 2; i >= 0; i--) {

        for (let j = 0; j < dp[i].length; j++) {
            // 当前的的位置的最小值dp[i][j]表示的是当前的值triangle[i][j] +上一层位置的相邻节点与偏移的j+1相比较的最小dp
            dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]

        }


    }

    return dp[0][0]


};