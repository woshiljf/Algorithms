/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function(nums1, nums2) {

    var s1 = sum(nums1)
    var s2 = sum(nums2)

    if (s1 == s2) return 0

    if (s1 > s2) {
        return minOperations(nums2, nums1)
    }
    var diff = s2 - s1
    var freq = new Array(6).fill(0)
    for (let n of nums1) {
        ++freq[6 - n]
    }
    for (let n of nums2) {
        ++freq[n - 1]
    }

    var ans = 0
    for (let i = 5; i >= 1 && diff > 0; --i) {

        while (freq[i] && diff > 0) {
            ++ans
            --freq[i]
            diff -= i
        }

    }

    return (diff > 0 ? -1 : ans)


};



function sum(arr) {
    var s = 0
    arr.forEach((item) => {
        s += item
    })
    return s
}