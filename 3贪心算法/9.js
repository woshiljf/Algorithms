/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {

    var result = []
    result.push(s[0])
    for (let i = 1; i < s.length; i++) {

        var at = s[i]
            // 查询result里面是否存在同一个字母
        var index = result.indexOf(at)
        if (index >= 0) {
            // 如果存
            result.splice(index, 1)
            result.push(at)
        } else {
            result.push(at)
        }



    }

    return result.join('')




};

removeDuplicateLetters("bcabc")