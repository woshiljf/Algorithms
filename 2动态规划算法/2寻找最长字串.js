/**
 * 寻找最长的字串，一下方法是自己想出来的，感觉也符合动态规划的思路。
 * 
 */


var str1 = 'abbcc'
var str2 = 'dbbcc'

function findzichuan(str1, str2) {

    var max = 0
    var temp = ''
    var result = ''
    var index = 0
    for (let i = 0; i < str1.length; i++) {
        var s1 = str1[i]
        index = i
        for (let j = 0; j < str2.length; j++) {
            var s2 = str2[j]
            if (s1 == s2) {
                temp = s1
                var prestr = ''
                    // 这里使用循环来查找str1和str2之间的字串，这里使用字符串的substr截取字符串，includes来比较
                while (str2.includes(temp) && index <= str1.length) {
                    prestr = temp
                    index++
                    temp = str1.substr(i, index)
                }
                if (prestr.length > max) {
                    // 记录当前的最大字串长度，以及字符串
                    // 这也是动态规划的思路，记录当前。
                    max = prestr.length
                    result = prestr
                }

            }
        }

    }
    return result




}

console.log(findzichuan(str1, str2))