/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function(land) {

    if (land.length == 0) return []

    var result = []
    var row = land.length
    var column = land[0].length
    for (let i = 0; i < land.length; i++) {

        for (let j = 0; j < land[0].length; j++) {

            if (land[i][j] == 0) {
                var temp = dfs(i, j, 0)
                result.push(temp)
            }

        }

    }

    function dfs(i, j) {

        if (i < 0 || i >= row || j < 0 || j >= column || land[i][j] !== 0) {
            return 0
        }
        // 访问过的点，都置为0
        land[i][j] = 1
            // 记住这里必须从1开始，表示水域的面积开始计数了
        let count = 1
            // 上下左右4个方向搜索，叠加
        count += dfs(i - 1, j)
        count += dfs(i + 1, j)
        count += dfs(i, j - 1)
        count += dfs(i, j + 1)
            // 四个斜的方向
        count += dfs(i - 1, j - 1)
        count += dfs(i + 1, j + 1)
        count += dfs(i + 1, j - 1)
        count += dfs(i - 1, j + 1)

        // 直接返回
        return count
    }

    return result.sort((a, b) => a - b)


};