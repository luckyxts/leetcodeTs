/**
 * Created by Administrator on 2020/8/9.
 */
var inorderSuccessor = function(root, p) {
    let hasNotFound = 1;
    let hasFound = 2;
    let hasFoundFinished = 3;
    let hasResStage = hasNotFound;
    let res = null;
    function midOper(r){
        if(r && hasResStage !== hasFoundFinished){
            midOper(r.left);
            if(hasResStage === hasFound){
                res = r;
                hasResStage = hasFoundFinished;
            }else if(r === p){
                hasResStage = hasFound;
            }
            midOper(r.right);
        }
    }
    midOper(root);
    return res;
};