/**
 *
 * 新名词：剪枝：提前剪掉不必要的路径（回溯算法，或者动态规划算法中，用的最多，发现不合理或者浪费时间的条件）
 *
 * 根据数组的中的元素进行组合相加，等于给定的数据，每个数据只能用一次。
 *
 *
 */
var candidates = [10, 1, 2, 7, 6, 1, 5],
    target = 8
var combinationSum2 = function(candidates, target) {
    let n = candidates.length
    let res = []
    let tmpPath = []
    candidates = candidates.sort((a, b) => {
        return a - b
    })

    let backtrack = function(tempPath, target, start) {
        if (target == 0) {
            res.push(tempPath)
            return
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > target) break //不加也可以，加了可以减少一次循环
                // 这一句很重要，因为数组中有重复的数组，数组排过序的，当前元素于上一个元素相同，进入下个循环就好，
                // 不然会出现相同的组合
            if (i > start && candidates[i - 1] == candidates[i]) continue // 剪枝，剪掉不必要的递归路径

            tempPath.push(candidates[i])

            backtrack(tempPath.slice(), target - candidates[i], i + 1)
            tempPath.pop()
        }
    }

    backtrack(tmpPath, target, 0)
    return res
}
var res = combinationSum2(candidates, target)
console.log(res)