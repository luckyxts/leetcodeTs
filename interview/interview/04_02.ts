/**
 * Created by Administrator on 2020/8/9.
 */
function sortedArrayToBST(nums: number[]): TreeNode | null {
    // 思路就是中间为节点
    if (nums.length === 0){
        return null;
    }
    let mid: number = Math.floor(nums.length / 2);
    let n: number = nums[mid];
    let root: TreeNode = new TreeNode(n);
    let leftArray: number[] = nums.slice(0, mid);
    let left: TreeNode | null = sortedArrayToBST(leftArray);
    let rightArray: number[] = nums.slice(mid+1);
    let right: TreeNode | null = sortedArrayToBST(rightArray);
    root.left = left;
    root.right = right;
    return root;
};