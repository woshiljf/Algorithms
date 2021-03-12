/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 * leetcode 1578
 */
var minCost = function(s, cost) {

    var count = 0
    var stack = [],
        stackCost = []
    stack.push(s[0])
    stackCost.push(cost[0])
    for (let i = 1; i < s.length; i++) {
        var s1 = s[i]
        if (s1 !== stack[stack.length - 1]) {
            //  相邻的元素不相同的时候，直接入栈就行
            stack.push(s1)
            stackCost.push(cost[i])
        } else {
            //相邻元素相等。也就是栈顶元素和当前的元素相等
            var c2 = stackCost[stackCost.length - 1]
                // 栈顶元素的花费比s1的花费要少,弹出栈顶元素和弹出花费
            if (c2 < cost[i]) {
                count += c2
                stack.pop()
                stackCost.pop()
                    // 把新的元素和划分入栈
                stack.push(s1)
                stackCost.push(cost[i])
            } else {
                // 直接花费累加，不入栈
                count += cost[i]
                continue
            }
        }

    }

    return count





};