/*
   n = 3 :表示给出3对（）,3对括号组合的方式，不重复存到数组里面
 */ 

var n = 3

var generateParenthesis = function (n) {
   let res = []
   //  cur :当前字符  left：当前字符左括号 right:当前字符右括号
   // 想到这种方法的，先理清递归执行的条件，可以用栈的方式去理解递归的执行方式。
   const help = (cur, left, right) => {
     if (cur.length === 2 * n) {
       res.push(cur)
       return
     }
     if (left < n) {
       help(cur + "(", left + 1, right)
     }
     if (right < left) {
       help(cur + ")", left, right + 1);
     }
   }
   help("", 0, 0)
   return res
}

var res  = generateParenthesis(3)
console.log(res)