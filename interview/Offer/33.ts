/**
 * Created by Administrator on 2020/7/26.
 */
function verifyPostorder(postorder: number[]): boolean {
    // 屁股为根节点，从屁股往前找，找到第一个比根节点小的位置，左边是做子树，右边是右子树
    // 屁股是根
    if( postorder.length <= 2){
        return true;
    }
    let root: any = postorder.pop();
    let i: number = postorder.length - 1;
    while(postorder[i] > root){
        i--;
    }
    let left: number[] = postorder.slice(0, i + 1);
    let right: number[] = postorder.slice(i + 1);
    for(let i: number = 0 ; i < left.length; i++){
        if(left[i] > root) return false;
    }
    for(let i: number = 0 ; i < right.length; i++){
        if(right[i] < root) return false;
    }
    return verifyPostorder(left) && verifyPostorder(right);
};