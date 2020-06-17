/**
 * Created by Administrator on 2020/6/17.
 */
function levelOrder(root: TreeNode | null): number[][] {
    if( !root ){
        return [];
    }
    let res: number[][] = [];
    let quene: TreeNode[] = [];
    quene.push(root);
    while( quene.length > 0 ){
        let len: number = quene.length;
        res.push([]);
        while( len > 0 ){
            let node: any = quene.shift();
            res[res.length - 1].push(node.val);
            if(node.left) quene.push(node.left);
            if(node.right) quene.push(node.right);
            len--;
        }
    }
    return res;
};