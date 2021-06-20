var A = [9, 5, 7, 6, 2, 4]
var B = [10, 1, 4, 5, 3, 8]
addvantageCount(A, B)

function addvantageCount (arr1, arr2) {

  var A = arr1.slice()
  var B = arr2.slice()
  // 首先是对A和B进行排序
  A.sort((a, b) => a - b)
  B.sort((a, b) => a - b)
  // 使用map的方式记录B
  var map = {}
  // 首先使用map，记录arr2中的每一个元素，每一个元素的value为一个数组，用来记录比自己大的数
  for (let i = 0; i < arr2.length; i++) {
    var num = arr2[i]
    map[num] = []
  }
  // 使用temp来记录小于B中对应位置的元素
  var temp = []
  var k = 0
  for (let i = 0; i < A.length; i++) {
    // 如果A[i]>B[k] ,则把A[i] 存入到map[B[k]]
    if (A[i] > B[k]) {
      var n = B[k]
      map[n].push(A[i])
      k++
    } else {
      temp.push(A[i])
    }
  }
  var result = new Array(A.length).fill(0)
  // 取出元素
  for (let i = 0; i < arr2.length; i++) {
    // num
    var num = arr2[i]
    if (map[num].length > 0) {
      // 取出的元素，就是比当前元素num稍微大的元素
      result[i] = map[num].pop()
    } else {
      result[i] = temp.pop()
    }
  }
  console.log(result);
  return result
}