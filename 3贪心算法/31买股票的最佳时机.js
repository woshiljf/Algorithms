/**
 * @param {number[]} prices
 * @return {number}
 * leetcode 122
 */
var maxProfit = function (prices) {

  let amount = 0
  let minP = prices[0]  // 7
  for (let i = 1; i < prices.length; i++) {
    let p = prices[i]  // 1
    // 买入
    if (p < minP) {
      minP = p  // minP 1
    } else {
      let t = p - minP
      amount += t
      minP = p
    }
  }

  return amount
};