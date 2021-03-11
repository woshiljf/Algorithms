/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var findContentChildren = function(g, s) {
    //  首先排序，从小到大，把孩子的口味和饼干大小排好
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let cookie = 0
    let child = 0
        // 
    while (cookie < s.length && child < g.length) {
        // 如果孩子的食量小于饼干的大小，记录这个孩子，孩子数++
        if (g[child] <= s[cookie]) {
            child++
        }
        // 饼干也++,因为之前已经从小到大排好序了
        cookie++
    }
    return child

};

var a = findContentChildren([3, 2], [1, 2, 3])
console.log(a);