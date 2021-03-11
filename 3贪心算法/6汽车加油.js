var canCompleteCircuit = function(gas, cost) {


    var count = 0,
        index = 0
    var amount = 0
    for (let i = index; i < gas.length;) {
        var j = i
        while (count < gas.length) {

            if (j >= gas.length) {
                j = 0
            }
            amount += gas[j]
            amount -= cost[j]
            if (amount < 0) break

            count++
            j++
        }

        if (amount >= 0) return i
        count = 0
        i++
        amount = 0

    }

    return -1

};

var gas = [5, 1, 2, 3, 4],
    cost = [4, 4, 1, 5, 1]


var f = canCompleteCircuit(gas, cost)
console.log(f);

/**
 * 
 * @param {*} gas 
 * @param {*} cost 
 * 循环加油
 */

var canCompleteCircuit1 = function(gas, cost) {
    let left = 0,
        start = 0,
        totalGas = 0,
        totalCost = 0;
    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        left += gas[i] - cost[i];
        if (left < 0) {
            start = i + 1;
            left = 0;
        }
    }
    if (totalGas < totalCost) {
        return -1;
    }
    return start;
};