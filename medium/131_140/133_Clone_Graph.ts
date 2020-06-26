/**
 * Created by Administrator on 2020/6/26.
 */
var cloneGraph = function(node) {
    if( !node ){
        return node;
    }
    let map = new Map();
    let quene = [node];
    let n = new Node(node.val);
    map.set(node, n);
    while( quene.length > 0 ){
        var children = quene.shift();
        let n = map.get(children);
        for(let i = 0; i < children.neighbors.length; i++){
            if( !map.get(children.neighbors[i]) ){
                map.set(children.neighbors[i], new Node(children.neighbors[i].val));
                quene.push(children.neighbors[i]);
            }
            n.neighbors.push( map.get(children.neighbors[i]))
        }
    }
    return map.get(node);
};