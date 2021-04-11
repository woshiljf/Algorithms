/**
 * @param {string} s
 * @return {boolean}
 * leetcode 1784
 */
var checkOnesSegment = function(s) {

    if (s.length == 1 && s[0] == '1') return true
    var arr = s.split('')
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count++
        }
    }
    for (let i = 0; i < arr.length; i++) {

        var num1 = arr[i]

        if (num1 == 1) {

            for (let j = i + 1; j < arr.length; j++) {

                var num2 = arr[j]
                    //   如果等于1,则继续找是不是下一个为1
                if (num2 == 1) {
                    continue
                }
                // 如果等于0，说明不是连续1，只要判断下一个是不是1，如果是1，说明不连续，直接返回0
                if (num2 == 0 && j !== arr.length - 1) {

                    if (arr[j + 1] == 1) return false

                }

            }

        }

    }

    return true

};