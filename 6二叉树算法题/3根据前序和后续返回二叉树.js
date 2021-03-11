const buildTree = (preorder, inorder) => {
    if (inorder.length == 0) return null

    //构建根节点
    const root = new TreeNode(preorder[0])
        // 找到根节点的索引位置
    const mid = inorder.indexOf(preorder[0])
        // 左子树的遍历       左子树的前序遍历 preorder.slice(1,mid+1)
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))

    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
    return root
}