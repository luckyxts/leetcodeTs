/**
 * Created by Administrator on 2020/7/5.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.nextArray = []
    if (root){
        let tmpArray = [root]
        while( tmpArray.length > 0 ){
            let cur = tmpArray.pop()
            this.nextArray.push(parseInt(cur.val))
            cur.left && tmpArray.push(cur.left)
            cur.right && tmpArray.push(cur.right)
        }
    }
    this.nextArray.sort((a,b)=>{
        return a - b
    })
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.nextArray.shift()
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.nextArray.length !== 0
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */