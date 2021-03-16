function kuohao(n) {

    var result = []

    const generate = function(item, left, right) {

        if (item.length == 2 * n) {
            // 括号组合的长度等于2*n，则push进结果数组，且立刻返回，不要浪费时间
            result.push(item)
            return
        }
        // left大于0，不断的放入左括号
        if (left > 0) {
            generate(item + '(', left - 1, right)
        }
        // 放入右括号
        if (right > left) {
            generate(item + ')', left, right - 1)
        }
    }

    generate('', n, n)
    return result

}

var res = kuohao(2)

console.log(res);