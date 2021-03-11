/**
 * @param {character[][]} grid
 * @return {number}
 * leetcode 200
 */
var numIslands = function(grid) {


    var result = 0

    for (let row = 0; row < grid.length; row++) {

        for (let col = 0; col < grid[0].length; col++) {

            if (grid[row][col] == 1) {
                dfs(row, col)
                result++
            }

        }
    }

    function dfs(row, col) {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] == 0) {
            return 0
        }

        grid[row][col] = 0
        dfs(row - 1, col)
        dfs(row + 1, col)
        dfs(row, col - 1)
        dfs(row, col + 1)
    }

    return result
};