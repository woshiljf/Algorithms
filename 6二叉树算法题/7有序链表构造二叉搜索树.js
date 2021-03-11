var sortedListToBST = function(head) {
    var listArr = []
    var current = head

    // 先拿到有序链表的所有有序数据
    while (current) {
        listArr.push(current.val)
        current = current.next
    }

    // 根据数据构建二叉搜索树
    function buildTree(listArr, start, end) {
        if (start > end) return null
        var mid = (start + end) >> 1
        const root = new TreeNode(listArr[mid])
        root.left = buildTree(listArr, start, mid - 1)
        root.right = buildTree(listArr, mid + 1, end)
        return root
    }

    return buildTree(listArr, 0, listArr.length - 1)
}