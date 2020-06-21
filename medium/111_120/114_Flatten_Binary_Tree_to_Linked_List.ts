/**
 * Created by Administrator on 2020/6/21.
 */
function flatten(root: TreeNode | null): void {
    let p: TreeNode | null = root;

    function dg(root: TreeNode | null): TreeNode | null{
        if(!root){
            return null;
        }

        let leftTree: TreeNode | null = dg(root.left);
        let rightTree: TreeNode | null = dg(root.right);
        root.left = null;
        if( rightTree && leftTree ){
            let l: TreeNode = leftTree;
            while( l.right ){
                l = l.right;
            }
            root.right = leftTree;
            l.right = rightTree
        }
        else if( !rightTree ){
            root.right = leftTree;
        }

        return root;
    }

    dg(root);
}