/**
 * Created by Administrator on 2020/7/5.
 */
// 重建二叉树
var buildTree = function(preorder, inorder) {
    if( inorder.length === 0 ){
        return null;
    }
    let rVal = preorder.shift();
    let root = new TreeNode(rVal);
    let index = inorder.indexOf(rVal);
    root.left = buildTree(preorder, inorder.slice(0, index));
    root.right = buildTree(preorder, inorder.slice(index + 1));
    return root;
};