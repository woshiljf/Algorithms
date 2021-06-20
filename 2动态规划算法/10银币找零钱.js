/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

  // dp[i] 表示
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        // 需要的最少的硬币量，
        // 当 i -coin 大于0，表示当前的钱大于银币，可以使用银币累计起来等于i，看怎么使用最少
        // 当前最少的硬币dp[i]，应该等于当前dp[i],和剩余的钱i-coin所需要的加1，进行比较
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];

};