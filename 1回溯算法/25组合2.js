/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {

  let set = new Set()

  let arr = s.split('')

  let ans = []
  const track = function (arr, i) {

    if (i == arr.length && !set.has(arr.join(''))) {

      ans.push(arr.join(''))
      set.add(arr.join(''))
      return
    }

    for (let k = i; k < arr.length; k++) {
      //   k之后所有的位置，都可以与i位置进行交换
      swap(arr, i, k) // 交换 k与i位置进行交换
      track(arr, i + 1) // 执行递归
      swap(arr, i, k)  // 回退，也就是逐步恢复原来数组

    }


  }

  track(arr, 0)

  return ans


};

function swap (arr, i, j) {

  [arr[i], arr[j]] = [arr[j], arr[i]]

}

