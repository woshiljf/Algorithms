/**
 * 
 * 给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。

注意:

num 的长度小于 10002 且 ≥ k。
num 不会包含任何前导零。
示例 1 :

输入: num = "01432219", k = 3
输出: "1219"
解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {

    var stack = []
    stack.push(num[0])
    for (let i = 1; i < num.length; i++) {
        var val = num[i]
        var stackTop = stack[stack.length - 1]
            // 重要的还是这里使用栈的思想（确实没想到，一开始）
        while (val < stackTop && k > 0 && stack.length >= 0) {
            stack.pop()
            stackTop = stack[stack.length - 1]
            k--
        }
        if (val !== '0') {
            stack.push(val)
        }
    }
    while (k) {
        stack.pop()
        k--
    }
    return stack.length == 0 ? '0' : stack.join('')
}

var str = removeKdigits('1432219', 3)
console.log(str);