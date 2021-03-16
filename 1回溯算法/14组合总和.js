/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * leetcode 40
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    let set = new Set();
    let dfs = (start, arr, result) => {
        if (result === target) {
            var tmp = arr.slice().sort((a, b) => a - b).join('.'); // arr.slice() => 拷贝数组 sort => 升序 join =>
            if (!set.has(tmp)) {
                res.push(arr.slice());
            }
            set.add(tmp); // 每遍历一次，就将该路径的字符串保存起来，方便查重
            return;
        } else if (result > target) { // 老套路代码了
            return;
        }
        for (let i = start; i < candidates.length; i++) { // 下面全是老套路代码 回溯经典写法

            arr.push(candidates[i]);

            dfs(i + 1, arr, result + candidates[i]);

            arr.pop();
        }
    }
    dfs(0, [], 0);
    return res;
};