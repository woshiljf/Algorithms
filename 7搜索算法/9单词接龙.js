/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {

    if (!wordList.includes(endWord)) return 0

    const queue = [
        [beginWord, 1]
    ]
    const wordListSet = new Set(wordList)
    while (queue.length) {
        const queueLenth = queue.length
        for (let i = 0; i < queueLenth; i++) {
            const [word, walk] = queue.shift()
            for (let j = 0; j < word.length; j++) {

                // 这里循环了25次，匹配是否有单词和单词列表中的一致
                for (let charCod = 97; charCod <= 122; charCod++) {

                    const newWord = `${word.slice(0,j)}${String.fromCharCode(charCod)}${word.slice(j+1)}`
                    if (newWord == endWord) return walk + 1

                    if (wordListSet.has(newWord)) {
                        queue.push([newWord, walk + 1])
                        wordListSet.delete(newWord)
                    }
                }

            }

        }

    }

    return 0


};