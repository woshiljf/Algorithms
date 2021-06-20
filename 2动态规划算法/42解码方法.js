/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {

  // 动态规划
  // 类似于爬楼梯 每次取一个数，或者两个数
  // 每次取一个数
  // dp[i]  表示，从0-i个字符所组成的最多组合个数

  // 当每次只取一个字符时： 第i个字符的个数为dp[i] = dp[i] + dp[i-1] 的个数
  // 当每次取两个字符的时候，dp[i] = dp[i] + dp[i-2]
  let len = s.length

  const dp = new Array(len + 1).fill(0)

  dp[0] = 1

  for (let i = 1; i <= len; i++) {

    // 这里需要判断的是，单个字符不能有0
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1]
    }

    let temp = (s[i - 2] - 0) * 10 + (s[i - 1] - 0)
    // 第i个字符： 其中 i-2个字符也不能为0
    if (i > 1 && s[i - 2] !== '0' && temp <= 26) {

      dp[i] += dp[i - 2]

    }

  }

  return dp[len]



};