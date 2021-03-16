/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 * https://leetcode-cn.com/problems/word-ladder-ii/solution/ru-guo-ni-fa-xian-kan-bie-ren-de-ti-jie-kan-bu-don/
 * leetcode 126
 */
var findLadders = function(beginWord, endWord, wordList) {

    var wordSet = new Set(wordList)
    wordSet.add(beginWord)
    if (!wordSet.has(endWord)) return []

    const levelMap = new Map()
    const wordMap = new Map()
    const visited = new Set()
    const queue = [beginWord]
    visited.add(beginWord)

    var finished = false
    var level = 0
    levelMap.set(beginWord, 0)

    while (queue.length) {
        var levelLen = queue.length
        level++
        for (let i = 0; i < levelLen; i++) {

            // 把这一层的单词出列
            var word = queue.shift()
            for (let i = 0; i < word.length; i++) {

                for (let c = 97; c <= 122; c++) {
                    // 从word的每一位变化，看看是不是在单词wordSet中找到对应的单词
                    var newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1)
                        // 给出的单词表中，没有该单词，直接继续
                    if (!wordSet.has(newWord)) continue
                    if (wordMap.has(newWord)) {
                        // 存放单词矩阵。也就是这个单词的上一层父单词
                        wordMap.get(newWord).push(word)

                    } else {

                        wordMap.set(newWord, [word])

                    }
                    if (visited.has(newWord)) continue
                    if (newWord == endWord) {
                        finished = true
                    }
                    levelMap.set(newWord, level)
                    queue.push(newWord)
                    visited.add(newWord)



                }



            }



        }
    }
    if (!finished) return []
    const res = []

    const dfs = (path, beginWord, word) => {

        if (word == beginWord) {
            res.push([beginWord, ...path])
            return
        }
        path.unshift(word)

        if (wordMap.get(word)) {

            for (let parent of wordMap.get(word)) {
                // 这里父成的单词加1等于 当前的单词所在的层，表示父亲层和起点单词层相连的
                if (levelMap.get(parent) + 1 == levelMap.get(word)) {

                    dfs(path, beginWord, parent)

                }



            }



        }
        //      回溯
        path.shift()

    }

    dfs([], beginWord, endWord)
    console.log(wordMap, levelMap);
    return res








};







var beginWord = "hit"
var endWord = "cog"
var wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
var res = findLadders(beginWord, endWord, wordList)
console.log(res);