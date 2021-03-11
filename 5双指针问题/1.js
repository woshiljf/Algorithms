// leetcode 第三题

var lengthOfLongestSubstring = function(s) {
    var set = new Set()
        // 双指针的方式去解题
    var maxlength = 0,
        i = 0,
        j = 0
    for (; i < s.length; i++) {
        if (!set.has(s[i])) {
            set.add(s[i])
            maxlength = Math.max(maxlength, set.size)
        } else {
            while (set.has(s[i])) {
                set.delete(s[j])
                j++
            }
            set.add(s[i])
        }
    }
    return maxlength
}