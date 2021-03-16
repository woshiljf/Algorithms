/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    //  dp[i]表示金额i 的最优解（即最小使用张数)

    // 金额i可由：
    // 金额i-1与coins[0] ==1 组合起来
    /** 
     * 金额i-2   coins[1]=2
     * 金额i-5   coins[2]=5
     * 金额i-7   coins[3]=7
     * 金额i-10  coins[4]=10
     * 
     * 
     */

    var dp = new Array(amount + 1).fill(-1)

    dp[0] = 0

    for (let i = 0; i <= amount; i++) {

        for (let j = 0; j < coins.length; j++) {
            //  表示面值coins[j]可以组成金额i
            if (i - coins[j] >= 0 && dp[i - coins[j]] !== -1) {

                if (dp[i] == -1 || dp[i] > dp[i - coins[j]] + 1) {

                    dp[i] = dp[i - coins[j]] + 1

                }

            }


        }



    }

    return dp[amount]













};