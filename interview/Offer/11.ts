/**
 * Created by Administrator on 2020/7/5.
 */
// 旋转数组的最小数字
function minArray(numbers: number[]): number {

    if( numbers.length === 0){
        return -1;
    }
    numbers = [...new Set(numbers)];
    let i: number = 0;
    let j: number = numbers.length - 1;
    if( numbers.length === 1 || numbers[0] < numbers[numbers.length - 1]){
        return numbers[0]
    }
    while( i <= j){
        let mid: number = Math.floor( (i + j) / 2);
        if( numbers[mid] < numbers[mid - 1]){
            return numbers[mid];
        }
        if( numbers[mid] > numbers[j] ){
            i = mid + 1;
        }else{
            j = mid - 1;
        }
    }
    return -1;
};