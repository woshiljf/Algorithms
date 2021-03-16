/**
 *
 * 选择物品，物品有价值和大小，如何放进背包里面，使得背包拥有最大的价值
 *
 *
 */
// 递归解决问题
var value = [3000, 2000, 1500, 1000]
var size = [4, 3, 1, 1]
var bagCapacty = 4,
    n = 3

function max(a, b) {
    return a > b ? a : b
}
// console.log(dpnapasacdp(bagCapacty,size,value,n))
console.log(ddpnapsacdp(bagCapacty, size, value, n))
    // ddpnapsacdp(capacty,size,value,n)

// function dpnapasacdp(capacty, size, value, n) {
//     if (n == 0 || capacty == 0) {
//         return 0
//     }
//     if (size[n - 1] > capacty) {
//         return dpnapasacdp(capacty, size, value, n - 1)
//     } else {
//         return max(
//             value[n - 1] + dpnapasacdp(capacty - size[n - 1], size, value, n - 1),
//             dpnapasacdp(capacty, size, value, n - 1)
//         )
//     }
// }

// 动态规划解决问题

function ddpnapsacdp(capacty, size, value, n) {
    var dp = []
    for (var i = 0; i <= capacty + 1; i++) {
        dp[i] = []
    }
    // 创建二维数组的原因，一维数组存表示物品，二维存就临时的计算结果，用来对后来的解决方案做对比，做兑换
    for (var i = 0; i <= n; i++) {
        for (var w = 0; w <= capacty; w++) {
            if (i == 0 || w == 0) {
                dp[i][w] = 0
            } else if (size[i - 1] <= w) {
                // 当前商品的价值加上剩余空间能放的最大价值与空间能放的最大价值相比，谁更大
                dp[i][w] = Math.max(value[i - 1] + dp[i - 1][w - size[i - 1]], dp[i - 1][w])
            } else {
                // 如果当前物品的大小大于背包,把上一级的商品的最大值给就好了
                dp[i][w] = dp[i - 1][w]
            }
            console.log(dp[i][w] + ' ')
        }
    }
    console.log(dp)
    return dp[n][capacty]
}