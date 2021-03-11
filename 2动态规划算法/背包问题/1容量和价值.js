/**
 *
 * 选择物品，物品有价值和大小，如何放进背包里面，使得背包拥有最大的价值
 *
 *
 */
// 递归解决问题
var value = [4, 5, 10, 11, 13]
var size = [3, 4, 7, 8, 9]
var bagCapacty = 16,
    n = 5

function max(a, b) {
    return a > b ? a : b
}
// console.log(knapasack(bagCapacty,size,value,n))
console.log(dKnapsack(bagCapacty, size, value, n))
    // dKnapsack(capacty,size,value,n)

function knapasack(capacty, size, value, n) {
    if (n == 0 || capacty == 0) {
        return 0
    }
    if (size[n - 1] > capacty) {
        return knapasack(capacty, size, value, n - 1)
    } else {
        return max(
            value[n - 1] + knapasack(capacty - size[n - 1], size, value, n - 1),
            knapasack(capacty, size, value, n - 1)
        )
    }
}

// 动态规划解决问题

function dKnapsack(capacty, size, value, n) {
    var k = []
    for (var i = 0; i <= capacty + 1; i++) {
        k[i] = []
    }
    // 创建二维数组的原因，一维数组存表示物品，二维存就临时的计算结果，用来对后来的解决方案做对比，做兑换
    for (var i = 0; i <= n; i++) {
        for (var w = 0; w <= capacty; w++) {
            if (i == 0 || w == 0) {
                k[i][w] = 0
            } else if (size[i - 1] <= w) {
                k[i][w] = max(value[i - 1] + k[i - 1][w - size[i - 1]], k[i - 1][w])
            } else {
                // 如果当前物品的大小大于背包，就赋值，把k[i][k]=k[i-1][w]
                k[i][w] = k[i - 1][w]
            }
            console.log(k[i][w] + ' ')
        }
    }
    console.log(k)
    return k[n][capacty]
}