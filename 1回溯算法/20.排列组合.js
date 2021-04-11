function Permutation(str) {
    // write code here
    var res = new Set()
    var map = []
        // 主要解决的是str中重复元素的问题
    const track = function(str, temp) {

        if (temp.length == str.length) {

            res.add(temp)
            return

        }
        for (let i = 0; i < str.length; i++) {

            if (map[i]) {
                continue
            }
            //使用数组索引来判断，元素是否遍历了
            map[i] = true
            track(str, temp + str[i])
            map[i] = false
        }

    }
    track(str, '')
    return [...res]

}
module.exports = {
    Permutation: Permutation
};