/**
 * @param {character[][]} grid
 * @return {number}
 * leetcode 200 岛屿的数量
 */
var numIslands = function(grid) {


    var result = 0
        // 遍历这个岛屿
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] == 1) {
                dfs(row, col)
                    // 深度遍历完，岛屿的数量的++
                result++
            }

        }
    }

    function dfs(row, col) {
        // 边界条件，如果上下左右的边界到达边界了，就返回
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] == 0) {
            return
        }
        // 让遍历过的岛屿（1）变位海水（0）
        grid[row][col] = 0
            // 上下左右四个方向继续搜索
        dfs(row - 1, col)
        dfs(row + 1, col)
        dfs(row, col - 1)
        dfs(row, col + 1)
    }
    console.log(grid);
    return result
};
var grid = [
    ["2", "2", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "2", "0", "0"],
    ["0", "0", "0", "1", "0"]
]
var r = numIslands(grid)
console.log(r);