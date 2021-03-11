/**
 * 回溯算法：满足条件就进行下一步，不满足则推出（多使用递归的方法来执行）
 */

function findFullPath(root,value) {

    function _find(node,value,result) {

        result.push(node.value)
        if(node.value == value){
            return result
        }
        if(node.left) {

            let find = _find(node.left , value, result) 
            if(find) return find  
        }
        if(node.right) {

            let find = _find(node.right , value, result) 
            if(find) return find  
        }
        
        // 找不到当前的节点，就弹出
        result.pop()
        
        
    }
    
    return _find(root,value,[]) || []
    
}