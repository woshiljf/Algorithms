/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {   
    /**
     * ******动态规划和回溯法的子函数******
     *         **     **           
     *        *****************      
     *      **        **             
     *    **          **          
     *      *********************     
     *             ** ** **          
     *            **  **  **            
     *           **   **   **          
     *          **    **    **          
     *         **     **     **    
     * ******动态规划和回溯法的子函数******
     */
//


    // 动态规划法 模型方程
    /**F(n) =  for(k:0 -> n-1){ arr.push( '('+F(k)+')' +  F(n-1-k) ) }
     * @param {number} n
     * @return {string[]}
     */
    function F(n){
        if(list[n]){
            return list[n]
        }
        if(n==0 || n==1){
            list[0] = [''];
            list[1] = ['()']
            return list[n];
        }
        var result = [];
        for(let i = 0; i<=n-1; i++){ //最后一对括号的 需要括的括号数目
            let preF = F(i);
            let aftF = F(n-1-i);
            for(let k=0;k<preF.length;k++){
                let currentPre = '('+preF[k]+')';                
                for(let j=0; j<aftF.length; j++){ //括了i个括号后，剩余n-1-i个括号需要组合
                    result.push(currentPre+aftF[j]);
                }
            }           
        }
        list[n] = result;
        return list[n];
    }
    // 回溯法方程
    /**trackback()
     * @param {number} n
     * @return {string[]}
     */
    function trackback(n) {
    var LR = [n, n] //存剩余的左右括号个数
    var result = bracket(LR, '');
    /**bracket(LR)
     * @param {number[]} LR
     * @param {string} current 下一层的选择
     * @return {string[]} 存放从叶子节点到该层的 拼接的括号 组  
     */
    function bracket(LR, current) {
      var currentLR = [...LR];
      var LeftArr = [];
      var rightArr = [];
      if (currentLR[0] > currentLR[1]) {
        return [];
      } else if (currentLR[1] == 0) {
        return [')']
      } else {
        if (currentLR[0] == 0) {
          //左边为0，右边不为0 向右→走
          currentLR[1]--;
          rightArr = bracket(currentLR, ')');
          for (let i = 0; i < rightArr.length; i++) {
            rightArr[i] = current + rightArr[i]
          }
          return rightArr
        } else {
          //左边右边都不为0
          currentLR[0]--;
          LeftArr = bracket(currentLR, '(');
          for (let i = 0; i < LeftArr.length; i++) {
            LeftArr[i] = current + LeftArr[i]
          };
          currentLR[0]++;
          currentLR[1]--;
          rightArr = bracket(currentLR, ')');
          for (let i = 0; i < rightArr.length; i++) {
            rightArr[i] = current + rightArr[i]
          }
          return LeftArr.concat(rightArr);
        }
      }
    }
    return result;
  }




    //动态规划法：
    var list = new Array(n+1); //记录F(0)->F(n)的结果 每项都是 string[]。避免重复计算提高效率
    var result = F(n);
    return result;
    // 回溯法
    // var trackbackResult = trackback(n);    
    // return trackbackResult
}
var res = generateParenthesis(3)
console.log(res)