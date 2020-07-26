/**
 * Created by Administrator on 2020/7/26.
 */
function levelOrder(root: TreeNode | null): number[] {
    if( !root ){
        return [];
    }
    let quene: Array<TreeNode> = [root];
    let res: number[] = [];
    while( quene.length ){
        let node: TreeNode | undefined = quene.shift();
        if(node){
            res.push(node.val);
            node.left && quene.push(node.left);
            node.right && quene.push(node.right);
        }
    }
    return res;
};