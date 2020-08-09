/**
 * Created by Administrator on 2020/8/9.
 */
function checkSubTree(t1: TreeNode | null, t2: TreeNode | null): boolean {
    // 通过层次遍历的方式，开始进行对比
    let res = false;
    if(!t1){
        return !t2;
    }
    let quene = [t1];
    while( quene.length && !res){
        let n = quene.length;
        while( n && !res){
            let node: any = quene.shift();
            res = compareNode(node, t2);
            if (node.left)  quene.push(node.left);
            if (node.right) quene.push(node.right);
            n--;
        }
    }

    function compareNode(n1: any, n2: any): boolean{
        if( !n1 && !n2 ){
            return true;
        }else if( !n1 || !n2 ){
            return false
        }else{
            if (n1.val !== n2.val ){
                return false;
            }
            let c1: boolean = compareNode(n1.left, n2.left);
            let c2: boolean = compareNode(n1.right, n2.right);
            return c1 && c2;
        }
    }
    return res;
};