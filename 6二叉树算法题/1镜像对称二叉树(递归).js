/**
 *
 * @param {*} root
 * 镜像对称数 递归法
 */

var isSymmetric = function(root) {
    let fun = (r1, r2) => {
        if (r1 == r2) return true

        if (r1 && r2 && r1.val == r2.val) {
            // 左右节点相比较
            return fun(r1.left, r2.right) && fun(r1.right, r2.left)
        }
        return false
    }

    return root ? fun(root.left, root.right) : true
}