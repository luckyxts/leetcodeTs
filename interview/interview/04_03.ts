/**
 * Created by Administrator on 2020/8/9.
 */
var listOfDepth = function(tree) {
    // 这不就是层次遍历嘛
    if(!tree){
        return null;
    }
    let quene = [tree];
    let res = [];
    while( quene.length > 0 ){
        let n = quene.length;
        let p = null;
        let head = null;
        while(n){
            let t = quene.shift();
            if(t.left){
                quene.push(t.left);
            }
            if(t.right){
                quene.push(t.right);
            }
            if(!p){
                p = new ListNode(t.val);
                head = p;
            }else{
                let pTmp = new ListNode(t.val);
                p. next = pTmp;
                p = pTmp;
            }
            n--;
        }
        res.push(head);
    }
    return res;
};