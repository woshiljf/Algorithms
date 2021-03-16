var arr1 = [1, 2, 3, 4]
var arr2 = [1, 3, 4, 5, 6, 7]

// 两个有序数组升序组合
function mergeSort(arr1, arr2) {
    var result = []
    var i = 0,
        j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result
}

var res = mergeSort(arr1, arr2)
console.log(res);