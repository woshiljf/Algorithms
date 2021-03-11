var levelOrderBottom = function(root) {
    if (!root) return []
    var res = []
    var queue = []
    queue.push(root)
    res.push([root.val])
    while (queue.length) {
        var s = queue.length
        for (let i = 0; i < s; i++) {
            var node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        if (queue.length) {
            var temp = []
            queue.forEach((node) => {
                temp.push(node.val)
            })
            res.unshift(temp)
        }
    }

    return res
}