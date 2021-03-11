/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 376
 */
var wiggleMaxLength = function(nums) {

    if (nums.length < 2) return nums.length

    var temp = nums[0]
    var count = 1
        // 状态转移，上和下摆动
    var up = true
    var down = true
    for (let i = 1; i < nums.length; i++) {

        var num = num[i]

        if (num > temp) {
            temp = num
            if (up) {
                up = false
                count++
                down = true
            }

        }
        if (num < temp) {
            temp = num

            if (down) {

                down = false
                count++
                up = true


            }


        }



    }
    return count



};