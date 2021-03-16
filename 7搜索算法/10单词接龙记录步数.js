/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {

    // 构建连接图
    // 这个题可以使用无向图的方式来解决
    var graph = {}
    constructGraph(beginWord, wordList, graph)
        // 设置一个队列Q，和一个记录已经搜索过的集合visted
    return BFS(beginWord, endWord, graph)

};

function BFS(beginWord, endWord, graph) {
    var queue = []
    var visted = new Set()
    visted.add(beginWord)
        // push进队列的是图的顶点和访问的步数,[顶点，步数]
    queue.push([beginWord, 1])
    while (queue.length) {

        var head = queue.shift()
        var step = head[1] + 1
        if (head[0] == endWord) return head[1]
        var adjusts = graph[head[0]]
        for (let i = 0; i < adjusts.length; i++) {

            var node = adjusts[i]
            if (!visted.has(node)) {

                queue.push([node, step])
                visted.add(node)

            }



        }


    }

    return 0
}

// 两个单词直接，只相差一个词
function isConnect(w1, w2) {
    var count = 0
    for (let i = 0; i < w1.length; i++) {

        if (w1[i] !== w2[i]) {
            count++
        }
    }
    return count == 1
}

// 构建图
function constructGraph(beginWord, wordList, graph) {
    wordList.push(beginWord)
    for (let i = 0; i < wordList.length; i++) {
        var key = wordList[i]
            // 构建顶点
        graph[key] = []
    }
    for (let i = 0; i < wordList.length; i++) {
        for (let j = i + 1; j < wordList.length; j++) {
            // 构建顶点所连接的边
            if (isConnect(wordList[i], wordList[j])) {
                graph[wordList[i]].push(wordList[j])
                graph[wordList[j]].push(wordList[i])
            }
        }
    }
}

var beginWord = "hit"
var endWord = "cog"
var wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
var res = ladderLength(beginWord, endWord, wordList)
console.log(res);