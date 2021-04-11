/**
 * @param {number[][]} grid
 * @return {number}
 * leetcode 695题目
 */
var maxAreaOfIsland = function(grid) {

    var result = 0
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] == 1) {
                var count = dfs(row, col)
                result = Math.max(count, result)
            }
        }
    }

    function dfs(row, col) {
        // 判断边界条件，防止越界
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] == 0) {
            return 0
        }
        // 访问过的点，都置为0
        grid[row][col] = 0
        let count = 1
            // 上下左右4个方向搜索，叠加
        count += dfs(row - 1, col)
        count += dfs(row + 1, col)
        count += dfs(row, col - 1)
        count += dfs(row, col + 1)
            // 直至返回
        return count

    }

    return result

};
var arr = [
    [1, 1, 1, 0, 1, 1],
    [0, 1, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1],
]
var res = maxAreaOfIsland(arr)
console.log(res);