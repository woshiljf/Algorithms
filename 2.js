/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {


    var map = new Map()
    for (let i = 0; i < numbers.length; i++) {
        var sub = target - numbers[i]
        if (map.get(numbers[i]) == undefined) {
            map.set(sub, i)
        } else {
            var f = map.get(numbers[i])
            return [f + 1, i + 1]
        }
    }
    return []
};

var numbers = [2, 7, 11, 15],
    target = 9

var re = twoSum(numbers, target)

console.log(re);