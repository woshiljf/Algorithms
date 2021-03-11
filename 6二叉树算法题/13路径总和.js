var hasPathSum = function(root, sum) {
    if (root == null) return false
    if (root.left == null && root.right == null) {
        return sum - root.val
    }

    return (
        hasPathSum(root.left, sum - root.val) ||
        hasPathSum(root.right, sum - root.val)
    )
}