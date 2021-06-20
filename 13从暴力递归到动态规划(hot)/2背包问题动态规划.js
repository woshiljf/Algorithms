function getMaxValue (v, w, bag) {


  // 使用dp来存储遍历过程中可能遇到的值，
  // 这里有两个遍历，一个是bag包的大小变化，另外一个是w，也就是货物的重量,使用二维数组来保存这个状态

  let size = w.length

  let dp = new Array(size + 1).fill(0)

  for (let i = 0; i <= size; i++) {
    dp[i] = new Array(bag + 1).fill(0)
  }
  for (let index = 1; index <= size; index++) {
    for (let rest = 1; rest <= bag; rest++) {
      // 从index为1，rest1到rest = 11为止
      let p1 = dp[index - 1][rest]
      let p2 = -1
      if (rest >= w[index - 1]) {
        // 求最大值，当前没有装东西的价值，与装了东西的价值相比较
        p2 = v[index - 1] + dp[index - 1][rest - w[index - 1]]
      }
      dp[index][rest] = Math.max(p1, p2)
    }
  }
  return dp[size][bag]
}


// 
function dpWay (w, v, bag) {


  let size = w.length

  let dp = new Array(size + 1).fill(0)

  for (let i = 0; i <= size; i++) {
    dp[i] = new Array(bag + 1).fill(0)
  }



  for (let index = size - 1; index >= 0; index--) {

    for (let rest = 1; rest <= bag; rest++) {

      let p1 = dp[index + 1][rest]
      let p2 = -1

      // 包的剩余容量打印当前重物的容量，可以装东西
      if (rest >= w[index]) {
        // 求最大值，当前没有装东西的价值，与装了东西的价值相比较
        p2 = v[index] + dp[index + 1][rest - w[index]]

      }

      dp[index][rest] = Math.max(p1, p2)
    }

  }

  return dp[0][bag]

}

let w = [3, 2, 4, 7]
let v = [5, 6, 3, 19]
let bag = 11

// let ans = getMaxValue(v, w, bag)
let ans = dpWay(w, v, bag)

console.log(ans);

