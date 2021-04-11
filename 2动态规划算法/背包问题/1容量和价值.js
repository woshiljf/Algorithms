/**
 *
 * 选择物品，物品有价值和大小，如何放进背包里面，使得背包拥有最大的价值
 *https://juejin.cn/post/6844903607855251463
 *
 */
// 递归解决问题
var value = [3000, 2000, 1500, 1000]
var size = [4, 3, 1, 1]
var bagCapacty = 4,
    n = 3

// console.log(dpnapasacdp(bagCapacty,size,value,n))
console.log(ddpnapsacdp(bagCapacty, size, value, n))

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
            // console.log(dp[i][w] + ' ')
        }
    }

    return dp[n][capacty]
}