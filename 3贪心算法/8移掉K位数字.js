/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 * leetcode 402
 */
var removeKdigits = function(num, k) {

    // 这道题用到的数据结构是栈,
    var stack = []
    var m = k
    stack.push(num[0])

    for (let i = 1; i < num.length; i++) {
        // 遍历获取字符串中的每一个元素
        var val = num[i]
            // 如果栈顶的元素大于val，则弹出栈顶元素，这是k--，表示以去掉一个元素
        while (val < stack[stack.length - 1] && stack.length >= 0 && k) {
            stack.pop()
            k--
        }
        stack.push(val)

    }

    while (stack[0] == '0') {
        stack.shift()
    }
    while (k) {
        stack.pop()
        k--
    }

    return stack.length == 0 ? '0' : stack.join('')



};