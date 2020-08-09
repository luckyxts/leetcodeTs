/**
 * Created by Administrator on 2020/8/9.
 */
var kthToLast = function(head, k) {
    let res = [];
    let p = head;
    while(p){
        res.push(p);
        p = p.next;
    }
    if( k > res.length) return -1;
    return res[res.length - k].val;
};