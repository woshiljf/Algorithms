/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount, res = Infinity) {

    coins.sort((a, b) => b - a)

    const dfs = function(amount, index, count) {

        if (amount == 0) return res = Math.min(res, count)

        if (index == coins.length) return
            //   面值取整，面值递归循环减少。
        for (var n = amount / coins[index] | 0; count + n < res && n >= 0; n--) {

            dfs(amount - n * coins[index], index + 1, count + n)

        }
    }

    dfs(amount, 0, 0)
    return res === Infinity ? -1 : res
};