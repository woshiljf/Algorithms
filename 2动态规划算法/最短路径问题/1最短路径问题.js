/**
 * 从左上角到右下下角，路径之和最小。最短路径规划的题目。简单题目
 * 3 3
       1 3 1
       1 5 1
       4 2 1
 * 
 */

var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
var res = fn(arr)
console.log(res)

function fn(grid) {
    var n = grid.length
    var m = grid[0].length

    var dp = Array.from(new Array(n), () => new Array(m))

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (i == 0 && j == 0) {
                dp[i][j] = grid[i][j]
            } else if (i == 0 && j !== 0) {
                dp[i][j] = dp[i][j - 1] + grid[i][j]
            } else if (i !== 0 && j == 0) {
                dp[i][j] = dp[i - 1][j] + grid[i][j]
            } else {
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j]
            }
        }
    }
    return dp[n - 1][m - 1]
}