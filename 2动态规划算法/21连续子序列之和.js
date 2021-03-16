function fn(nums) {

    var max = nums[0]
    var sum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        var n = nums[i]
            // 如果当前的元素num[i]之前的和小于0，则丢弃当前元素之前的和
        if (sum < 0) {
            sum = n
            max = Math.max(max, sum)
        } else if (sum >= 0) {
            sum += n
            max = Math.max(max, sum)
        }
    }
}