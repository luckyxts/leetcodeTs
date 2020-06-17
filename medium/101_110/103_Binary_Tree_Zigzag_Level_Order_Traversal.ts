/**
 * Created by Administrator on 2020/6/17.
 */
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if(!root){
        return []
    }
    let res: number[][] = [];
    let quene: TreeNode[] = [root];
    let singe: boolean = true;
    while( quene.length > 0 ){
        let n: number = quene.length;
        res.push([]);
        while(n > 0){
            let node: any = quene.shift();
            if( singe ){
                res[ res.length - 1].push(node.val);
            }else{
                res[ res.length - 1].unshift(node.val);
            }
            if( node.left ) quene.push(node.left);
            if( node.right ) quene.push(node.right);
            n--;
        }
        singe = !singe;
    }
    return res;
};