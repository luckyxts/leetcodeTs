/**
 * Created by Administrator on 2020/6/17.
 */
function isValidBST(root: TreeNode | null): boolean {
    // 中序遍历
    let tmp: number[] = [];
    function mid(root: TreeNode | null):void{
        if( root ){
            mid(root.left);
            tmp.push(root.val);
            mid(root.right);
        }
    }
    mid(root);
    for(let i: number = 0; i < tmp.length - 1; i++){
        if( tmp[i] >= tmp[ i + 1 ]){
            return false;
        }
    }

    return true;
}