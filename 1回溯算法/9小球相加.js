var obj = {
    0: 1,
    1: 2,
    2: 3,
}

var k = 3,
    N = 3
fn(obj, N)

function fn(obj, N) {
    var res = []

    var temp = new Array(N).fill(0)

    function _find(temp) {
        var i = 0,
            j = 0,
            k = 0

        while (i <= 1 || j <= 2 || k <= 3) {
            if (i <= 1) {
                temp.push(i, j, k)
                var sum = temp.reduce((c, r) => c + r, 0)
                if (sum == N) {
                    res.push(temp.slice())
                    return
                }
                i++
            } else if (j <= 2) {
                temp.push(i, j, k)

                var sum = temp.reduce((c, r) => c + r, 0)
                if (sum == N) {
                    res.push(temp.slice())
                    return
                }
                j++
            } else if (k <= 3) {
                temp.push(i, j, k)
                var sum = temp.reduce((c, r) => c + r, 0)
                if (sum == N) {
                    res.push(temp.slice())
                    return
                }
                k++
            }
        }
    }

    _find(temp)
    console.log(res)
}