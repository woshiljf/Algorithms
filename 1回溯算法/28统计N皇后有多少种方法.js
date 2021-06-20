/**
 * @param {number} n
 * @return {number}
 * 
 * leetcode 56
 */
var totalNQueens = function (n) {


  let recoder = new Array(n).fill(0)

  // 首先使用recoder 记录 皇后放置的位置 , 索引放置为行（i），值为: 列

  const getCount = function (i, recoder) {

    if (i == n) {
      return 1
    }

    let res = 0
    for (let j = 0; j < n; j++) {

      //    目前到了 第i行，之前的i-1行已经放置好了
      //  如果第i行，第j列能放置
      if (isValid(i, j, recoder)) {

        // 如果可以放置皇后，则记录放置后的位置，继续放往下一行，放皇后。(i+1)
        recoder[i] = j
        //  递归进行统计
        // 从i+1行继续放置皇后
        res += getCount(i + 1, recoder)
      }

    }

    return res

  }

  return getCount(0, recoder)

};

function isValid (i, j, recoder) {

  // 从0 行到i-1行进行遍历，判断是否 皇后位置(i,j) 能否可以放置
  for (let k = 0; k < i; k++) {

    // 如果列冲突           如果 两个斜线冲突，判断斜线冲突只需要判断（a,b）, (c,d)  如果, a-c == b -d ，会冲突
    if (recoder[k] == j || Math.abs(i - k) == Math.abs(recoder[k] - j)) {

      return false
    }

  }

  return true


}

