var S = 'a1b2'

var s1 = 'abc12d'
var letterCasePermutation = function(S) {
    var res = []

    function _find(start, s) {
        res.push(s)
        for (let i = start; i < s.length; i++) {
            if (s[i] >= 'a' && s[i] < 'z') {
                // 回溯算法，没有想到这么做
                _find(i + 1, s.slice(0, i) + s[i].toUpperCase() + s.slice(i + 1))
            } else if (s[i] >= 'A' && s[i] <= 'Z') {
                // 回溯算法，没有想到这么做

                _find(i + 1, s.slice(0, i) + s[i].toLowerCase() + s.slice(i + 1))
            }
        }
    }
    _find(0, S)

    console.log(res)
    return res
}

letterCasePermutation(s1)