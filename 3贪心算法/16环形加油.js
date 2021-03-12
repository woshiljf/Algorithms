/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * leetcode 143
 */
var canCompleteCircuit = function(gas, cost) {
    let total = 0; // 总的剩余油料
    let curr = 0; // 当前站点的剩余油料
    let start = 0; // 起始点
    for (let i = 0; i < gas.length; i++) {
        curr += gas[i] - cost[i];
        if (curr < 0) {
            start = i + 1;
            curr = 0;
        }
        total += gas[i] - cost[i]
    }
    return total >= 0 ? start : -1;
}