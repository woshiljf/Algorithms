/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {


    var amount = 0

    for (let i = 0; i < height.length; i++) {

        var max = getleftAndRightMax(i, height)
        amount += (max - height[i]) > 0 ? (max - height[i]) : 0

    }
    return amount

};

function getleftAndRightMax(index, height) {

    var leftarr = height.slice(0, index)
    var rightarr = height.slice(index + 1)
    var maxl = Math.max(...leftarr)
    var maxr = Math.max(...rightarr)
    return Math.min(maxl, maxr)



}

var res = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
console.log(res);