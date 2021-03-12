/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * leetcode 605
 */
var canPlaceFlowers = function(flowerbed, n) {

    var rest = n
        // 直接首末添上0,这样就不要判断边界条件了
        // 
    flowerbed.unshift(0)
    flowerbed.push(0)
    for (let i = 1; i < flowerbed.length - 1; i++) {
        // 间隔都为0，则可以插花
        if (flowerbed[i - 1] == 0 && flowerbed[i] == 0 && flowerbed[i + 1] == 0) {
            flowerbed[i] = 1
            rest--
        }
    }

    return rest <= 0

};