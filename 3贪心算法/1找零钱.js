function MinCoinChange(coins) {
    var coins = coins
    coins.sort((a, b) => a - b)
    this.makeChange = function(amount) {
        var change = [],
            total = 0
            //贪心算法，比较好理解的逻辑。首先从最大的开始拿数据，累加给total
        for (var i = coins.length; i >= 0; i--) {
            var coin = coins[i]
            while (total + coin <= amount) {
                change.push(coin)
                total += coin
            }
        }

        console.log(total)
        return change
    }
}

var minCoinChange = new MinCoinChange([186, 419, 83, 408])
console.log(minCoinChange.makeChange(6249))