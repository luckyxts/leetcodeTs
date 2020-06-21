/**
 * Created by Administrator on 2020/6/21.
 */
var buildTree = function(inorder, postorder) {
    if( postorder.length === 0 || inorder.length === 0 ){
        return null;
    }
    function generateTree(valArray){
        let nodeValue = postorder[postorder.length - 1];
        let index = valArray.indexOf(nodeValue);
        if( index === -1){
            return null;
        }
        postorder.pop();
        let rightTree = generateTree(valArray.slice(index + 1));
        let leftTree = generateTree(valArray.slice(0, index));
        let tree = new TreeNode(nodeValue);
        tree.left = leftTree;
        tree.right = rightTree;
        return tree;
    }
    return generateTree(inorder);
};