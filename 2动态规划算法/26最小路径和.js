/**
 * @param {number[][]} grid
 * @return {number}
 * leetcode 64
 */
var minPathSum = function(grid) {
    // 首先明确dp[i][j]是什么
    // dp[i][j]表示从dp[i-1][j] 或者dp[i][j-1] （也就是文中说的只能往下，或者往右）加上
    // 加上自身的数grid[i][j]所得到的值，其中，要选取有dp[i-1][j]和dp[i][j-1]两者最小值
    // 加上自身grid[i][j]才能表示dp[i][j]的最小值

    // 首先初始化dp
    var dp = []
        // 先让dp变为二位数组
    for (let i = 0; i < grid.length; i++) {
        //  初始化dp[i][j]都为0
        var temp = new Array(grid[0].length).fill(0)
        dp.push(temp)
    }
    // 遍历元素
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            // 如果当前i==0并且j==0表示当前的最小值只能是自生元素
            if (i == 0 && j == 0) {
                dp[i][j] = grid[i][j]
            }
            // 如果i==0，表式的是第一行，只能往右走的时候
            if (i == 0 && j !== 0) {
                dp[i][j] = grid[i][j] + dp[i][j - 1]
            }
            // 表示第一列，只能往下走的时候
            if (i !== 0 && j == 0) {
                dp[i][j] = grid[i][j] + dp[i - 1][j]
            }

            if (i !== 0 && j !== 0) {

                //    表示选取从上到当前位置或者从左边到当前位置选取最小的dp，加上自身
                dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])


            }





        }



    }

    return dp[i - 1][j - 1]






};