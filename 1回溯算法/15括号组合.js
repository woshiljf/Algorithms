/**
 * 
 * @param {*} n 
 * @returns 
 * 
 * ((((', '((()', '(()(',
  '(())', '()((', '()()',
  '())(', '()))', ')(((',
  ')(()', ')()(', ')())',
  '))((', '))()', ')))(',
  '))))'
 */


function kuohao(n) {
    var result = []
    const generate = function(item) {
        if (item.length == 2 * n) {
            result.push(item)
            return
        }
        generate(item + '(')
        generate(item + ')')
    }
    generate('')
    return result

}
var res = kuohao(2)
console.log(res);