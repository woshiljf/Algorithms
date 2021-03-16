/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    var amount = 0
    var leftMax = 0,
        rigthMax = 0
    for (let i = 0; i < height.length; i++) {

        if (i == 0) {
            leftMax = height[i]
            rigthMax = Math.max(height.slice(i + 1))
            continue
        }
        rigthMax = Math.max(...height.slice(i + 1))
        var temp = Math.min(leftMax, rigthMax)
        if (leftMax < height[i]) {
            // 这样每次都会记得左边的最大值，而不用每次到一个点，都重新求左右两边的最大值进行比较了
            leftMax = height[i]
        }
        amount += (temp - height[i]) > 0 ? (temp - height[i]) : 0
    }
    return amount

};



var res = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
console.log(res);