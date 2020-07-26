/**
 * Created by Administrator on 2020/7/26.
 */
function singleNumbers(nums: number[]): number[] {
    // 分组，两个不同的数组亦或，肯定会有一位不同，
    // 找出那一位，也就是亦或后为1的哪一位，
    // 与每一个数字进行按位与，=0，是其中一个组，否则是另外一个组
    let a: number = 0;
    let b: number = 0;
    let ret: number = 0;
    nums.forEach( v => {
        ret ^= v;
    })
    let h: number = 1;
    while( (h & ret) === 0){
        h = h << 1;
    }
    nums.forEach( n => {
        if( n & h ){
            a ^= n;
        }else{
            b ^= n;
        }
    })

    return [a, b];
};

function singleNumber(nums: number[]): number {
    let dict: any = {};

    nums.forEach( n => {
        if( !dict[n]){
            dict[n] = 1;
        }else{
            dict[n] += 1;
        }
    })

    for(let key in dict){
        if(dict[key] === 1){
            return Number(key);
        }
    }
    return -1;
};