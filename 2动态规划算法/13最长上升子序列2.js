/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

    let n = nums.length
    if (!n) return 0;
    var stack = []
    stack.push(nums[0])
    for (let i = 0; i < nums.length; i++) {


        if (nums[i] > stack[stack.length - 1]) {
            stack.push(nums[i])
        } else {

            for (let j = 0; j < stack.length; j++) {

                if (stack[j] >= nums[i]) {
                    stack[j] = nums[i]
                    break
                }


            }


        }



    }
    return stack.length




};