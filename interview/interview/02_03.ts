/**
 * Created by Administrator on 2020/8/9.
 */
var deleteNode = function(node) {
    let p = node;
    let q = p.next;
    while(q){
        p.val = q.val;
        let t = q;
        q = q.next;
        if(!q){
            p.next = null;
        }else{
            p = t;
        }
    }
};