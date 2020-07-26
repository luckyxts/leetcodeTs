/**
 * Created by Administrator on 2020/7/26.
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
    // tmp计的是下表
    let res: number[] = [];
    if( nums.length === 0 ) return res;
    let l: number = 0;
    let tmp: number[] = [];
    while( l  < nums.length ){
        if (tmp.length > 0 && l - tmp[0] + 1 > k){
            tmp.shift();
        }
        while( tmp.length > 0
        && nums[l] > nums[tmp[tmp.length - 1]]){
            tmp.pop();
        }
        tmp.push(l);

        if( l >= k - 1 ){
            res.push(nums[tmp[0]]);
        }
        l++;
    }
    return res;
};
class MaxQueue {
    quene: number[];
    depene: number[];
    constructor() {
        this.quene = [];
        this.depene = [];
    }

    max_value(): number {
        if( this.depene.length ){
            return this.depene[0];
        }
        return -1;
    }

    push_back(value: number): void {
        while( this.depene.length > 0
        && this.depene[this.depene.length - 1] < value ){
            this.depene.pop();
        }
        this.quene.push(value);
        this.depene.push(value);
    }

    pop_front(): number {
        if( this.quene.length === 0) return -1;
        let ret: any = this.quene.shift();
        if( ret === this.depene[0] ){
            this.depene.shift();
        }
        return ret;
    }
}