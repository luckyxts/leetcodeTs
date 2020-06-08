/**
 * Created by Administrator on 2020/6/8.
 */
function threeSumClosest(nums: number[], target: number): number {
    // 三指针
    let minSum: number = Infinity;
    let arr: number[] = nums.sort( (a, b) => a - b);
    let m:number = 0;
    for(let i: number = 0; i < arr.length - 2; i++){
        if( i > 0 && arr[i] === arr[i - 1]){
            continue
        }
        let start: number = i + 1;
        let end: number = arr.length - 1;
        while( start < end ){
            while( start > i + 1 && arr[start] === arr[start - 1]) start++;
            while( end < arr.length - 2 && arr[end] === arr[end + 1]) end--;
            if( start >= end ){
                break;
            }
            let sum: number = arr[i] + arr[start] + arr[end];
            let min: number = Math.abs( sum - target);
            if ( min === 0 ){
                return sum;
            }

            if( min < minSum){
                minSum = min;
                m = sum;
            }
            if( sum > target ){
                end--;
            }else{
                start++;
            }
        }
    }
    return m;
}
