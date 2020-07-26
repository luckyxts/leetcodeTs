/**
 * Created by Administrator on 2020/7/26.
 */
function validateStackSequences(pushed: number[], popped: number[]): boolean {
    // 模拟进展出站
    let tmp: Array<number | undefined>  = [];
    while(pushed.length > 0){
        tmp.push(pushed.shift());
        while( tmp.length > 0 && tmp[tmp.length - 1] === popped[0] ){
            tmp.pop();
            popped.shift()
        }
    }
    return popped.length === 0;
};