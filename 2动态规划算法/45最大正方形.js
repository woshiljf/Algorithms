/**
 * @param {character[][]} matrix
 * @return {number}
 * leetcode 221
 */
var maximalSquare = function (matrix) {

  // 如果用暴力递归是否可以解决这个问题'

  let N = matrix.length
  let M = matrix[0].length

  let dp = new Array(N + 1)

  for (let i = 0; i <= N; i++) {
    dp[i] = new Array(M + 1).fill(0)
  }
  let maxLen = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      //    如果遇到了1的情况
      if (matrix[i][j] == '1') {

        if (i == 0 || j == 0) {

          dp[i][j] = 1

        } else {
          // 难以想到的点就是，如果从当前的1位置，去寻找，上一个，左一个，以及对角线的1,
          // 求最小值，加上当前的1
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
      }

      maxLen = Math.max(maxLen, dp[i][j])
    }


  }


  return maxLen * maxLen


};

