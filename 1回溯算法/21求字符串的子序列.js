function getString (str) {


  let result = []

  const track = function (str, index, arr) {


    result.push(arr.slice())

    for (let i = index; i < str.length; i++) {
      arr.push(str[i])
      track(str, i + 1, arr)
      arr.pop()

    }
  }

  track(str, 0, [])

  return result

}

let res = getString('abc')

console.log(res);