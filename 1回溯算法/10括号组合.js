var n = 3

function fn(n) {
    var res = []

    function help(cur, left, right) {
        if (left > n || left < right) return

        if (cur.length == 2 * n) {
            res.push(cur)
            return
        }
        help(cur + '(', left + 1, right)
        help(cur + ')', left, right + 1)
    }
    help('', 0, 0)
    console.log(res)
}
fn(3)