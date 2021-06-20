
function way4 (arr, target, index) {

  if (arr == null || arr.length == 0 || target < 0) {
    return 0
  }

  return process(arr, index, target)


}

function process (arr, index, rest) {

  if (index == arr.length) {

    return rest == 0 ? 1 : 0
  }

  let ways = 0

  for (let zhang = 0; rest - zhang * arr[index] >= 0; zhang++) {

    ways += process(arr, index + 1, rest - zhang * arr[index])

  }

  return ways

}


let arr = [1, 3, 5, 10]
let target = 50

var ans = way4(arr, target, 0)

console.log(ans);