var arr = [
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0],
]

var maximalSquare = function(matrix) {
    var maxSideLength = 0
    var dp = new Array(matrix.length)

    for (let i = 0; i < matrix.length; i++) {
        dp[i] = new Array(matrix[0].length).fill(0)
    }

    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[i].length; j++) {
            if (matrix[i][j] == 1) {
                if (i == 0 || j == 0) {
                    dp[i][j] = 1
                } else {
                    // 动态规划转移方程，有点类似找规律的感觉
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                }
            }

            maxSideLength = Math.max(maxSideLength, dp[i][j])
        }
    }

    return maxSideLength * maxSideLength
}

var s = maximalSquare(arr)
console.log(s)