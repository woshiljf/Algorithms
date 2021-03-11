/**
 *
 * @param {``} inorder
 * @param {*} postorder
 *
 * 找规律就完事了。
 */

var buildTree = function(inorder, postorder) {
    if (postorder.length == 0) return null
    const root = new TreeNode(postorder[postorder.length - 1])

    const rootindex = inorder.indexOf(postorder[postorder.length - 1])
        // 左节点的中序和后续
    root.left = buildTree(
            inorder.slice(0, rootindex),
            postorder.slice(0, rootindex)
        )
        // 右节点的中序和后续。
    root.right = buildTree(
        inorder.slice(rootindex + 1),
        postorder.slice(rootindex, postorder.length - 1)
    )

    return root
}