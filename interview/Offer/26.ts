/**
 * Created by Administrator on 2020/7/26.
 */
function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
    if(!B) return false;

    function compareAB(a: TreeNode | null, b: TreeNode | null): boolean {
        if(!b){
            return true;
        }else if(!a){
            return false;
        }else{
            return (b === B && ((compareAB(a.left, b))
                || (compareAB(a.right, b))))
                || (a.val === b.val && compareAB(a.left, b.left ) && compareAB(a.right, b.right));
        }
    }
    return compareAB(A, B);
}