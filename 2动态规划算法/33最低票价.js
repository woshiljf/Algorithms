/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {

    var len = days.length,
        maxDay = days[len - 1],
        minDay = days[0]

    var dp = new Array(maxDay + 31).fill(0)

    for (var d = maxDay, i = len - 1; d >= minDay; d--) {
        // i 表示 days 的索引
        // 也可提前将所有 days 放入 Set，再通过 set.contains() 判断
        if (d == days[i]) {
            dp[d] = Math.min(dp[d + 1] + costs[0], dp[d + 7] + costs[1]);
            dp[d] = Math.min(dp[d], dp[d + 30] + costs[2]);
            i--; // 别忘了递减一天
        } else dp[d] = dp[d + 1]; // 不需要出门
    }
    return dp[minDay]; // 从后向前遍历，返回最前的 minDay




};