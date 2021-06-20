
function way4 (arr, target, index) {

  if (arr == null || arr.length == 0 || target < 0) {
    return 0
  }

  // 记忆化搜索，这里会出现大量的重复计算，如果使用dp，记录已经计算过的张数，和剩余的钱数，
  // 如果有，直接返回，没有，则进行递归计算
  let N = arr.length
  let dp = new Array(N + 1).fill(0)

  for (let i = 0; i <= N; i++) {
    dp[i] = new Array(target + 1).fill(-1)
  }
  // 把dp放进递归的循环里
  return process(arr, index, target, dp)


}

function process (arr, index, rest, dp) {

  // 一进来首先判断，此位置index,rest有没有计算过了


  if (dp[index][rest] !== -1) {
    return dp[index][rest]
  }


  if (index == arr.length) {

    dp[index][rest] = rest == 0 ? 1 : 0

    return dp[index][rest]
  }


  let ways = 0

  for (let zhang = 0; rest - zhang * arr[index] >= 0; zhang++) {

    ways += process(arr, index + 1, rest - zhang * arr[index], dp)

  }
  dp[index][rest] = ways
  return ways




}

let arr = [1, 2, 3, 5]
let target = 5

var ans = way4(arr, target, 0)

console.log(ans);