/**
 * Created by Administrator on 2020/8/9.
 */
function isValidBST(root: TreeNode | null): boolean {
    // 中序遍历有序
    let res: number[] = [];

    function midSort(root: TreeNode | null): void{
        if(root){
            midSort(root.left);
            res.push(root.val);
            midSort(root.right);
        }
    }
    midSort(root);
    for(let i = 1 ; i < res.length; i++ ){
        if( res[i] <= res[i - 1]){
            return false;
        }
    }
    return true;
};