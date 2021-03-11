var str1 = 'abbcc'
var str2 = 'dbbcc'
lcs(str1, str2)

function lcs(word1, word2) {
    var max = 0
    var index = 0
    var lcsarr = new Array(word1.length)
    for (var i = 0; i <= word1.length; ++i) {
        lcsarr[i] = new Array(word2.length)
        for (let j = 0; j <= word2.length; ++j) {
            lcsarr[i][j] = 0
        }
    }

    for (var i = 0; i < word1.length; ++i) {
        for (var j = 0; j < word2.length; ++j) {

            if (i == 0 || j == 0) {
                lcsarr[i][j] = 0
            } else {
                if (word1[i - 1] == word2[j]) {
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1
                } else {
                    lcsarr[i][j] = 0
                }
            }
            if (max < lcsarr[i][j]) {
                max = lcsarr[i][j]
                index = i
            }

        }

    }
    var str = ''
    console.log(lcsarr);
    for (var i = index - max; i <= max; i++) {
        str += word2[i]
    }
    console.log(str)

}