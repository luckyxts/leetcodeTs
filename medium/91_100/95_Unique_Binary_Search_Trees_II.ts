/**
 * Created by Administrator on 2020/6/17.
 */
function generateTrees(n: number): Array<TreeNode | null> {
    function gsTrees(start: number, end: number): Array<TreeNode | null>{
        let addTrees: Array<TreeNode | null> = [];
        if( start > end){
            addTrees.push(null);
            return addTrees
        }
        for(let i: number = start; i <= end; i++){
            let leftTrees: Array<TreeNode | null> = gsTrees(start, i - 1);
            let rightTrees: Array<TreeNode | null> = gsTrees(i + 1, end);
            leftTrees.forEach( leftTree => {
                rightTrees.forEach( rightTree => {
                    let currentTree: TreeNode | null = new TreeNode(i) || null;
                    currentTree.left = leftTree;
                    currentTree.right = rightTree;
                    addTrees.push(currentTree)
                })
            })
        }
        return addTrees
    }
    if( n === 0 ){
        return [];
    }
    return gsTrees(1, n);
};