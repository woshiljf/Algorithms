var isBalanced = function(root) {
    return balance(root) != -1
}

function balance(root) {
    if (!root) return 0
    const left = balance(root.left)
    const right = balance(root.right)
    if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
        return -1
    }
    return Math.max(left, right) + 1
}