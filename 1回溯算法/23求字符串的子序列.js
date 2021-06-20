
// 字符串str 有重复元素的情况 ： abbccab

function getString (str) {

  let set = new Set()
  const track = function (str, index, path) {

    if (index == str.length) {

      set.add(path)

      return
    }

    let no = path

    track(str, index + 1, no)

    let yes = path + str[index]

    track(str, index + 1, yes)


  }

  track(str, 0, '')

  return set


}

let res = getString('abaa')

console.log(res);