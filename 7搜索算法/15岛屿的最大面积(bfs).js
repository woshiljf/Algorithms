/**
 * @param {character[][]} grid
 * @return {number}
 * leetcode 200 岛屿的数量
 */
var numIslands = function (grid) {


  var result = 0
  // 这个属于搜索算法的问题，可以使用dfs或者bfs都可以解决这一类的问题
  var colows = grid.length
  var rows = grid[0].length

  for (let i = 0; i < colows; i++) {

    for (let j = 0; j < rows; j++) {
      // 如果遇到了岛屿1
      if (grid[i][j] === '1') {
        // 走一个深度遍历的算法
        bfs(i, j, grid)
        // 走完了一次遍历，表示从i,j往四个方向扩散的岛屿的遍历完了,所以，岛屿数量result++
        result++


      }


    }


  }


  return result

};

// 使用广度的方式进行搜索
function bfs (x, y, grid) {

  // 广度的方式使用队列来存储标记的位置

  //    四个方向
  var dx = [1, -1, 0, 0]
  var dy = [0, 0, 1, -1]
  grid[x][y] = '0'

  var queue = []
  queue.push([x, y])

  while (queue.length) {
    // 走四个方向进行广度的遍历
    var [x1, y1] = queue.shift()
    for (let i = 0; i < 4; i++) {
      var newX = x1 + dx[i]
      var newY = y1 + dy[i]
      // 判断边界
      if (newX < 0 || newX >= grid.length || newY < 0 || newY >= grid[0].length || grid[newX][newY] === '0') {
        continue
      }
      if (grid[newX][newY] === '1') {
        grid[newX][newY] = '0'
        queue.push([newX, newY])
      }
    }



  }










}








function dfs (x, y, grid) {

  // 首先判断一下边界的情况
  if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === '0') {
    return
  }

  // 将访问过的岛屿变为0，表示这个岛屿已经访问过了，防止循环遍历
  grid[x][y] = '0'
  // 往四个方向进行扩散搜索
  dfs(x + 1, y, grid)
  dfs(x - 1, y, grid)
  dfs(x, y + 1, grid)
  dfs(x, y - 1, grid)



}


var grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]

var res = numIslands(grid)

console.log(res);