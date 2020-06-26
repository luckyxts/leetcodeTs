/**
 * Created by Administrator on 2020/6/26.
 */
class LRUCache {
    // 双向链表加hash
    capacity: number;
    map: any;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key: number): number {
        if( !this.map.get(key) ) return -1;
        let val: number = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val);
        return val;
    }

    put(key: number, value: number): void {
        if( this.map.get(key) ){
            this.map.delete(key);
        }
        this.map.set(key, value);
        if( this.map.size > this.capacity ){
            this.map.delete( this.map.keys().next().value);
        }
    }

}

class sxListNode{
    constructor(val, key, next, pre){
        this.val = val;
        this.key = key;
        this.next = next;
        this.pre = pre;
    }
}


class LRUCache2 {
    // 双向链表加hash
    constructor(capacity) {
        this.dict = {};
        this.capacity = capacity;
        this.size = 0;
        this.head = new sxListNode();
        this.tail = new sxListNode();
        this.head.next = this.tail;
        this.tail.pre = this.head;
    }

    get(key) {
        // 返回第一个节点
        if( !this.dict[key] ) return -1;
        this.moveToHead( this.dict[key], false);
        return this.dict[key].val;
    }

    put(key, value){
        // 1,本来没有
        if( !this.dict[key] ){
            this.dict[key] = new sxListNode(value, key);
            this.moveToHead( this.dict[key], true);
            this.size += 1;
            if( this.size > this.capacity ){
                this.removeEnd();
            }
        }else{
            let node = this.dict[key];
            node.val = value;
            this.moveToHead( this.dict[key], false);
        }
    }

    moveToHead( node, isFirstIn){
        if( !isFirstIn ) {
            let nodePre = node.pre;
            let nodeNext = node.next;
            nodePre.next = nodeNext;
            nodeNext.pre = nodePre;
        }
        node.next = this.head.next;
        this.head.next.pre = node;
        node.pre = this.head;
        this.head.next = node;
    }

    // 删除最后节点
    removeEnd(){
        delete this.dict[this.tail.pre.key];
        this.tail.pre.pre.next = this.tail;
        this.tail.pre = this.tail.pre.pre;
    }
}