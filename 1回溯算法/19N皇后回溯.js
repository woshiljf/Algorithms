const solveNQueens = (n) => {

    // 初始化location
    var location = []
    for (let i = 0; i < n; i++) {

        var a = new Array(n).fill('.')
        location.push(a)
    }
    var mark = []
    for (let i = 0; i < n; i++) {
        var a = new Array(n).fill(0)
        mark.push(a)

    }
    var result = []

    generate(0, n, location, result, mark)

    var res = []
    for (let i = 0; i < result.length; i++) {

        var item = result[i]
        for (let j = 0; j < n; j++) {

            item[j] = item[j].join('')
        }
        res.push(item)



    }

    return res

};

function generate(k, n, location, result, mark) {

    if (k == n) {
        var temp = copyArr(location)
        result.push(temp)
        return
    }

    for (let i = 0; i < n; i++) {
        //    表示可以放置皇后
        if (mark[k][i] == 0) {
            // 记录回溯之前的标记数组
            var arr = copyArr(mark)
            location[k][i] = 'Q'
                //  把放置皇后的位置的8个方向都变为不可放置
            putdown(k, i, mark)
                //   继续回溯
            generate(k + 1, n, location, result, mark)
                // 不符合，回退
            mark = arr
                // 把之前放置皇后的地方放置位点(.)
            location[k][i] = '.'
        }
    }



}
// 复制数组
function copyArr(arr1) {
    var temp = []
    for (let i = 0; i < arr1.length; i++) {
        var arr = arr1[i]
        temp.push(arr.slice())
    }
    return temp

}


function putdown(x, y, mark) {

    // 定义方向数组，总共8个方向,把8个方向全部弄成不可放置的
    var dx = [-1, 1, 0, 0, -1, -1, 1, 1]
    var dy = [0, 0, 1, -1, -1, 1, -1, 1]

    for (let i = 0; i < mark.length; i++) {

        for (let j = 0; j < 8; j++) {
            // 把八个方向全部弄位1
            var newX = x + i * dx[j]
            var newY = y + i * dy[j]
            if (newX >= 0 && newX < mark.length && newY >= 0 && newY < mark.length) {
                mark[newX][newY] = 1
            }

        }

    }
}

var res = solveNQueens(4)
console.log(res);