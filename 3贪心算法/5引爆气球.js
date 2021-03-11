/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {

    if (points.length == 0) return 0
    points.sort((a, b) => a[0] - b[0])
    var count = 1
    var shoot_s = points[0][0]
    var shoot_e = points[0][1]

    for (let i = 1; i < points.length; i++) {

        // 没有想到这样更新区间。左右区间之间得更替
        if (points[i][0] <= shoot_e) {

            shoot_s = points[i][0]

            if (shoot_e > points[i][1]) {
                shoot_e = points[i][1]
            }


        } else {
            count++
            shoot_s = points[i][0]
            shoot_e = points[i][1]
        }
    }

    return count


};

var points = [
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8]
]
var count = findMinArrowShots(points)
console.log(count);