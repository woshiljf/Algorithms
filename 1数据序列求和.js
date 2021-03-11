// var arr = [4, 3, -15, 1, -10, 9, -3, 4]

var arr = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
]

var dp = new Array(arr.length)

for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(arr[i].length).fill(0)
}

console.log(dp)