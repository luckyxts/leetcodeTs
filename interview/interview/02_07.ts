/**
 * Created by Administrator on 2020/8/9.
 */
var getIntersectionNode = function(headA, headB) {
    let map = new Map()
    let p = headA;
    let q = headB;
    while(p || q){
        if(p){
            if(map.get(p)){
                return p;
            }
            map.set(p, true)
            p = p.next;
        }
        if(q){
            if(map.get(q)){
                return q;
            }
            map.set(q, true)
            q = q.next;
        }
    }
    return null;
};