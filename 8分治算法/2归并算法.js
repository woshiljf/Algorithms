function merger(arr, temp = []) {

    if (arr.length < 2) return arr
    var f = temp
    var mid = parseInt(arr.length / 2)
    var leftarr = arr.slice(0, mid)
    var rightarr = arr.slice(mid)
    return mergeTwo(merger(leftarr), merger(rightarr))
}

var arr = [5, 4, 3, 2, 1]

var res = merger(arr)

console.log(res);

function mergeTwo(arr1, arr2) {
    // right: arr2，left:arr1
    // right <left 的时候，产生逆序数：逆序数的个数 = 0+left.lenght
    var i = 0,
        j = 0
    var temp = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            temp.push(arr1[i])
            i++
        } else {
            // 这里有逆序数
            temp.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        temp.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        temp.push(arr2[j])
        j++
    }
    return temp
}