var maxDepth = function(root) {
    if (root == null) return 0

    var count = 1
    var queue = []
    queue.push(root)
    while (queue.length) {
        var size = queue.length
        for (let i = 0; i < size; i++) {
            var node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        if (queue.length) count++
    }
    return count
}