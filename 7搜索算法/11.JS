function BFS() {
    var queue = []
    var visted = new Set()
        // push进队列的是图的顶点和访问的步数,[顶点，步数]
    queue.push([beginWord, 1])
    while (queue.length) {

        var head = queue.shift()
        if (head[0] == endWord) return head[1]
            // 从图里面取出和head的响铃节点，push进队列
            // 如果当前顶点没有访问过，则push进visted

        var k = head[1] + 1
        var adjusts = graph[head[0]]
        for (let i = 0; i < adjusts.length; i++) {
            var temp = adjusts[i]
            if (!visted.has(temp)) {
                queue.push([temp, k])
                visted.add(head[0])
            }

        }


    }

    return 0
}