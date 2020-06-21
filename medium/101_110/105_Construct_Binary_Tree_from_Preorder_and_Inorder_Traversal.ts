/**
 * Created by Administrator on 2020/6/21.
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if( preorder.length === 0 || inorder.length === 0 ){
        return null;
    }
    function generateTree(valArray: number[]): TreeNode | null{
        let nodeValue: any = preorder[0];
        let index = valArray.indexOf(nodeValue);
        if( index === -1){
            return null;
        }
        preorder.shift();
        let leftTree: TreeNode | null = generateTree(valArray.slice(0, index));
        let rightTree: TreeNode | null = generateTree(valArray.slice(index + 1));
        let tree: any = new TreeNode(nodeValue);
        tree.left = leftTree;
        tree.right = rightTree;
        return tree;
    }
    return generateTree(inorder);
}