/**
 * @param {number[][]} points
 * @return {number}
 * leetcode
 */
var findMinArrowShots = function (points) {

  if (points.length == 0) return 0
  points.sort((a, b) => a[1] - b[1])

  var count = 1
  // 末尾气球的位置
  var pre = points[0][1]
  for (let i = 1; i < points.length; i++) {
    //    当第二个气球的开始边界已经大于第一个气球的结束边界，开始射箭
    if (points[i][0] > pre) {
      count++
      pre = points[i][1]
    }
  }

  return count

};