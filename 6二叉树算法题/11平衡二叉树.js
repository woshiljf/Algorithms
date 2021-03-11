/**
 * 
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
  一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 * 时间复杂度：O(nlogn)
   空间复杂度：O(n)
 * 
 */

const isBalance = function(root) {
    if (!root) return true

    return (
        Math.abs(height(root.left) - height(root.right)) <= 1 &&
        isBalance(root.left) &&
        isBalance(root.right)
    )
}

function height(root) {
    if (!root) return 0
    return Math.max(height(root.left), height(root.right)) + 1
}