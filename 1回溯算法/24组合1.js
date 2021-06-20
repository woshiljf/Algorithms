
// 组合，优雅的实现了，而不用额外的数组记录
// arr中的数字不出现重复元素的情况
function panlie (arr) {

  let ans = []
  const track = function (arr, i) {
    if (i == arr.length) {
      ans.push(arr.slice())
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
}

var res = panlie(['a', 'b', 'c'])

console.log(res);

function swap (arr, i, j) {

  [arr[i], arr[j]] = [arr[j], arr[i]]



}