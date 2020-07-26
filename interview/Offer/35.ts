/**
 * Created by Administrator on 2020/7/26.
 */
var copyRandomList = function(head) {
    let res = null;
    let p = head;
    let m = new Map();
    while(p){
        if( !m.get(p)){
            m.set(p, new Node(p.val))
        }
        if( p.random && !m.get(p.random)){
            m.set(p.random, new Node(p.random.val))
        }
        if( p.next && !m.get(p.next)){
            m.set(p.next, new Node(p.next.val))
        }
        m.get(p).next = m.get(p.next) ? m.get(p.next) : null;
        m.get(p).random = m.get(p.random) ? m.get(p.random) : null;
        if(!res){
            res = m.get(p);
        }
        p = p.next;
    }
    return res;
};