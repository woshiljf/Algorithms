/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {

    if (points.length == 0) return 0

    // 首先是进行排序
    points.sort((a, b) => a[1] - b[1])
    console.log(points)
    var count = 1
        // 末尾气球的位置
    var pre = points[0][1]
    for (let i = 1; i < points.length; i++) {

        if (points[i][0] > pre) {
            count++
            pre = points[i][1]
        }
    }

    return count

};