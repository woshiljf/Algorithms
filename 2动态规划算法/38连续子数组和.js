/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * leetcode 523
 * 给定一个包含 非负数 的数组和一个目标 整数 k ，
 * 编写一个函数来判断该数组是否含有连续的子数组，
 * 其大小至少为 2，且总和为 k 的倍数，即总和为 n * k 
 * ，其中 n 也是一个整数。

设位置 j < i : 
0 到 j 的前缀和 preSum1 = 某常数1 * k + 余数1
0 到 i 的前缀和 preSum2 = 某常数2 * k + 余数2
当找到 余数1 等于 余数2时， 则 j + 1 到 i 的连续和 = preSum2 - preSum1 = (某常数2 - 某常数1) * k， 必为 k 的倍数， 返回true
 */
var checkSubarraySum = function(nums, k) {

    var map = new Map()

    map.set(0, -1)

    var sum = 0
    for (let i = 0; i < nums.length; i++) {

        sum += nums[i]
        if (k != 0) {

            sum = sum % k
        }
        if (map.has(sum)) {

            if (i - map.get(sum) > 1) return true


        } else {

            map.set(sum, i)
        }

    }

    return false



};