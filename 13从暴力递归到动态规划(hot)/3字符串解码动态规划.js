/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {

  // 使用动态规划去解决这个问题

  let size = s.length

  let dp = new Array(size + 1).fill(1)
  for (let i = size - 1; i >= 0; i--) {

    if (s[i] == '0') {
      dp[i] = 0
    }

    else if (s[i] == '1') {
      dp[i] = dp[i + 1]

      if (i + 1 < s.length) {
        dp[i] += dp[i + 2]
      }
    } else if (s[i] == '2') {

      dp[i] = dp[i + 1]

      if (i + 1 < s.length && s[i + 1] >= '0' && s[i + 1] <= '6') {
        dp[i] += dp[i + 2]
      }


    } else {
      dp[i] = dp[i + 1]
    }


  }

  return dp[0]



};