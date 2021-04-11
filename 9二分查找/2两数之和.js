/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * leetcode 167
 */
var twoSum = function(numbers, target) {


    for (var i = 0; i < numbers.length; ++i) {
        var low = i + 1,
            high = numbers.length - 1;
        while (low <= high) {
            var mid = (high + low) >> 1

            if (numbers[mid] == target - numbers[i]) {

                return [i + 1, mid + 1]

            } else if (numbers[mid] > target - numbers[i]) {

                high = mid - 1;

            } else {
                low = mid + 1;
            }
        }
    }
    return [];

};