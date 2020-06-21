/**
 * Created by Administrator on 2020/6/21.
 */
var connect = function(root) {
    // 层次遍历
    let quene = [];
    if(!root){
        return root;
    }
    quene.push(root);
    while( quene.length > 0 ){
        let n = quene.length;
        while(n > 0 ){
            let node = quene.shift();
            let left = node.left;
            let right = node.right;
            if( n === 1 ){
                node.next = null;
            }else{
                node.next = quene[0];
            }
            left && quene.push(left);
            right && quene.push(right);
            n--;
        }
    }
    return root;
};