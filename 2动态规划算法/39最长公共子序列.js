/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {

  var m = text1.length, n = text2.length

  // 构造dp矩阵
  // dp[i][j]  表示text1 和text2 子字符串长度为i和j，这两个子序列的最长公共序列的长度
  var dp = new Array(m + 1).fill(0)

  for (let i = 0; i < dp.length; i++) {

    dp[i] = new Array(n + 1).fill(0)

  }
  // 当i 等于0 或者j等于0 ，也就是text1的子序列为空，或者text2子序列为空，最长公共子序列都为0
  for (let i = 1; i <= m; i++) {

    let s1 = text1[i - 1]

    for (let j = 1; j <= n; j++) {

      let s2 = text2[j - 1]

      if (s1 == s2) {
        // 当s1 等于s2，表示之前的子序列加上当前这字符，可以组成公共子序列的长度，之前的前缀子序列长度+1
        dp[i][j] = dp[i - 1][j - 1] + 1

      } else {
        // 不相等，求这两个前缀子序列的最大公共子序列的长度
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
      }


    }

  }

  return dp[m][n]


};