/**
 * Created by Administrator on 2020/7/26.
 */
var getIntersectionNode = function(headA, headB) {
    let map = new Map();
    let p = headA;
    let q = headB;
    while(p || q){
        if(p){
            if ( map.get(p) ){
                return p;
            }else{
                map.set(p, true)
            }
            p = p.next;
        }
        if(q){
            if ( map.get(q) ){
                return q;
            }else{
                map.set(q, true)
            }
            q = q.next;
        }
    }
};