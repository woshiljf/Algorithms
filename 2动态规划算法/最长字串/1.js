var a1 = 'abcda',
    a2 = 'dbbcfcd'

lcs(a1, a2)

function lcs(word1, word2) {
    var l1 = word1.length,
        l2 = word2.length
    var max = 0,
        index = 0
    var arr = new Array(l1)
    for (let i = 0; i < l1; i++) {
        arr[i] = new Array(l2).fill(0)
    }

    for (let i = 0; i < l1; i++) {
        for (let j = 0; j < l2; j++) {
            if (i == 0 || j == 0) arr[i][j] = 0
            else {
                if (word1[i - 1] == word2[j - 1]) {
                    arr[i][j] = arr[i - 1][j - 1] + 1
                } else {
                    arr[i][j] = 0
                }
            }
            if (max < arr[i][j]) {
                max = arr[i][j]
                index = i
            }
        }
    }

    var str = ''
    for (let i = index - max; i <= max; i++) {
        str += word2[i]
    }
    console.log(str)
    return str
}