/**
 * Created by Administrator on 2020/8/9.
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root === p || root === q){
        return root;
    }
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if(left && right){
        return root;
    }
    return left ? left: right;
};