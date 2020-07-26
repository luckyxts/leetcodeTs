/**
 * Created by Administrator on 2020/7/26.
 */
var treeToDoublyList = function(root) {
    // 中序遍历放到数组中，然后排序搞起来？
    let arr = [];
    function mid(root){
        if(root){
            mid(root.left);
            arr.push(root);
            mid(root.right)
        }
    }

    mid(root);
    for(let i = 0; i < arr.length; i++){
        let first, next;
        if(i === arr.length - 1){
            first = arr[arr.length - 1];
            next = arr[0];
        }else{
            first = arr[i];
            next = arr[i + 1];
        }
        first.right = next;
        next.left = first;

    }
    return arr[0];

};