/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    var len = grid.length
    var mark = []
    var count = 0
    for (let i = 0; i < len; i++) {
        var temp = new Array(grid[0].length).fill(0)
        mark.push(temp)
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // 只有当发现了岛屿1，并且这个位置没有被标记过
            if (grid[i][j] == '1' && mark[i][j] == 0) {
                DFS(mark, grid, i, j)
                count++
            }

        }
    }
    return count

};

function DFS(mark, grid, x, y) {
    var dx = [-1, 1, 0, 0]
    var dy = [0, 0, -1, 1]
        // 把要搜索的位置放入队列
    mark[x][y] = 1
        // 队列不为空，则进行搜索
    for (let i = 0; i < 4; i++) {
        var nexX = x + dx[i]
        var nexY = y + dy[i]
        if (nexX < 0 || nexX >= grid.length || nexY < 0 || nexY >= grid[0].length) {
            continue
        }
        if (mark[nexX][nexY] == 0 && grid[nexX][nexY] == '1') {
            DFS(mark, grid, nexX, nexY)
        }
    }
}

var grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "0", "0", "1", "0"],
    ["0", "1", "0", "0", "0"],
    ["0", "0", "0", "1", "0"]
]


var res = numIslands(grid)

console.log(res);