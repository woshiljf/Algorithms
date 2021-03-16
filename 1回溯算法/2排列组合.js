/**
 * 输入[1,2,3]
 * 
 * 排列为6种：[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]
   组合为8种：[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]
 */

// 排列
var data = [1, 2, 3]
    // printPailie(data)
    // printZuhe(data)

function printPailie(data) {
    // 要循环递归的函数
    function _print(data, result) {

        // 数组长度相同，表示已经组成了一组数据了
        if (result.length == data.length) {
            console.log(result)
                // 当result的长度等于data的长度，直接返回。当前执行的函数弹出执行栈
            return
        }
        for (let i = 0; i < data.length; i++) {
            // 如果当前的result，不包含，则入栈
            if (result.indexOf(data[i]) < 0) {
                // 入栈
                result.push(data[i])
                    // 递归
                _print(data, result)
                    // 这一步出栈非常到位（递归的函数执行回溯）
                result.pop()
            }

        }

    }
    _print(data, [])

}

// 组合

function printZuhe(data) {

    function _print(data, index, result) {

        console.log(result)
            // 没有想到index 这个，实在是差一点想法
        for (let i = index; i < data.length; i++) {

            result.push(data[i])
            _print(data, i + 1, result)
            result.pop()
        }


    }
    _print(data, 0, [])

}

printZuhe([1, 2, 3])