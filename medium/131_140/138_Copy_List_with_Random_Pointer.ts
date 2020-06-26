/**
 * Created by Administrator on 2020/6/26.
 */
var copyRandomList = function(head) {
    if( !head ) return head;
    let map = new Map();
    map.set(head, new Node(head.val));
    let p = head;
    while( p ){
        let next = p.next;
        let random = p.random;
        if( next && !map.get(next) ){
            map.set(next, new Node(next.val));
        }
        if( random && !map.get(random) ){
            map.set(random, new Node(random.val));
        }
        map.get(p).next = map.get(next) || null;
        map.get(p).random = map.get(random) || null;
        p = p.next;
    }
    return map.get(head);
};