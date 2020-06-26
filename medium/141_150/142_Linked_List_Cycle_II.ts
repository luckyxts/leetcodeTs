/**
 * Created by Administrator on 2020/6/26.
 */
var detectCycle = function(head) {
    let map = new Map();
    let p = head;
    while( p ){
        if( map.get(p) ) {
            return p;
        }else {
            map.set(p, true);
        }
        if( !p.next ) return null;
        p = p.next;
    }
    return null;
};