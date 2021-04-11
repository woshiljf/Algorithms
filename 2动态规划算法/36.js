function fn(n) {
    var res = 1
    while (n) {
        if (n == 1) break
        res *= n
        n--
    }
    return res



}

var f = fn(999)

console.log(f);