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
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] == 0) {
            return 0
        }

        grid[row][col] = 0
        let count = 1

        count += dfs(row - 1, col)
        count += dfs(row + 1, col)
        count += dfs(row, col - 1)
        count += dfs(row, col + 1)
        return count

    }

    return result

};