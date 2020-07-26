/**
 * Created by Administrator on 2020/7/26.
 */
function constructArr(a: number[]): number[] {
    let res: number[] = [];
    let left: number[] = [1];
    let right: number[] = [];
    right[a.length - 1] = 1;
    for(let i: number = 1; i < a.length; i++){
        left[i] = left[i - 1] * a[i - 1];
    }
    for(let i: number = a.length - 2; i >= 0; i--){
        right[i] = right[i + 1] * a[i + 1];
    }
    for(let i = 0; i < a.length; i++){
        res[i] = left[i] * right[i];
    }
    return res;
};