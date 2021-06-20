
function way4 (arr, target) {

  if (arr == null || arr.length == 0 || target < 0) {
    return 0
  }

  let N = arr.length
  let dp = new Array(N + 1).fill(0)
  // 初始化dp数组
  for (let i = 0; i <= N; i++) {
    dp[i] = new Array(target + 1).fill(0)
  }

  dp[N][0] = 1



  // 从下往上推，一直推到 [0][target]的位置
  for (let index = N - 1; index >= 0; index--) {

    // 行从下往上
    // 列从左往右
    for (let rest = 0; rest <= target; rest++) {

      // 当前位置，依赖于同一个位置，（这里需要结合暴力递归来进行解释)
      dp[index][rest] = dp[index + 1][rest]

      // 如果rest-arr[index] 没有越界
      if (rest - arr[index] >= 0) {
        // 当前位置，应该 与之前的位置直接加起来, dp[index][rest -arr[index]]: 这里是rest的值是不断的减小,不算的等于上一次累加，减去
        // arr[index]就是上一次的值，也就是每个点直接相差的距离，因为是dp数组，枚举了所有的可能。
        dp[index][rest] += dp[index][rest - arr[index]]

      }


    }

  }

  return dp[0][target]

}

let arr = [1, 2, 3, 5]
let target = 5

var ans = way4(arr, target)

console.log(ans);