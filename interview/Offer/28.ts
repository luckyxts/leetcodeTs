/**
 * Created by Administrator on 2020/7/26.
 */
function isSymmetric(root: TreeNode | null): boolean {
    if( !root ){
        return true;
    }
    let quene: TreeNode[] = [root];

    while( quene.length ){
        let n: number = quene.length;
        let left: TreeNode[] = [];
        let right: TreeNode[] = [];
        while( n > 0 ){
            let leftRoot: TreeNode = quene[0];
            let rightRoot: TreeNode = quene[quene.length - 1];
            quene.shift();
            quene.pop();
            // 都没有
            let leftLeftVal = leftRoot.left ? leftRoot.left.val: null;
            let leftRightVal = leftRoot.right ? leftRoot.right.val: null;
            let rightRightVal = rightRoot.right ? rightRoot.right.val: null;
            let rightLeftVal = rightRoot.left ? rightRoot.left.val: null;
            if( leftLeftVal !== rightRightVal || leftRightVal !== rightLeftVal){
                return false;
            }
            leftRoot.left && left.push(leftRoot.left);
            leftRoot.right && left.push(leftRoot.right);
            rightRoot.right && right.unshift(rightRoot.right);
            rightRoot.left && right.unshift(rightRoot.left);
            n -= 2;
        }
        quene = left.concat(right);

    }
    return true;
};