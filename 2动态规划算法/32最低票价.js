/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {

    // 定义一个记忆数组，保存之前计算过的最低票价
    var memo = new Array(366).fill(0)
        //  设置一个数据类型set，查看1-365天中，是否有我们出行的日期
    var daySet = new Set(days)

    function help(i) {

        if (i > 365) return 0
            // 如果当前的出行日期的最低票价已经计算过来，直接返回
        if (memo[i] !== 0) return memo[i]
            // 如果有我们要出现的日期
        if (daySet.has(i)) {
            // 此时，我们可以选择买1天的通行证，7天的通行证，30的通行证，因此我们考虑i+j(j:1,7,30)天后的价格就行
            // 递归取最小值
            memo[i] = Math.min(Math.min(help(i + 1) + costs[0], help(i + 7) + costs[1]), help(i + 30) + costs[2])

        } else {
            // 如果没有出现的日子，当前的最低票价，等于后一天的票价
            memo[i] = help(i + 1)
        }

        return memo[i]

    }

    return help(1)


};

var days = [1, 4, 6, 7, 8, 20],
    costs = [2, 7, 15]

var res = mincostTickets(days, costs)
console.log(res);