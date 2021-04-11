function FindGreatestSumOfSubArray(array) {
    // write code here
    var dp = new Array(array.length).fill(0)
    var len = array.length
    dp[0] = array[0]
    var max = array[0]
    for (let i = 1; i < array.length; i++) {

        if (dp[i - 1] < 0) {
            dp[i] = Math.max(dp[i - 1], array[i])

        } else {
            dp[i] = dp[i - 1] + array[i]
        }

    }
    console.log(dp);
    return Math.max(...dp)



}

var s = FindGreatestSumOfSubArray([1, -2, 3, 10, -4, 7, 2, 5])
console.log(s);