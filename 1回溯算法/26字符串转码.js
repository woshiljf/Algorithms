/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {

  // 使用递归去解决这个问题
  const track = function (s, i) {

    if (i == s.length) return 1

    if (s[i] == '0') return 0

    if (s[i] == '1') {
      let res = track(s, i + 1)

      if (i + 1 < s.length) {

        res += track(s, i + 2)

      }

      return res

    }

    if (s[i] == '2') {

      let res = track(s, i + 1)

      if (i + 1 < s.length && s[i + 1] >= '0' && s[i + 1] <= '6') {
        res += track(s, i + 2)
      }

      return res

    }

    return track(s, i + 1)

  }


  return track(s, 0)


};

var str = '111111111111111'

var res = numDecodings(str)

console.log(res);