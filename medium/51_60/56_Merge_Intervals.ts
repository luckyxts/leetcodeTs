/**
 * Created by Administrator on 2020/6/11.
 */
function merge(intervals: number[][]): number[][] {
    let res: number[][] = [];
    // 1，按首字母排序
    // 2，其始点是否落入上一个结果的区间中
    // 3，落入就放进去，没落入就从新开始
    if(intervals.length === 0){
        return res;
    }
    intervals = intervals.sort( (a: any, b: any) => a[0] - b[0]);
    res[0] = [intervals[0][0], intervals[0][1]];
    for(let i: number = 1 ; i < intervals.length; i++){
        let [start, end]: number[] = intervals[i];
        let lastRes = res[res.length - 1];
        let [lastStart, lastEnd] = lastRes;
        if( start >= lastStart && start <= lastEnd){
            res[res.length - 1] = [
                lastStart,
                Math.max(end, lastEnd)
            ];
        }else{
            res.push(
                [start, end]
            )
        }
    }
    return res;
}