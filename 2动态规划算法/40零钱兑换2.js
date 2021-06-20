/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {


  var dp = new Array(amount + 1).fill(0)

  dp[0] = 1

  for (let i = 0; i < coins.length; i++) {

    for (let x = 0; x <= amount; x++) {

      if (x < coins[i]) continue

      dp[x] = dp[x] + dp[x - coins[i]]

    }

  }

  return dp[amount]

}