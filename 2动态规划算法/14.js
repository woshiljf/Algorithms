function binary_search(stack, target) {

    var left = 0,
        right = stack.length - 1

    while (left <= right) {

        var mid = (left + right) >> 1
        if (stack[mid] > target) {
            right = mid - 1
        } else if (target == stack[mid]) {
            return -1
        } else {
            left = mid + 1
        }

    }

    return mid
}

var res = binary_search([1, 6, 8, 9, 10, 11, 13], 10)

console.log(res);