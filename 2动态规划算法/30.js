function quickSum(arr) {

    if (arr.length <= 1) {

        if (arr.length == 1) return arr[0]
        return 0
    }
    var mid = parseInt(arr.length / 2)
    var midValu = arr[mid]
    var sum = quickSum(arr.slice(0, mid)) + midValu + quickSum(arr.slice(mid + 1))

    return sum

}

var res = quickSum([1, 2, 3, 4])

console.log(res);