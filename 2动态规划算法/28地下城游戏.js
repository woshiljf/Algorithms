/**
 * @param {number[][]} dungeon
 * @return {number}
 * leetcode 174
 */
var calculateMinimumHP = function(dungeon) {

    if (dungeon.length == 0) return 0

    var dp = []
        // 这道题的精髓部分不是从左上角到右下角进行动态规划的求解。
        // 应该从右下角到左上角的求解
    for (let i = 0; i < dungeon.length; i++) {
        // 初始化动态规划数组dp，数组初始值为0
        var temp = new Array(dungeon[0].length).fill(0)
        dp.push(temp)
    }

    var row = dp.length
    var column = dp[0].length
        // 右下角的初始应该需要多少的血量，这里一直和1做比较的原因是，应该至少要1滴血量
    dp[row - 1][column - 1] = Math.max(1, 1 - dungeon[row - 1][column - 1])

    // 计算最后一行的所需要的dp血量
    for (let i = column - 2; i >= 0; i--) {
        // 前一个值所需要的血量的dp-当前的需求量
        dp[row - 1][i] = Math.max(1, dp[row - 1][i + 1] - dungeon[row - 1][i])


    }
    for (let i = row - 2; i >= 0; i--) {

        dp[i][column - 1] = Math.max(1, dp[i + 1][column - 1] - dungeon[i][column - 1])


    }

    for (let i = row - 2; i >= 0; i--) {

        for (let j = column - 2; j >= 0; j--) {

            // 当前需要的最少血量，当前的右边和下边值的最小血量，与当前的血量只差
            var dp_min = Math.min(dp[i + 1][j], dp[i][j + 1])
            dp[i][j] = Math.max(1, dp_min - dungeon[i][j])


        }

    }

    return dp[0][0]


};