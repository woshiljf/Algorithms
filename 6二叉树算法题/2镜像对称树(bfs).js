var isSymmetric = function(root) {
    if (root == null) return true
    var queue = []

    // 每次都放入左右两个节点
    queue.push(root.left, root.right)

    while (queue.length) {
        var len = queue.length
            // 每次拿出len个去比较就行
        for (let i = 0; i < len; i += 2) {
            // 出栈左右节点去比较
            var n_l = queue.shift()
            var n_r = queue.shift()
            if ((n_l && n_r == null) || (n_l == null && n_r)) {
                return false
            }
            if (n_l && n_r) {
                if (n_r.val !== n_l.val) return false

                // 继续放入,左边和右边的节点
                queue.push(n_l.left, n_r.right)
                queue.push(n_l.right, n_r.left)
            }
        }
    }
    return true
}