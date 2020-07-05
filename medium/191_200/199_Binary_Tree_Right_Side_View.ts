/**
 * Created by Administrator on 2020/7/5.
 */
function rightSideView(root: TreeNode | null): number[] {
    if( !root ){
        return [];
    }
    let quene: TreeNode[] = [root];
    let res: number[] = [];
    while( quene.length ){
        let n: number = quene.length;
        let i: number = 0;
        res.push(quene[quene.length - 1].val);
        while( i++ < n ){
            let t: TreeNode | undefined = quene.shift();
            if(t){
                t.left && quene.push(t.left);
                t.right && quene.push(t.right);
            }
        }
    }
    return res;
};