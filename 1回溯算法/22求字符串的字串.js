
// 字符串str没有重复元素的情况 ： abc

function getString (str) {

  let result = []
  const track = function (str, index, path) {


    if (index == str.length) {

      result.push(path)
      return
    }

    let no = path

    track(str, index + 1, no)

    let yes = path + str[index]

    track(str, index + 1, yes)


  }

  track(str, 0, '')

  return result


}

let res = getString('abc')

console.log(res);