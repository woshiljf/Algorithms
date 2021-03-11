const minDepth = (root) => {
    if (root == null) return 0

    const queue = [root]
    let depth = 1

    while (queue.length) {
        const levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            const cur = queue.shift()
            if (cur.left == null && cur.right == null) {
                return depth
            }
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        depth++ // 肯定有下一层，如果没有早就return了
    }
}