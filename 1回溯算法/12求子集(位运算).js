/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    var result = []
    var allset = 1 << nums.length
    for (let i = 0; i < allset; i++) {
        var item = []
        for (let j = 0; j < nums.length; j++) {
            //    这里的 1<<j 的1左移j位（j:0,1,2)，代表A,B,C，当A,B,C分别与集合allset进行位运算，真时，push进item
            if (i & (1 << j)) {
                item.push(nums[j])
            }
        }
        result.push(item)
        item = []
    }
    return result
};

var f = subsets([1, 2, 2])
console.log(f);